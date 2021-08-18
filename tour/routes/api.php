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

//Registration
//Hotel
Route::post('/hotelreg','RegistrationController@hotelregVerify')->name('registration.hotelregVerify');

//Car-Flight
Route::post('/transportreg','RegistrationController@transportregVerify')->name('registration.transportregVerify');




//HOTEL Service
//HOTEL Dashboard
Route::get('/hotelDashboard/index','HotelController@index')->name('hotel.index');

//Hotel Facility Add/Show/delete
Route::post('/hotelDashboard/addhotelfacility','HotelController@addhotelfacilityVerify')->name('hotel.addhotelfacilityVerify');
Route::get('/hotelDashboard/managehotelfacility','HotelController@managehotelfacility')->name('hotel.managehotelfacility');
Route::post('/hotelDashboard/facilitydelete','HotelController@facilitydestroy')->name('hotel.facilitydestroy');

//Hotel Facility Edit
Route::post('/hotelDashboard/facilityedit','HotelController@facilityeditconfirm')->name('hotel.facilityeditconfirm');

//Hotel Room Add-Manage-Delete
Route::post('/hotelDashboard/addhotelroom','HotelController@addhotelroomVerify')->name('hotel.addhotelroomVerify');
Route::get('/hotelDashboard/managehotelroom','HotelController@managehotelroom')->name('hotel.managehotelroom');
Route::post('/hotelDashboard/roomdelete','HotelController@roomdestroy')->name('hotel.roomdestroy');

//Hotel Room Edit
Route::post('/hotelDashboard/roomedit','HotelController@roomeditconfirm')->name('hotel.roomeditconfirm');

//Hotel Booking Show And Delete
Route::get('/hotelDashboard/showhotelallboking','HotelController@showhotelallboking')->name('hotel.showhotelallboking');
Route::post('/hotelDashboard/bookingdelete','HotelController@bookingdestroy')->name('hotel.bookingdestroy');

//Hotel Pending Booking
Route::get('/hotelDashboard/room-book-pending','HotelController@ADroomBookList')->name('hotel.ADroomBookList');
Route::post('/hotelDashboard/bookingapprove','HotelController@bookingadd')->name('hotel.bookingadd');
Route::post('/hotelDashboard/bookingdecline','HotelController@bookingremove')->name('hotel.bookingremove');

//Hotel Review
Route::get('/hotelDashboard/checkhotelreview','HotelController@checkhotelreview')->name('hotel.checkhotelreview');

//Hotel Transaction
Route::get('/hotelDashboard/hoteltransactionhistory','HotelController@hoteltransactionhistory')->name('hotel.hoteltransactionhistory');

//Hotel Booking User-Room Information
Route::post('/hotelDashboard/information','HotelController@showcustomerroominfo')->name('hotel.showcustomerroominfo');

//Hotel Support
Route::post('/hotelDashboard/hotelsupport','HotelController@hotelsupportconfirm')->name('hotel.hotelsupportconfirm');





//CAR Service

//Car Dashboard
Route::get('/carDashboard/index','CarController@index')->name('car.index');

//Car Add-Manage-Delete
Route::post('/carDashboard/addcar','CarController@addcarVerify')->name('car.addcarVerify');
Route::get('/carDashboard/managecar','CarController@managecar')->name('car.managecar');
Route::post('/carDashboard/cardelete','CarController@cardestroy')->name('car.cardestroy');

//Car Edit
Route::post('/carDashboard/caredit','CarController@careditconfirm')->name('car.careditconfirm');

//Car Booking Show And Delete
Route::get('/carDashboard/car-booking-list','CarController@showcarallbooking')->name('car.showcarallbooking');
Route::post('/carDashboard/delete','CarController@bookingdestroy')->name('car.bookingdestroy');

//Car Pending Booking
Route::get('/carDashboard/car-pending-list','CarController@ADcarBookList')->name('car.ADcarBookList');
Route::post('/carDashboard/approve','CarController@bookingadd')->name('car.bookingadd');
Route::post('/carDashboard/decline','CarController@bookingremove')->name('car.bookingremove');

//Car Type
Route::get('/carDashboard/cartype','CarController@cartype')->name('car.cartype');
Route::post('/carDashboard/cartype','CarController@cartypeconfirm')->name('car.cartypeconfirm');

//Car Availability
Route::get('/carDashboard/caravailability','CarController@caravailability')->name('car.caravailability');
Route::post('/carDashboard/caravailability','CarController@caravailabilityconfirm')->name('car.caravailabilityconfirm');

//Car Support
Route::post('/carDashboard/carsupport','CarController@carsupportconfirm')->name('car.carsupportconfirm');

//Car Review
Route::get('/carDashboard/checkcarreview','CarController@checkcarreview')->name('car.checkcarreview');

//Car Transaction
Route::get('/carDashboard/cartransactionhistory','CarController@cartransactionhistory')->name('car.cartransactionhistory');





//Flight Service

//Flight Dashboard
Route::get('/flightDashboard/index','FlightController@index')->name('flight.index');

//Flight Add-Manage-Delete
Route::post('/flightDashboard/addflight','FlightController@addflightVerify')->name('flight.addflightVerify');
Route::get('/flightDashboard/manageflight','FlightController@manageflight')->name('flight.manageflight');
Route::post('/flightDashboard/flightdelete','FlightController@flightdestroy')->name('flight.flightdestroy');

//Flight Edit
Route::post('/flightDashboard/flightedit','FlightController@flighteditconfirm')->name('flight.flighteditconfirm');

//Flight Booking Show And Delete
Route::get('/flightDashboard/flight-booking-list','FlightController@showflightallbooking')->name('flight.showflightallbooking');
Route::post('/flightDashboard/delete','FlightController@bookingdestroy')->name('flight.bookingdestroy');

//Flight Pending Booking
Route::get('/flightDashboard/flight-pending-list','FlightController@ADflightBookList')->name('flight.ADflightBookList');
Route::post('/flightDashboard/approve','FlightController@bookingadd')->name('flight.bookingadd');
Route::post('/flightDashboard/decline','FlightController@bookingremove')->name('flight.bookingremove');

//Flight Type
Route::get('/flightDashboard/flighttype','FlightController@flighttype')->name('flight.flighttype');
Route::post('/flightDashboard/flighttype','FlightController@flighttypeconfirm')->name('flight.flighttypeconfirm');

//Flight Availability
Route::get('/flightDashboard/flightavailability','FlightController@flightavailability')->name('flight.flightavailability');
Route::post('/flightDashboard/flightavailability','FlightController@flightavailabilityconfirm')->name('flight.flightavailabilityconfirm');

//Flight Review
Route::get('/flightDashboard/checkflightreview','FlightController@checkflightreview')->name('flight.checkflightreview');

//Flight Transaction
Route::get('/flightDashboard/flighttransactionhistory','FlightController@flighttransactionhistory')->name('flight.flighttransactionhistory');

//Flight Support
Route::post('/flightDashboard/flightsupport','FlightController@flightsupportconfirm')->name('flight.flightsupportconfirm');