<?php

use App\Http\Controllers\ChurchAnnouncementController;
use App\Http\Controllers\ChurchBlogController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChurchBulletinController;
use App\Http\Controllers\ChurchLiveStreamingController;

Route::get('/bulletins', [ChurchBulletinController::class, 'index']);
Route::get('/livestream-thumbnails', [ChurchLiveStreamingController::class, 'index']);
Route::get('/blog-images', [ChurchBlogController::class, 'index']);
Route::get('/announcement-images', [ChurchAnnouncementController::class, 'index']);