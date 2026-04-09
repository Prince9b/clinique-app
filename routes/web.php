<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\PatientsController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::get('/register', [RegisterController::class, 'index'])->name('index.register');
Route::post('/register/store', [RegisterController::class, 'store'])->name('register.store');


Route::get('/login', [LoginController::class, 'index'])->name('index.login');
Route::post('/login/store', [LoginController::class, 'store'])->name('store.login');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/map', [MapController::class, 'index']);

Route::middleware(['auth','admin'])->group(function () {
    Route::inertia('/admin', 'admin')->name('admin');
    Route::get('/patients', [PatientsController::class, 'index']);
});

