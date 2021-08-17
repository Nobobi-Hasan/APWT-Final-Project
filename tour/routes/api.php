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

//USER API START******************

Route::post('/user/registration', 'UserRegistrationController@userregverify')->name('userRegistration.userregverify');

Route::post('/user/give_review', 'UserReviewController@verify')->name('userReview.verify');
Route::post('/user/contact', 'UserContactController@verify')->name('userContact.verify');

Route::get('/user/car', 'UserCarController@index')->name('userCar.index');
Route::get('/user/Car_list', 'UserCarListController@showCarList')->name('userCarList.showCarList');
Route::post('/user/car/book{id}', 'UserConCarController@Addcarbook')->name('userConCar.Addcarbook');

Route::get('/user/hotel', 'UserHotelController@index')->name('userHotel.index');
Route::get('/user/show_hotels', 'UserHotelsController@showHotel')->name('userHotels.showHotel');
Route::get('/user/hotel_rooms{id}', 'UserHotelRoomController@showHotelRoom')->name('userHotelRoom.showHotelRoom');
Route::post('/user/confirm_hotel{id}', 'UserConHotelController@confirmHotel')->name('userConHotel.confirmHotel');
Route::get('/user/hotel_facility', 'UserHotelRoomController@facility')->name('userHotelRoom.facility');

Route::get('/user/flight', 'UserFlightController@index')->name('userFlight.index');
Route::get('/user/flight_list', 'UserFlightListController@showFlightList')->name('userFlightList.showFlightList');
Route::post('/user/flight/book{id}', 'UserConFlightController@AddflightBook')->name('userConFlight.AddflightBook');

Route::get('/user/travel_history', 'UserTravelHistoryController@index')->name('userTravelHistory.index');

Route::get('/user/notification', 'UserNotificationController@index')->name('userNotification.index');

Route::get('/user/guideline', 'UserGuideLineController@showGuideline')->name('userGuideline.showGuideline');

Route::get('/user/about', 'UserAboutController@index')->name('userAbout.index');

Route::get('/user/privay_policy', 'UserPrivacyController@index')->name('userPrivacy.index');

Route::get('/user/faq', 'UserFaqController@index')->name('userFaq.index');

Route::get('/user/package', 'UserPackageController@showPackage')->name('userPackage.showPackage');
Route::post('/user/package/book', 'UserPackageController@confirmpackageBook')->name('userPackage.confirmpackageBook');

Route::get('/user/destination', 'UserDestinationController@showdestination')->name('userDestination.showdestination');

//USER API END********************