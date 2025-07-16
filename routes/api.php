<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SearchController;

Route::post('/searches', [SearchController::class, 'store']);
Route::get('/searches', [SearchController::class, 'index']);
