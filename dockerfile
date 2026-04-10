# =========================================================
# STAGE 1 : ASSETS BUILDER (NODE.JS)
# =========================================================
FROM node:22-alpine AS assets-builder

WORKDIR /app

COPY package*.json ./
COPY .npmrc ./
RUN npm install

COPY . .
RUN npm run build

# =========================================================
# STAGE 2 : RUNTIME (PHP 8.4)
# =========================================================
FROM php:8.4-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev libpq-dev libzip-dev zip unzip git curl postgresql-client \
    && docker-php-ext-install pdo_pgsql pgsql zip bcmath pcntl exif

WORKDIR /var/www

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copier le code source
COPY . .

# Installer les dépendances PHP
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Copier le build Vite depuis le stage 1
COPY --from=assets-builder /app/public/build ./public/build

# Permissions
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache

# Nettoyage
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
EXPOSE 9000
CMD ["php-fpm"]
