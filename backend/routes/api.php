<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['json.response']], function(){
    // public routes
    Route::post('/login', 'AuthController@login');
    Route::post('/register','AuthController@register');
});

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', 'AuthController@logout');

    Route::post('/addperson', 'PersonController@addPerson');
    Route::get('/getperson', 'PersonController@getPerson');
    Route::post('/updateperson', 'PersonController@updatePerson');
    Route::post('/deleteperson', 'PersonController@deletePerson');

    Route::post('/addtree', 'TreeController@addTree');
    Route::get('/gettree', 'TreeController@getTree');
});

