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

Route::post('/employee/salary', 'EmployeeSalaryController@salaryReq') ->name('employeeSalary.salaryReq');
Route::get('/employee/salary/List', 'EmployeeSalaryController@salaryList') ->name('employeeSalary.salaryList');

Route::post('/employee/statementAdd', 'EmployeeAccountController@statementAdded')->name('employee.statemsentAdded');

Route::post('/employee/transactionAdd', 'EmployeeAccountController@transactionAdded')->name('employee.transactionAdded');