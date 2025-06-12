<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasUuids, HasFactory;

    protected $fillable = [
        'razao_social',
        'fantasia',
        'cnpj',
        'ativo',
        'telefone',
        'endereco',
        'numero',
        'complemento',
        'bairro',
        'cep',
        'cidade',
        'uf'
    ];
}
