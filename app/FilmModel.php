<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\CommentModel;
use App\User;

class FilmModel extends Model
{
  protected $fillable = [
    'slug',
    'name',
    'description',
    'realeasedate',
    'rating',
    'ticketprice',
    'country',
    'genre',
    'photo',
  ];

  public function comments()
  {
    return $this->hasMany(CommentModel::class);
  }
}
