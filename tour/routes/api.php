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

//HOTEL
//Facility Add/Show/delete
Route::post('/hotelDashboard/addhotelfacility','HotelController@addhotelfacilityVerify')->name('hotel.addhotelfacilityVerify');
Route::get('/hotelDashboard/managehotelfacility','HotelController@managehotelfacility')->name('hotel.managehotelfacility');
Route::post('/hotelDashboard/facilitydelete','HotelController@facilitydestroy')->name('hotel.facilitydestroy');

//Room Add
Route::post('/hotelDashboard/addhotelroom','HotelController@addhotelroomVerify')->name('hotel.addhotelroomVerify');
Route::get('/hotelDashboard/managehotelroom','HotelController@managehotelroom')->name('hotel.managehotelroom');
Route::post('/hotelDashboard/roomdelete','HotelController@roomdestroy')->name('hotel.roomdestroy');

//Booking
Route::get('/hotelDashboard/showhotelallboking','HotelController@showhotelallboking')->name('hotel.showhotelallboking');
Route::post('/hotelDashboard/bookingdelete','HotelController@bookingdestroy')->name('hotel.bookingdestroy');

//Pending Booking
Route::get('/hotelDashboard/room-book-pending','HotelController@ADroomBookList')->name('hotel.ADroomBookList');
Route::post('/hotelDashboard/bookingdecline','HotelController@bookingremove')->name('hotel.bookingremove');

//Review
Route::get('/hotelDashboard/checkhotelreview','HotelController@checkhotelreview')->name('hotel.checkhotelreview');

//Transaction
Route::get('/hotelDashboard/hoteltransactionhistory','HotelController@hoteltransactionhistory')->name('hotel.hoteltransactionhistory');

// Support
Route::post('/hotelDashboard/hotelsupport','HotelController@hotelsupportconfirm')->name('hotel.hotelsupportconfirm');




//CAR
// Support
Route::post('/carDashboard/carsupport','CarController@carsupportconfirm')->name('car.carsupportconfirm');



//Flight
// Support
Route::post('/flightDashboard/flightsupport','FlightController@flightsupportconfirm')->name('flight.flightsupportconfirm');