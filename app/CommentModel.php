<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class CommentModel extends Model
{
  protected $table = 'comment';

  public function user()
  {
    return $this->belongsTo(User::class);
  }

}
