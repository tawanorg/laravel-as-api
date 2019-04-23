<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;
use App\Http\Resources\FilmResource;

class FilmController extends Controller
{
    public function __construct()
    {
      $this->middleware('auth:api')->except(['index', 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return FilmResource::collection(Film::paginate(1));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $film = Film::create([
        'name' => $request->title,
        'slug' => $request->slug,
        'description' => $request->description,
        'realeasedate' => $request->realeasedate,
        'ticketprice' => $request->ticketprice,
        'country' => $request->country,
        'genre' => $request->genre,
        'photo' => $request->photo,
        'rating' => $request->rating,
      ]);

      return new FilmResource($film);
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
      $film = Film::where('slug', $slug)->first();
      return new FilmResource($film);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Film $film)
    {
      $film->update($request->only([
        'name',
        'slug',
        'description',
        'realeasedate',
        'ticketprice',
        'country',
        'genre',
        'photo',
        'rating',
      ]));

      return new FilmResource($film);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Film $film)
    {
      $film->delete();
      return response()->json([
        'deleted' => true,
      ], 200);
    }
}
