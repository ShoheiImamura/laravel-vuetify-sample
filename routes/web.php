<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('/')->group(function () {
    // 認証
    Route::get('/login', [LoginController::class, 'loginPage'])->middleware('guest');
    Route::post('/login', [LoginController::class, 'authenticate'])->name('login')->middleware('guest');
    Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
    // ダッシュボード
    Route::get('/', function () {
        return view('index');
    })->middleware('auth');
});

