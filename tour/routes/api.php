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
//Hotel Facility Add/Show/delete
Route::post('/hotelDashboard/addhotelfacility','HotelController@addhotelfacilityVerify')->name('hotel.addhotelfacilityVerify');
Route::get('/hotelDashboard/managehotelfacility','HotelController@managehotelfacility')->name('hotel.managehotelfacility');
Route::post('/hotelDashboard/facilitydelete','HotelController@facilitydestroy')->name('hotel.facilitydestroy');

//Hotel Room Add-Manage-Delete
Route::post('/hotelDashboard/addhotelroom','HotelController@addhotelroomVerify')->name('hotel.addhotelroomVerify');
Route::get('/hotelDashboard/managehotelroom','HotelController@managehotelroom')->name('hotel.managehotelroom');
Route::post('/hotelDashboard/roomdelete','HotelController@roomdestroy')->name('hotel.roomdestroy');

//Hotel Booking Show And Delete
Route::get('/hotelDashboard/showhotelallboking','HotelController@showhotelallboking')->name('hotel.showhotelallboking');
Route::post('/hotelDashboard/bookingdelete','HotelController@bookingdestroy')->name('hotel.bookingdestroy');

//Hotel Pending Booking
Route::get('/hotelDashboard/room-book-pending','HotelController@ADroomBookList')->name('hotel.ADroomBookList');
Route::post('/hotelDashboard/bookingdecline','HotelController@bookingremove')->name('hotel.bookingremove');

//Hotel Review
Route::get('/hotelDashboard/checkhotelreview','HotelController@checkhotelreview')->name('hotel.checkhotelreview');

//Hotel Transaction
Route::get('/hotelDashboard/hoteltransactionhistory','HotelController@hoteltransactionhistory')->name('hotel.hoteltransactionhistory');

//Hotel Booking User-Room Information
Route::post('/hotelDashboard/information','HotelController@showcustomerroominfo')->name('hotel.showcustomerroominfo');


//Hotel Support
Route::post('/hotelDashboard/hotelsupport','HotelController@hotelsupportconfirm')->name('hotel.hotelsupportconfirm');




//CAR

//Car Add-Manage-Delete
Route::post('/carDashboard/addcar','CarController@addcarVerify')->name('car.addcarVerify');
Route::get('/carDashboard/managecar','CarController@managecar')->name('car.managecar');
Route::post('/carDashboard/cardelete','CarController@cardestroy')->name('car.cardestroy');

//Car Booking Show And Delete
Route::get('/carDashboard/car-booking-list','CarController@showcarallbooking')->name('car.showcarallbooking');
Route::post('/carDashboard/delete','CarController@bookingdestroy')->name('car.bookingdestroy');

//Car Pending Booking
Route::get('/carDashboard/car-pending-list','CarController@ADcarBookList')->name('car.ADcarBookList');
Route::post('/carDashboard/decline','CarController@bookingremove')->name('car.bookingremove');

//Car Support
Route::post('/carDashboard/carsupport','CarController@carsupportconfirm')->name('car.carsupportconfirm');

//Car Review
Route::get('/carDashboard/checkcarreview','CarController@checkcarreview')->name('car.checkcarreview');

//Car Transaction
Route::get('/carDashboard/cartransactionhistory','CarController@cartransactionhistory')->name('car.cartransactionhistory');








//Flight
//Flight Support
Route::post('/flightDashboard/flightsupport','FlightController@flightsupportconfirm')->name('flight.flightsupportconfirm');