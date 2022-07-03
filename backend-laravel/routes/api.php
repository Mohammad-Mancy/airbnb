<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\adminController;

Route::group(['prefix' => 'admin'], function(){

    Route::post('/login', [adminController::class, 'login']);
    Route::post('/addHouse',[adminController::class,'addHouse']);
    Route::post('/addCollection',[adminController::class,'addCollection']);

});

//visitor API

Route::get('/getHouses',[adminController::class,'getHouses']);
Route::get('/getCollections',[adminController::class,'getCollections']);

Route::get('/getHouses/{id}',[adminController::class,'getHousesByID']);