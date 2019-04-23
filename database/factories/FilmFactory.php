<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Film;
use Faker\Generator as Faker;

$factory->define(Film::class, function (Faker $faker) {
  $name = $faker->name;
  return [
      'user_id' => function () {
        return factory(App\User::class)->create()->id;
      },
      'slug' => Str::slug($name, '-'),
      'name' => $name,
      'description' => $faker->paragraph(),
      'realeasedate' => $faker->date(),
      'rating' => $faker->numberBetween(1, 5),
      'ticketprice' => $faker->randomNumber(),
      'country' => $faker->country(),
      'genre' => json_encode(['Action']),
      'photo' => 'https://picsum.photos/id/664/350/350',
  ];
});
