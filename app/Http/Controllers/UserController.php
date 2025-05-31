<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            $user = auth()->user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => "Olá, $user->name! Seja bem-vindo(a) ao Smartedu.",
                'token' => $token,
                'user' => $user
            ]);
        }

        return response()->json(['message' => 'E-mail ou senha invalidos!'], 401);
    }
}
