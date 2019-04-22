<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FilmResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return [
        'id' => $this->id,
        'name' => $this->title,
        'slug' => $this->slug,
        'description' => $this->description,
        'realeasedate' => $this->realeasedate,
        'ticketprice' => $this->ticketprice,
        'country' => $this->country,
        'genre' => $this->genre,
        'photo' => $this->photo,
        'comments' => $this->comments,
        'rating' => $this->rating,
        'created_at' => (string) $this->created_at,
        'updated_at' => (string) $this->updated_at,
      ];
    }
}
