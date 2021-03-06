<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix'=>'api/v1'], function() use($router){
    $router->get('employees', 'EmployeeController@index');
    $router->get('employees/{id}', 'EmployeeController@employee');
    $router->post('employees', 'EmployeeController@create');
    $router->put('employees/{id}', 'EmployeeController@update');
    $router->delete('employees/{id}', 'EmployeeController@delete');
});