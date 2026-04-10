# =========================
# 1. STAGE BUILDER (FULL ENVIRONMENT)
# =========================
FROM php:8.4-fpm-alpine AS assets-builder

# Installer Node, NPM et les outils de build pour les extensions PHP
RUN apk add --no-cache nodejs npm icu-dev libpq-dev libzip-dev zip unzip git

# Installer les extensions PHP indispensables pour que Artisan fonctionne
RUN docker-php-ext-install pdo_pgsql pgsql zip

# Installer Composer pour installer les dépendances PHP nécessaires au build
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

# 1. Installer les dépendances JS
COPY package*.json ./
RUN npm install

# 2. Installer les dépendances PHP (Nécessaire pour Wayfinder)
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader

# 3. Copier le reste du projet et générer l'autoloader
COPY . .
RUN composer dump-autoload --no-dev

# 4. ENFIN, Build Vite
# Maintenant Artisan a tout ce qu'il faut (extensions + vendor)
RUN npm run build


# =========================
# 2. STAGE PHP (IMAGE FINALE - DEBIAN)
# =========================
FROM php:8.4-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev libpq-dev libzip-dev zip unzip git curl postgresql-client \
    && docker-php-ext-install pdo_pgsql pgsql zip bcmath pcntl exif

WORKDIR /var/www

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# On ré-installe proprement pour l'image finale
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction

COPY . .

# On récupère les assets buildés du stage 1
COPY --from=assets-builder /app/public/build ./public/build

RUN composer dump-autoload --optimize \
    && chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["php-fpm"]
