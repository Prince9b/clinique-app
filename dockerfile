# =========================
# 1. STAGE NODE (ASSETS VITE)
# =========================
FROM node:22-alpine AS assets-builder

WORKDIR /app

# Copier uniquement dépendances Node
COPY package*.json ./
RUN npm install

# Copier le reste du projet
COPY . .

# Build Vite (CRÉE public/build/manifest.json)
RUN npm run build


# =========================
# 2. STAGE PHP (BACKEND)
# =========================
FROM php:8.4-fpm

# Installer dépendances système
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

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# =========================
# INSTALL DEPENDANCES PHP
# =========================
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction

# =========================
# COPIE DU CODE
# =========================
COPY . .

# =========================
# COPIE DES ASSETS VITE BUILDÉS
# (IMPORTANT FIX)
# =========================
COPY --from=assets-builder /app/public/build ./public/build

# =========================
# FINAL OPTIMIZATION
# =========================
RUN composer dump-autoload --optimize

# Permissions Laravel
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache

# Nettoyage
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# =========================
# ENTRYPOINT
# =========================
COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["php-fpm"]
