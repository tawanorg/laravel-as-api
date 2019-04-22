<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Comment;
use App\User;

class Film extends Model
{
  protected $fillable = [
    'slug',
    'name',
    'description',
    'realeasedate',
    'ratings',
    'ticketprice',
    'country',
    'genre',
    'photo',
  ];

  public function comments()
  {
    return $this->hasMany(Comment::class);
  }
}
