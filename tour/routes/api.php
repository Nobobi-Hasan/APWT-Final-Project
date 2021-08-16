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

// Admin API Start

Route::post('/admin/add-employee', 'AdminEmployeeController@employeeAddVerify')->name('adminEmployee.employeeAddVerify');
Route::get('/admin/all-employees', 'AdminEmployeeController@employeeList')->name('adminEmployee.employeeList');
Route::post('/admin/employee/delete', 'AdminEmployeeController@employeeDestroy')->name('adminEmployee.employeeDestroy');
Route::get('/admin/active-employees', 'AdminEmployeeController@activeEmployeeList')->name('adminEmployee.activeEmployeeList');





Route::post('/admin/add-admin', 'AdminController@adminAddVerify')->name('admin.adminAddVerify');
Route::get('/admin/all-admins', 'AdminController@adminList')->name('admin.adminList');
Route::post('/admin/admin/delete', 'AdminController@adminDestroy')->name('admin.adminDestroy');





Route::get('/admin/all-users', 'AdminUserController@userList')->name('adminUser.userList');
Route::get('/admin/active-users', 'AdminUserController@activeUserList')->name('adminUser.activeUserList');
Route::get('/admin/user/details/{id}', 'AdminUserController@userDetails')->name('adminUser.userDetails');
// Route::get('/admin/user/delete/{id}', 'AdminUserController@userDelete')->name('adminUser.userDelete');
Route::post('/admin/user/delete/', 'AdminUserController@userDestroy')->name('adminUser.userDestroy');






Route::get('/admin/hotels-pending', 'AdminHotelController@adHotel')->name('adminHotel.adHotel');
Route::post('/admin/hotel/approve', 'AdminHotelController@hotelAdd')->name('AdminHotel.hotelAdd');
Route::post('/admin/hotel/decline', 'AdminHotelController@hotelRemove')->name('AdminHotel.hotelRemove');
Route::get('/admin/all-hotels', 'AdminHotelController@hotelList')->name('adminHotel.hotelList');
Route::post('/admin/hotel/delete', 'AdminHotelController@hotelDestroy')->name('AdminHotel.hotelDelete');
Route::get('/admin/hotel-bookings', 'AdminHotelController@hotelBookings')->name('adminHotel.hotelBookings');





Route::get('/admin/transports-pending', 'AdminTransportController@adTransport')->name('adminTransport.adTransport');
Route::post('/admin/transport/approve', 'AdminTransportController@transportAdd')->name('adminTransport.transportAdd');
Route::post('/admin/transport/decline', 'AdminTransportController@transportRemove')->name('adminTransport.transportRemove');

Route::get('/admin/all-cars', 'AdminTransportController@carList')->name('adminTransport.carList');
Route::post('/admin/car/delete', 'AdminTransportController@carDestroy')->name('adminTransport.carDestroy');
Route::get('/admin/car-bookings', 'AdminTransportController@carBookingList')->name('adminTransport.carBookingList');
Route::get('/admin/car-bookings/detail{id}', 'AdminTransportController@carBookingDetail')->name('adminTransport.carBookingDetail');

Route::get('/admin/all-flight', 'AdminTransportController@flightList')->name('adminTransport.flightList');
Route::post('/admin/flight/delete', 'AdminTransportController@flightDestroy')->name('adminTransport.flightDestroy');
Route::get('/admin/flight-bookings', 'AdminTransportController@flightBookingList')->name('adminTransport.flightBookingList');
Route::get('/admin/flight-bookings/detail{id}', 'AdminTransportController@flightBookingDetail')->name('adminTransport.flightBookingDetail');





Route::get('/admin/place-pending', 'AdminPlaceController@adPlace')->name('AdminPlace.adPlace');

Route::post('/admin/place/approve', 'AdminPlaceController@placeAdd')->name('AdminPlace.placeAdd');

Route::post('/admin/place/decline', 'AdminPlaceController@placeRemove')->name('AdminPlace.placeRemove');
Route::get('/admin/all-places', 'AdminPlaceController@placeList')->name('AdminPlace.placeList');

Route::post('/admin/place/delete', 'AdminPlaceController@placeDestroy')->name('AdminPlace.placeDestroy');





Route::get('/admin/package-pending', 'AdminPackageController@adPackage')->name('AdminPackage.adPackage');

Route::post('/admin/package/approve', 'AdminPackageController@packageAdd')->name('AdminPackage.packageAdd');

Route::post('/admin/package/decline', 'AdminPackageController@packageRemove')->name('AdminPackage.packageRemove');

Route::get('/admin/all-packages', 'AdminPackageController@packageList')->name('AdminPackage.packageList');

Route::post('/admin/package/delete', 'AdminPackageController@packageDestroy')->name('AdminPackage.packageDestroy');

Route::get('/admin/package-bookings', 'AdminPackageController@packageBookingList')->name('AdminPackage.packageBookingList');

Route::get('/admin/package-status', 'AdminPackageController@packageStatus')->name('AdminPackage.packageStatus');
Route::post('/admin/package-status', 'AdminPackageController@packageStatusUpdate')->name('AdminPackage.packageStatusUpdate');


Route::get('/admin/income-statement', 'AdminAccountsController@income')->name('AdminAccounts.income');
Route::get('/admin/transaction-history', 'AdminAccountsController@transaction')->name('AdminAccounts.transaction');
Route::get('/admin/pending-salary', 'AdminAccountsController@salary')->name('AdminAccounts.salary');

Route::post('/admin/salary/approve', 'AdminAccountsController@salaryAdd')->name('AdminAccounts.salaryAdd');

Route::post('/admin/salary/decline', 'AdminAccountsController@salaryRemove')->name('AdminAccounts.salaryRemove');




Route::get('/admin/support', 'AdminSupportController@index')->name('AdminSupport.index');
Route::post('/admin/support/delete', 'AdminSupportController@supportDestroy')->name('AdminSupport.supportDestroy');




Route::get('/admin/policy', 'AdminPolicyController@index')->name('adminPolicy.index');
Route::post('/admin/edit-policy', 'AdminPolicyController@edit')->name('adminPolicy.edit');




Route::get('/admin/guidelines', 'AdminGuidelinesController@index')->name('adminGuidelines.index');
Route::post('/admin/edit-guidelines', 'AdminGuidelinesController@edit')->name('adminGuidelines.edit');

Route::get('/admin/about', 'AdminAboutController@index')->name('adminAbout.index');
Route::post('/admin/edit-about', 'AdminAboutController@edit')->name('adminAbout.edit');




Route::get('/admin/home', 'AdminController@index')->name('admin.index');
Route::get('/admin/profile', 'AdminController@profile')->name('admin.profile');
Route::post('/admin/profile', 'AdminController@profileUD')->name('admin.profileUD');


// Admin API End