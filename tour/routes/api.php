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
//emp home
Route::get('/employee', 'EmployeeController@index') ->name('employee.index');

Route::get('/employee/profile', 'EmployeeController@profile') ->name('employee.profile');
Route::post('/employee/profile', 'EmployeeController@profileUD')->name('employee.profileUD');
//emp user
Route::get('/employee/userlist', 'EmployeeUserController@userList') ->name('employee.userList');
Route::get('/employee/userdetails{id}', 'EmployeeUserController@userDetails') ->name('employee.userDetails');
//emp package
Route::post('/employee/packageAdd', 'EmployeePackageController@PackageAdded') ->name('employeePackage.packageAdded');
Route::get('/employee/package', 'EmployeePackageController@package') ->name('employeePackage.package');
Route::post('/employee/packageEdit', 'EmployeePackageController@packageEdited') ->name('employeePackage.packageEdited');
Route::post('/employee/packagedelete', 'EmployeePackageController@packageDestroy') ->name('employeePackage.packageDestroy');
//emp place
Route::post('/employee/placeAdd', 'EmployeePlaceController@PlaceAdded') ->name('employeePlace.placeAdded');
Route::get('/employee/place', 'EmployeePlaceController@place') ->name('employeePlace.place');
Route::post('/employee/placeEdit', 'EmployeePlaceController@placeEdited') ->name('employeePlace.placeEdited');
Route::post('/employee/placedelete', 'EmployeePlaceController@placeDestroy') ->name('employeePlace.placeDestroy');
//emp salary
Route::post('/employee/salary', 'EmployeeSalaryController@salaryReq') ->name('employeeSalary.salaryReq');
Route::get('/employee/salary/list', 'EmployeeSalaryController@salaryList') ->name('employeeSalary.salaryList');
//emp statement
Route::post('/employee/statementAdd', 'EmployeeAccountController@statementAdded')->name('employee.statemsentAdded');
Route::get('/employee/statement', 'EmployeeAccountController@statement') ->name('employee.statement');
//emp transaction
Route::post('/employee/transactionAdd', 'EmployeeAccountController@transactionAdded')->name('employee.transactionAdded');
Route::get('/employee/transaction', 'EmployeeAccountController@transaction') ->name('employee.transaction');
//emp review
Route::get('/employee/review', 'EmployeeReviewController@showReview') ->name('employeeReview.showReview');
//emp advertisement
Route::post('/employee/advertisement', 'EmployeeAdvertisementController@advertisementAdd') ->name('employeeAdvertisement.advertisementAdd');
Route::get('/employee/advertisement/list', 'EmployeeAdvertisementController@advertisement') ->name('employeeAdvertisement.advertisement');
Route::post('/employee/advertisement/delete', 'EmployeeAdvertisementController@advertisementDestroy')->name('employeeAdvertisement.advertisementDestroy');
//emp promo
Route::post('/employee/promo', 'EmployeeAdvertisementController@promoAdd') ->name('employeePromo.promoAdd');
Route::get('/employee/promo/list', 'EmployeeAdvertisementController@promo') ->name('employeePromo.promo');
Route::post('/employee/promo/delete', 'EmployeeAdvertisementController@promoDestroy')->name('employeePromo.promoDestroy');
//emp support
Route::get('/employee/support', 'EmployeeSupportController@support') ->name('employee.support');
Route::post('/employee/support/delete', 'EmployeeSupportController@supportDestroy') ->name('employee.supportDestroy');
//emp faq
Route::post('/employee/faq', 'EmployeeFaqController@faqAdd') ->name('employeeFaq.faqAdd');
Route::get('/employee/faq/list', 'EmployeeFaqController@faq') ->name('employeeFaq.faq');
Route::post('/employee/faq/delete', 'EmployeeFaqController@faqDestroy')->name('employeeFaq.faqDestroy');
//emp guidelines
Route::get('/employee/guidelines', 'EmployeeGuidelinesController@index') ->name('employeeGuidelines.index');
Route::post('/employee/guidelines/edit', 'EmployeeGuidelinesController@edit') ->name('employeeGuidelines.edit');
//emp transport
Route::get('/employee/transportList', 'EmployeeTransportController@transport')->name('employee.transport');
//emp hotel
Route::get('/employee/hotelList', 'EmployeeHotelController@hotel')->name('employee.hotel');