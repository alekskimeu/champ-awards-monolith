<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\AwardController;
use App\Http\Controllers\SchoolController;
use App\Http\Controllers\PollController;

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

Route::inertia('/', 'Home');
Route::inertia('/sponsor', 'Sponsor');
Route::get('/finalists', [PollController::class, 'finalists']);
Route::get('/categories/{name}', [PollController::class, 'category']);

// Google Auth
Route::get('/auth/google/redirect/{id}', [PollController::class, 'googleRedirect']);
Route::get('/auth/google/callback', [PollController::class, 'googleCallback']);

// Admin
Route::group(['middleware' => 'guest'], function () {
    Route::inertia('/register', 'Register');
    Route::inertia('/login', 'Login')->name('login');
    Route::post('/admin/register', [AdminController::class, 'register']);
    Route::post('/admin/login', [AdminController::class, 'authenticate']);
});

Route::post('/polls/vote/{id}', [PollController::class, 'vote']);

Route::group(['middleware' => 'auth'], function () {
    Route::get('/admin', [AdminController::class, 'index']);
    Route::post('/admin/logout', [AdminController::class, 'logout']);

    // Categories 
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::post('/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

    // Categories 
    Route::get('/schools', [SchoolController::class, 'index']);
    Route::post('/schools', [SchoolController::class, 'store']);
    Route::post('/schools/{id}', [SchoolController::class, 'update']);
    Route::delete('/schools/{id}', [SchoolController::class, 'destroy']);

    // Subcategories 
    Route::get('/awards', [AwardController::class, 'index']);
    Route::post('/awards', [AwardController::class, 'store']);
    Route::get('/awards/{id}', [AwardController::class, 'show']);
    Route::post('/awards/{id}', [AwardController::class, 'update']);
    Route::delete('/awards/{id}', [AwardController::class, 'destroy']);

    // Participants 
    Route::get('/participants', [ParticipantController::class, 'index']);
    Route::post('/participants', [ParticipantController::class, 'store']);
    Route::post('/participants/{id}', [ParticipantController::class, 'update']);
    Route::delete('/participants/{id}', [ParticipantController::class, 'destroy']);
});
