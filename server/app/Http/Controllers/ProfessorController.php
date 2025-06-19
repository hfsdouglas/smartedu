<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use App\Models\User;

class ProfessorController extends Controller
{
    public function index() {
        $users = Professor::with(['user', 'classes'])->get();

        if (!$users) {
            return response()->json([
                "message" => "Não foram encontrados usuários."
            ], 404);
        }

        return response()->json($users);
    }

    public function show($id) {
        $user = Professor::where('id', $id)->with(['user', 'classes'])->first();

        if (!$user) {
            return response()->json([
                "message" => "Nenhum usuário encontrado."
            ], 404);
        }

        return response()->json($user);
    }
}
