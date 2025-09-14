<?php

use Illuminate\Support\Facades\Route;

// If you have other Laravel routes, keep them above this!

Route::get('/{any}', function () {
    return view('welcome');  // <-- Your blade file here
})->where('any', '.*');
