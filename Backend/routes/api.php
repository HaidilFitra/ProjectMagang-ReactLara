<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BeritaController as ApiBeritaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 
Route::controller(AuthController::class)->group(function() {
    Route::post('/v1/register','register');
    Route::post('/v1/login','login');
    Route::delete('/v1/logout','logout')->middleware('auth:sanctum');

});

Route::controller(ApiBeritaController::class)->group(function() {
    Route::post('/v1/store','store')->middleware('auth:sanctum');
    Route::get('/v1/show/{id}','show');
    Route::post('/v1/update/{id}','update');
    Route::delete('/v1/delete/{id}','delete');
    Route::get('/v1/berita','index');
}); 
