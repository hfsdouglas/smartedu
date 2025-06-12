<?php

namespace App\Http\Controllers;

use App\Models\School;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Cria uma nova escola com seu respectivo diretor.
     * @param Request 
     * @return array
     */
    public function create(Request $request)
    {
        $request->validate([
            'razao_social' => 'required|string|max:255',
            'fantasia' => 'required|string|max:255',
            'cnpj' => 'required|string|unique|max:14|min:14',
            'telefone' => 'required|string|unique|max:9|min:8',
            'diretor' =>  'required|string|max:255',
            'cpf' => 'required|string|unique:users|max:11|min:11',
            'email' => 'required|email|unique:users',
            'celular_diretor' => 'required|string|unique:users|max:9|min:8',
            'senha' => 'required|string|max:32|min:8',
            'confirmacao' => 'required|string|max:32|min:8|same:senha',
            'endereco' => 'required|string|max:255',
            'numero' => 'required|string|max:6',
            'complemento' => 'required|string|max:32',
            'bairro' => 'required|string|max:32',
            'cep' => 'required|string|max:8|min:8',
            'cidade' => 'required|string|max:32',
            'uf' => 'required|string|max:2|min:2'
        ]);

        $director = $request->only(['diretor', 'cpf', 'email', 'celular_diretor', 'senha']);
        $school = $request->except($director);

        // Todo
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(School $school)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(School $school)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, School $school)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(School $school)
    {
        //
    }
}
