<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('static.home');
});


Route::get('/about', function () {
    return view('static.about');
});

Route::get('/contact', function () {
    return view('static.contact');
});