<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClassesController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

Route::prefix('/user')->group(function () {
    Route::post('/', [UserController::class, 'create']);

    Route::middleware('auth:sanctum')->group(function() {
        Route::get('/', [UserController::class, 'index']);
        Route::get('/{id}', [UserController::class, 'show']);
    });
});

Route::middleware('auth:sanctum')->prefix('/professor')->group(function() {
    Route::get('/', [ProfessorController::class, 'index']);
    Route::get('/{id}', [ProfessorController::class, 'show']);

    // Rotas do recurso "classes" vinculado a um professor
    Route::prefix('{professor}/class')->group(function () {
        Route::post('/', [ClassesController::class, 'store']);
        Route::put('/{class}', [ClassesController::class, 'update']);
    });
});