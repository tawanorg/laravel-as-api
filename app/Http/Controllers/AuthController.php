<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\User;
use Auth;

class AuthController extends Controller
{
  public function register(Request $request) {
    $validator = Validator::make($request->all(), [
      'email' => 'required|email|unique:users',
      'name' => 'required|min:3|max:50',
      'password' => 'required|confirmed|min:6',
    ]);

    if ($validator->fails()) {
      return response()->json([
        'error' => $validator->messages(),
      ]);
    }

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => bcrypt($request->password),
    ]);

    $token = auth()->login($user);

    return $this->respondWithToken($token);

  }

  public function login(Request $request) {
    $credentials = $request->only(['email', 'password']);
    $validator = Validator::make($request->all(), [
      'email' => 'required|exists:users,email',
      'password' => 'required',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->messages(), 403);
    }

    if (!$token = auth()->attempt($credentials)) {
      return response()->json(['error' => 'Unauthorized'], 401);
    }

    return $this->respondWithToken($token);
  }

  protected function respondWithToken($token) {
    return response()->json([
      'user' => Auth::user(),
      'access_token' => $token,
      'token_type' => 'bearer',
      'expires_in' => auth()->factory()->getTTL() * 60
    ]);
  }
}
