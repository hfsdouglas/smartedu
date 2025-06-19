<?php

use App\Models\Classes;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    $classes = Classes::all(); // ou qualquer critério para pegar o primeiro vídeo

    return view('teste', compact('classes'));
});
