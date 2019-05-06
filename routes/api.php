<?php

use Illuminate\Http\Request;

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


Route::prefix('todolist')->group(function() {
    Route::get('/', 'Api\TodoListController@index');
    Route::post('/create', 'Api\TodoListController@create');
    Route::patch('/update/{id}', 'Api\TodoListController@update');
    Route::delete('/delete/{id}', 'Api\TodoListController@delete');
});
