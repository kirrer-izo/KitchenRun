<?php

use App\Http\Controllers\MenuController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::middleware(['auth', 'verified'])->group(function () {
    //dashboard routes
    Route::get('/manager/dashboard', fn () => Inertia::render('manager/dashboard'))->name('manager.dashboard');
    Route::get('/customer/dashboard', fn () => Inertia::render('customer/dashboard'))->name('customer.dashboard');
    Route::get('/driver/dashboard', fn () => Inertia::render('driver/dashboard'))->name('driver.dashboard');
    Route::get('/kitchen/dashboard', fn() => Inertia::render('kitchen/dashboard'))->name('kitchen.dashboard');

    //user management routes
    Route::get('/user/create', fn() => Inertia::render('user/create'))->name('user.create');

    //menu management routes
    Route::resource('menus', MenuController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
