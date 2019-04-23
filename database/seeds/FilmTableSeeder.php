<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use App\Film;

class FilmTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\User::class)
      ->create()
      ->each(function ($user) {
        $user
        ->films()
        ->save(
          factory(App\Film::class)
          ->make()
        );
      });
    }
}
