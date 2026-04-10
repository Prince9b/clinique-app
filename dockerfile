# =========================
# 1. STAGE BUILDER (PHP + NODE)
# =========================
FROM php:8.4-fpm-alpine AS assets-builder

# Installation de Node et NPM sur Alpine (nécessaire pour le plugin Wayfinder)
RUN apk add --no-cache nodejs npm

WORKDIR /app
COPY package*.json ./
RUN npm install

# On copie TOUT car Wayfinder a besoin d'accéder aux classes PHP pour générer les types
COPY . .
RUN npm run build

# =========================
# 2. STAGE PHP (PRODUCTION)
# =========================
FROM php:8.4-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev libpq-dev libzip-dev zip unzip git curl postgresql-client \
    && docker-php-ext-install pdo_pgsql pgsql zip bcmath pcntl exif

WORKDIR /var/www

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Dépendances PHP
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Copie du code source
COPY . .

# RÉCUPÉRATION DES ASSETS (C'est ici qu'on règle ton problème)
# On récupère le dossier généré dans le stage builder
COPY --from=assets-builder /app/public/build ./public/build

# Optimisations et Permissions
RUN composer dump-autoload --optimize \
    && chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["php-fpm"]
