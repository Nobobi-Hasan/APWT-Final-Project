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


Route::post('/admin/add-admin', 'AdminController@adminAddVerify')->name('admin.adminAddVerify');
Route::get('/admin/all-admins', 'AdminController@adminList')->name('admin.adminList');
Route::post('/admin/admin/delete', 'AdminController@adminDestroy')->name('admin.adminDestroy');


Route::get('/admin/hotels-pending', 'AdminHotelController@adHotel')->name('adminHotel.adHotel');
Route::post('/admin/hotel/approve', 'AdminHotelController@hotelAdd')->name('AdminHotel.hotelAdd');
Route::post('/admin/hotel/decline', 'AdminHotelController@hotelRemove')->name('AdminHotel.hotelRemove');
Route::get('/admin/all-hotels', 'AdminHotelController@hotelList')->name('adminHotel.hotelList');
Route::post('/admin/hotel/delete', 'AdminHotelController@hotelDestroy')->name('AdminHotel.hotelDelete');
Route::get('/admin/hotel-bookings', 'AdminHotelController@hotelBookings')->name('adminHotel.hotelBookings');
Route::get('/admin/hotel-bookings/details{id}', 'AdminHotelController@roomBookDetail')->name('adminHotel.roomBookDetail');


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

// Admin API End