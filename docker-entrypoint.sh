#!/bin/bash
set -e

# Attente de la DB
echo "Attente de la base de données ($DB_HOST)..."
until pg_isready -h "$DB_HOST" -p 5432 -U "$DB_USERNAME"; do
    echo "Postgres n'est pas prêt -- attente"
    sleep 2
done

# Nettoyage des caches au démarrage pour éviter les conflits de clés/configs
php artisan config:clear
php artisan cache:clear

# Migrations
echo "Exécution des migrations..."
php artisan migrate --force

# Recréation du cache de config (Optionnel en prod, mais seulement si ton .env est fixe)
# php artisan config:cache

exec "$@"
