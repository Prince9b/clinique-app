# Étape 1 : Compilation des assets (JS/CSS)
FROM node:22-alpine AS assets-builder
WORKDIR /app

# Installer PHP et Composer pour le plugin wayfinder
RUN apk add --no-cache php83 php83-phar php83-mbstring php83-openssl php83-tokenizer php83-xml php83-dom php83-xmlwriter php83-ctype php83-json \
    && ln -s /usr/bin/php83 /usr/bin/php

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Installer les dépendances PHP
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --ignore-platform-reqs

COPY . .
RUN composer dump-autoload --no-scripts --ignore-platform-reqs

# Installer les dépendances Node et builder
COPY package*.json ./
COPY .npmrc ./
RUN npm install --ignore-scripts=false
RUN npm run build

# Étape 2 : Image PHP finale
FROM php:8.4-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    postgresql-client

RUN docker-php-ext-install pdo_pgsql pgsql zip bcmath pcntl exif

WORKDIR /var/www

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# On copie d'abord les fichiers de dépendances pour optimiser le cache
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader

# On copie le reste du code
COPY . .

# On récupère le build s'il existe (on utilise --link pour éviter les erreurs si le dossier est vide)
COPY --from=assets-builder /app/public ./public

RUN composer install --no-dev --optimize-autoloader

RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Vérifie bien que ce fichier existe sur ton PC !
COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD [ "php-fpm" ]
