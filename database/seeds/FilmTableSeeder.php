<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class FilmTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = Faker::create();

      foreach (range(1,3) as $index) {
        $name = $faker->name;
        DB::table('films')->insert([
          'slug' => Str::slug($name, '-'),
          'name' => $name,
          'description' => $faker->text,
          'realeasedate' => $faker->dateTime(),
          'rating' => $faker->numberBetween(0, 5),
          'ticketprice' => $faker->randomNumber(2),
          'country' => $faker->country,
          'genre' => json_encode(['Action'], true),
          'photo' => '',
        ]);
      }
    }
}
