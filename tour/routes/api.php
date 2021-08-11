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

Route::post('/user/give_review', 'UserReviewController@verify')->name('userReview.verify');
Route::post('/user/contact', 'UserContactController@verify')->name('userContact.verify');

Route::get('/user/car', 'UserCarController@index')->name('userCar.index');
Route::post('/user/car/book{id}', 'UserConCarController@Addcarbook')->name('userConCar.Addcarbook');

Route::get('/user/hotel', 'UserHotelController@index')->name('userHotel.index');
Route::post('/user/confirm_hotel{id}', 'UserConHotelController@confirmHotel')->name('userConHotel.confirmHotel');

Route::get('/user/flight', 'UserFlightController@index')->name('userFlight.index');
Route::post('/user/flight/book{id}', 'UserConFlightController@AddflightBook')->name('userConFlight.AddflightBook');

Route::get('/user/travel_history', 'UserTravelHistoryController@index')->name('userTravelHistory.index');

Route::get('/user/notification', 'UserNotificationController@index')->name('userNotification.index');

Route::get('/user/guideline', 'UserGuideLineController@showGuideline')->name('userGuideline.showGuideline');

Route::get('/user/about', 'UserAboutController@index')->name('userAbout.index');

Route::get('/user/privay_policy', 'UserPrivacyController@index')->name('userPrivacy.index');

Route::get('/user/faq', 'UserFaqController@index')->name('userFaq.index');

//USER API END********************