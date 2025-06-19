<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($credentials)) {
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

    public function logout(Request $request) {
        $user = auth()->user();
        $user->tokens()->delete();

        return response()->json(['message' => "Até logo, $user->name!"]);
    }
}
