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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/admin/add-employee', 'AdminEmployeeController@employeeAddVerify')->name('adminEmployee.employeeAddVerify');
Route::get('/admin/all-employees', 'AdminEmployeeController@employeeList')->name('adminEmployee.employeeList');
Route::post('/admin/employee/delete', 'AdminEmployeeController@employeeDestroy')->name('adminEmployee.employeeDestroy');
