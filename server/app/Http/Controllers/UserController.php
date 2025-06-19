<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index() {
        $users = User::all();

        if (!$users) {
            return response()->json([
                "message" => "Não foram encontrados usuários."
            ], 404);
        }

        return response()->json($users);
    }

    public function show($id) {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                "message" => "Nenhum usuário encontrado."
            ], 404);
        }

        return response()->json($user);
    }

    public function create(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'cpf' => 'required|string|unique:users|max:11|min:11',
            'phone' => 'required|string|unique:users|max:11|min:8',
            'password' => 'required|string|max:32|min:8',
            'password2' => 'required|string|max:32|min:8|same:password',
            'is_professor' => 'required|boolean',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'cpf' => $request->cpf,
            'phone' => $request->phone,
            'password' => bcrypt($request->password),
        ]);

        $is_professor = $request->input("is_professor");

        if ($is_professor) {
            $user->professor()->create([
                'bio' => null, 
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => "Olá, $user->name! Seu cadastro foi efetuado com sucesso.",
            'token' => $token,
            'user' => $user
        ]);
    }
}
