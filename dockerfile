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
FROM php:8.4-fpm

# Installation des dépendances système nécessaires à Laravel et PostgreSQL
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    postgresql-client \
    && docker-php-ext-install \
    pdo_pgsql \
    pgsql \
    zip \
    bcmath \
    pcntl \
    exif

WORKDIR /var/www

# Installation de Composer (récupéré depuis l'image officielle)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Installation des dépendances PHP (Vendor)
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Copie de tout le code source de l'application
COPY . .

# RÉCUPÉRATION DES ASSETS COMPILÉS (Correction du bug Manifest)
# On récupère le dossier public/build généré dans le STAGE 1
COPY --from=assets-builder /app/public/build ./public/build

# Optimisation finale de l'autoloader Composer
RUN composer dump-autoload --optimize

# Configuration des permissions pour Laravel (indispensable pour storage/cache)
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache

# Nettoyage des fichiers temporaires pour alléger l'image
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Gestion de l'Entrypoint
COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Exposition du port PHP-FPM
EXPOSE 9000

CMD ["php-fpm"]
