# =========================================================
# STAGE 1 : ASSETS BUILDER (NODE.JS)
# =========================================================
FROM node:22-alpine AS assets-builder

WORKDIR /app

# On copie les fichiers de dépendances en premier pour optimiser le cache Docker
COPY package*.json ./
RUN npm install

# On copie le reste du projet
COPY . .

# On lance la compilation (Vite)
# Note : Wayfinder doit être désactivé ou conditionné dans vite.config.js
# pour ne pas chercher PHP pendant ce build.
RUN npm run build


# =========================================================
# STAGE 2 : RUNTIME (PHP 8.4)
# =========================================================
# STAGE 2 : RUNTIME (PHP 8.4)
# =========================================================
FROM php:8.4-fpm

# ... (garder l'installation des dépendances système libpng, libpq, etc.)
RUN apt-get update && apt-get install -y \
    libpng-dev libpq-dev libzip-dev zip unzip git curl postgresql-client \
    && docker-php-ext-install pdo_pgsql pgsql zip bcmath pcntl exif

WORKDIR /var/www

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# --- FIX ICI ---
# 1. On copie d'abord TOUT le code (y compris le fichier artisan)
COPY . .

# 2. Maintenant on peut installer les dépendances PHP sans erreur
RUN composer install --no-dev --optimize-autoloader --no-interaction

# 3. On récupère les assets compilés du stage précédent
COPY --from=assets-builder /app/public/build ./public/build
# ---------------

# Configuration des permissions
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache

# Nettoyage
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
EXPOSE 9000
CMD ["php-fpm"]
