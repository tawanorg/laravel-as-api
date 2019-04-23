## Installation
- docker run --rm -v $(pwd):/app composer install
- sudo chown -R $USER:$USER ~/laravel-app
- docker-compose up
- docker-compose exec app php artisan key:generate
- docker-compose exec app php artisan config:cache
- docker-compose exec app php artisan migrate
- docker-compose exec app php artisan db:seed
- Open url ```http://localhost/#/films```

