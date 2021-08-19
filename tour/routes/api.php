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

//User Profile
Route::post('/user/profile', 'UserProfileController@userprofileUD')->name('userProfile.userprofileUD');

//User Registration
Route::post('/user/registration', 'UserRegistrationController@userregverify')->name('userRegistration.userregverify');

//User Give Review
Route::post('/user/give_review', 'UserReviewController@verify')->name('userReview.verify');

//User Contact Us/ Support
Route::post('/user/contact', 'UserContactController@verify')->name('userContact.verify');

//User Car
Route::get('/user/car', 'UserCarController@index')->name('userCar.index');
Route::get('/user/Car_list', 'UserCarListController@showCarList')->name('userCarList.showCarList');
Route::post('/user/car/book', 'UserConCarController@Addcarbook')->name('userConCar.Addcarbook');

//User Hotel
Route::get('/user/hotel', 'UserHotelController@index')->name('userHotel.index');
Route::get('/user/show_hotels', 'UserHotelsController@showHotel')->name('userHotels.showHotel');
Route::get('/user/hotel_rooms', 'UserHotelRoomController@showHotelRoom')->name('userHotelRoom.showHotelRoom');
Route::post('/user/confirm_hotel', 'UserConHotelController@confirmHotel')->name('userConHotel.confirmHotel');
Route::get('/user/hotel_facility', 'UserHotelRoomController@facility')->name('userHotelRoom.facility');

//User Flight
Route::get('/user/flight', 'UserFlightController@index')->name('userFlight.index');
Route::get('/user/flight_list', 'UserFlightListController@showFlightList')->name('userFlightList.showFlightList');
Route::post('/user/flight/book', 'UserConFlightController@AddflightBook')->name('userConFlight.AddflightBook');

//User Travel History
Route::get('/user/travel_history', 'UserTravelHistoryController@index')->name('userTravelHistory.index');

//User Notification
Route::get('/user/notification', 'UserNotificationController@index')->name('userNotification.index');

//User Guideline
Route::get('/user/guideline', 'UserGuideLineController@showGuideline')->name('userGuideline.showGuideline');

//User About Us
Route::get('/user/about', 'UserAboutController@index')->name('userAbout.index');

//User Privacy Policy 
Route::get('/user/privay_policy', 'UserPrivacyController@index')->name('userPrivacy.index');

//User FAQ
Route::get('/user/faq', 'UserFaqController@index')->name('userFaq.index');

//User Package
Route::get('/user/package', 'UserPackageController@showPackage')->name('userPackage.showPackage');
Route::post('/user/package/book', 'UserPackageController@confirmpackageBook')->name('userPackage.confirmpackageBook');

//User Destination
Route::get('/user/destination', 'UserDestinationController@showdestination')->name('userDestination.showdestination');
Route::get('/user/destination_details{id}', 'UserDestinationController@details')->name('userDestination.details');

//USER API END********************