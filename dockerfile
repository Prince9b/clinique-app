# Étape 1 : Compilation des assets (JS/CSS)
FROM node:22-alpine AS assets-builder
WORKDIR /app
COPY package*.json ./
COPY .npmrc ./
RUN npm install --ignore-scripts=false
COPY . .
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
