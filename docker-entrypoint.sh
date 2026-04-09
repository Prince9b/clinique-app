#!/bin/bash

set -e

# 1. Attente de la base de données
# On utilise les variables du .env pour que ce soit flexible
echo "Attente de la base de données ($DB_HOST)..."

until pg_isready -h "$DB_HOST" -p 5432 -U "$DB_USERNAME"; do
    echo "Postgres n'est pas prêt -- attente"
    sleep 2
done

# 2. Optimisations Laravel (Crucial en Prod)
# Ces commandes mettent en cache la configuration et les routes pour plus de vitesse
echo "Optimisation de Laravel..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 3. Migrations
# Le drapeau --force est obligatoire en production
echo "Exécution des migrations..."
php artisan migrate --force

# 4. Lancement de l'application
exec "$@"
