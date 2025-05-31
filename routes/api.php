<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/user')->group(function () {
    Route::get('/', [UserController::class])->middleware('auth:sanctum');
    Route::get('/{id}', [UserController::class, 'show'])->middleware('auth:sanctum');
});

Route::prefix('auth')->group(function () {
    Route::post('/login', [UserController::class, 'login']);
    Route::post('/signup', [UserController::class, 'signup']);
});