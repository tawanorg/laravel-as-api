<?php

use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\Film::class)
      ->create()
      ->each(function ($film) {
        $film
        ->comments()
        ->save(
          factory(App\Comment::class)
          ->make()
        );
      });
    }
}
