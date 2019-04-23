<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// USER API
Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});
Route::post('/user/register', 'AuthController@register');
Route::post('/user/login', 'AuthController@login');

// FILM API
Route::apiResource('film', 'FilmController');
Route::get('/film/{slug}', 'FilmController@show');

