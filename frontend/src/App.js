import { useState } from "react";

import UserNavbar from "./userComponents/UserNavbar";
import UserFooter from "./userComponents/UserFooter";
import UserHomePage from "./userComponents/UserHomePage";

import UserProfile from "./userComponents/UserProfile";

import UserRegistration from "./userComponents/UserRegistration";

import UserReview from "./userComponents/UserReview";

import UserContactUs from "./userComponents/UserContactUs";

import UserBookedHotelList from "./userComponents/UserBookedHotelList";
import UserShowHotelList from "./userComponents/UserShowHotelList";
import UserHotelRoomList from "./userComponents/UserHotelRoomList";
import UserConfirmHotel from "./userComponents/UserConfirmHotel";
import UserHotelFacilityList from "./userComponents/UserHotelFacilityList";

import UserConfirmFlight from "./userComponents/UserConfirmFlight";
import UserBookedFlightList from "./userComponents/UserBookedFlightList";
import UserFlightBookingList from "./userComponents/UserFlightBookingList";

import UserConfirmCar from "./userComponents/UserConfirmCar";
import UserBookedCarList from "./userComponents/UserBookedCarList";
import UserCarBookingList from "./userComponents/UserCarBookingList";

import UserTravelHistoryList from "./userComponents/UserTravelHistoryList";

import UserShowNotification from "./userComponents/UserShowNotification";

import UserShowTravelGuideline from "./userComponents/UserShowTravelGuideline";

import UserShowAboutUs from "./userComponents/UserShowAboutUs";

import UserShowPrivacyPolicy from "./userComponents/UserShowPrivacyPolicy";

import UserShowFAQ from "./userComponents/UserShowFAQ";

import UserPackageList from "./userComponents/UserPackageList";

import UserDestinationList from "./userComponents/UserDestinationList";
import UserShowDestinationDetails from "./userComponents/UserShowDestinstionDetails";

import { useFetch } from './userComponents/useFetch';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

    //******USER API START******


        // Profile update by User
        const userProfileUpdate = (newProfile) => { 

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/user/profile',
                //data: JSON.stringify(newUser)
                data:newProfile,
            });

            setLoginFirstname(newProfile.firstname);
            setLoginLastname(newProfile.lastname);
            setLoginGender(newProfile.gender);
            setLoginEmail(newProfile.email);
            setLoginUsername(newProfile.username);

            console.log(newProfile);
};



    //User Give Review
    const userReview = (newReview) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/give_review',
            data:newReview,
          });
    };

    //User Support/ Contact Us
    const userContactUs = (newContact) => { 
        
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/contact',
            data:newContact,
          });
    };


    //Show User Booked Hotel List
    const [userbookedhotel, setUserBookedHotel] = useState([]);
    const userurl2 = 'http://127.0.0.1:8000/api/user/hotel';
    useFetch(userurl2, setUserBookedHotel);


    //Show User All Hotel List
    const [usershowhotel, setUserShowHotel] = useState([]);
    const userurl16 = 'http://127.0.0.1:8000/api/user/show_hotels';
    useFetch(userurl16, setUserShowHotel);

    const [usershowhotelsrc, setUserShowHotelSrc] = useState([]);


    //Show User Hotel Room List
    const [userhotelroom, setUserHotelRoom] = useState([]);
    const userurl15 = 'http://127.0.0.1:8000/api/user/hotel_rooms';
    useFetch(userurl15, setUserHotelRoom);


    const [userhotelroomsrc, setUserHotelRoomSrc] = useState([]);

    // Show User Hotel Room Details
    const userHotelRoomscallback = (id) => {
    const data = userhotelroom.filter((userhotelroom) => userhotelroom.hotel_id == id);
    setUserHotelRoomSrc(data);
    console.log(data);
    };

    // Show Search Hotel
    const userSrcHotel = (id) => { 

        console.log(id.id);
    const data = usershowhotel.filter((userhotel) => userhotel.location == id.id);
    setUserShowHotelSrc(data);

    };

    //Confirm User Hotel
    const userConfirmHotel = (newConfirmHotel) => { 

        console.log(newConfirmHotel);
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/confirm_hotel',
            data:newConfirmHotel,
          });

    };

    //Show User Hotel Facility List
    const [userhotelfacility, setUserHotelfacility] = useState([]);
    const userurl14 = 'http://127.0.0.1:8000/api/user/hotel_facility';
    useFetch(userurl14, setUserHotelfacility);

    //Show Flight Booking List
    const [userflightbooking, setUserFlightBooking] = useState([]);
    const userurl12 = 'http://127.0.0.1:8000/api/user/flight_list';
    useFetch(userurl12, setUserFlightBooking);
    
    //Show User Booked Flight List
    const [userbookedflight, setUserBookedFlight] = useState([]);
    const userurl1 = 'http://127.0.0.1:8000/api/user/flight';
    useFetch(userurl1, setUserBookedFlight);

    //Confirm User FLight
    const userConfirmFlight = (newConfirmFLight) => { 

        console.log(newConfirmFLight);
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/flight/book',
            data:newConfirmFLight,
          });
    };


    //Show Car Booking List
    const [usercarbooking, setUserCarBooking] = useState([]);
    const userurl11 = 'http://127.0.0.1:8000/api/user/Car_list';
    useFetch(userurl11, setUserCarBooking);
    //Show User Booked Car List
    const [userbookedcar, setUserBookedCar] = useState([]);
    const userurl3 = 'http://127.0.0.1:8000/api/user/car';
    useFetch(userurl3, setUserBookedCar);
    //Confirm User Car

    const userConfirmCar = (newConfirmCar) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/car/book',
            data:newConfirmCar,
          });
    };


    //Show User Travel History List
    const [usertravelhistory, setUserTravelHistory] = useState([]);
    const userurl4 = 'http://127.0.0.1:8000/api/user/travel_history';
    useFetch(userurl4, setUserTravelHistory);


    //Show User Notifications 
    const [usershowpromos, setUserShowPormos] = useState([]);
    const userurl5 = 'http://127.0.0.1:8000/api/user/notification';
    useFetch(userurl5, setUserShowPormos);

    //Show User Travel Guideline 
    const [usershowguideline, setUserShowGuideLine] = useState([]);
    const userurl6 = 'http://127.0.0.1:8000/api/user/guideline';
    useFetch(userurl6, setUserShowGuideLine);

    //Show User About Us 
    const [usershowaboutus, setUserShowAboutUs] = useState([]);
    const userurl7 = 'http://127.0.0.1:8000/api/user/about';
    useFetch(userurl7, setUserShowAboutUs);

    //Show User Privacy Policy 
    const [usershowprivacypolicy, setUserShowPrivacyPolicy] = useState([]);
    const userurl8 = 'http://127.0.0.1:8000/api/user/privay_policy';
    useFetch(userurl8, setUserShowPrivacyPolicy);
    
    //Show User FAQ 
    const [usershowfaq, setUserShowFAQ] = useState([]);
    const userurl9 = 'http://127.0.0.1:8000/api/user/faq';
    useFetch(userurl9, setUserShowFAQ);

     //Show User Package 
     const [usershowpackage, setUserShowPackage] = useState([]);
     const userurl10 = 'http://127.0.0.1:8000/api/user/package';
     useFetch(userurl10, setUserShowPackage);

    //User Add Package
    const userBookPackageCallback = (bookPackage) => {
        const axios = require('axios').default;

         axios({
             method: 'post',
             url: 'http://127.0.0.1:8000/api/user/package/book',

              data:bookPackage,

            });
     };
    

    //Show User Destination List 
    const [userdestinationlist, setUserDestinationList] = useState([]);
    const userurl13 = 'http://127.0.0.1:8000/api/user/destination';
    useFetch(userurl13, setUserDestinationList);

    //Show User Destination Details List 
    const [userdestinationdetails, setUserDestinationDetails] = useState([]);
    const userurl17 = 'http://127.0.0.1:8000/api/user/destination';
    useFetch(userurl17, setUserDestinationDetails);

    // Show User Destination Details by user
    const userDestinationDetailscallback = (id) => {
    const data = userdestinationlist.filter((destination) => destination.id === id);
    setUserDestinationDetails(data);
    console.log(data);
    };


    //User Registraion
    const userRegistration = (newRegistration) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/registration',
            data:newRegistration,
          });
    };


    //******USER API END******


  return (
      <Router>
          
          <Switch>

           {/* ******USER API START****** */}


              <Route exact path="/user">
                  <UserNavbar />
                  <h2>Home</h2>
                  <UserHomePage callback={userSrcHotel} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/flight">
                  <UserNavbar />
                  <h2>Flight List</h2>
                  <UserBookedFlightList list={userbookedflight} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/hotel">
                  <UserNavbar />
                  <h2>Hotel List</h2>
                  <UserBookedHotelList list={userbookedhotel} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/car">
                  <UserNavbar />
                  <h2>Car List</h2>
                  <UserBookedCarList list={userbookedcar} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/destination">
                  <UserNavbar />
                  <h2>Destination</h2>
                  <UserDestinationList list={userdestinationlist} callback={userDestinationDetailscallback} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/destination_details/:id">
                  <UserNavbar />
                  <h2>Destination Details</h2>
                  <UserShowDestinationDetails list={userdestinationdetails} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/package">
                  <UserNavbar />
                  <h2>Packages</h2>
                  <UserPackageList list={usershowpackage} callback={userBookPackageCallback}/>
                  <UserFooter />
              </Route>

              <Route exact path="/user/show_hotels">
                  <UserNavbar />
                  <h2>Hotels</h2>
                  <UserShowHotelList list={usershowhotel} callback={userHotelRoomscallback} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/show_hotels/:id">
                  <UserNavbar />
                  <h2>Hotels</h2>
                  <UserShowHotelList list={usershowhotelsrc} callback={userHotelRoomscallback} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/hotel_rooms/:src_hotel">
                  <UserNavbar />
                  <h2>Hotel Room</h2>
                  <UserHotelRoomList list={userhotelroomsrc} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/confirm_hotel/:id">
                  <UserNavbar />
                  <h2>Confirm Hotel</h2>
                  <UserConfirmHotel callback={userConfirmHotel} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/hotel_facility">
                  <UserNavbar />
                  <h2>Hotel Facility</h2>
                  <UserHotelFacilityList list={userhotelfacility} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/flight_list">
                  <UserNavbar />
                  <h2>Flight</h2>
                  <UserFlightBookingList list={userflightbooking} />
                  <UserFooter />
              </Route>

              <Route path="/user/flight/book/:id">
                  <UserNavbar />
                  <UserConfirmFlight callback={userConfirmFlight} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/Car_list">
                  <UserNavbar />
                  <h2>Car</h2>
                  <UserCarBookingList list={usercarbooking} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/car/book/:id">
                  <UserNavbar />
                  <UserConfirmCar status="User" callback={userConfirmCar} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/travel_history">
                  <UserNavbar />
                  <h2>Travel History</h2>
                  <UserTravelHistoryList list={usertravelhistory} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/guideline">
                  <UserNavbar />
                  <UserShowTravelGuideline list={usershowguideline} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/notification">
                  <UserNavbar />
                  <h2>Notification</h2>
                  <UserShowNotification list={usershowpromos} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/about">
                  <UserNavbar />
                  {/* <h2>About Us</h2> */}
                  <UserShowAboutUs list={usershowaboutus} />
                  <UserFooter />
              </Route>

              <Route path="/user/contact">
                  <UserNavbar />
                  <UserContactUs callback={userContactUs} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/privay_policy">
                  <UserNavbar />
                  {/* <h2>Privacy Policy</h2> */}
                  <UserShowPrivacyPolicy list={usershowprivacypolicy} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/faq">
                  <UserNavbar />
                  <h2>FAQ</h2>
                  <UserShowFAQ list={usershowfaq} />
                  <UserFooter />
              </Route>

              <Route path="/user/give_review">
                  <UserNavbar />
                  <UserReview callback={userReview} />
                  <UserFooter />
              </Route>

              <Route exact path="/user/registration">
                  <UserNavbar />
                  <UserRegistration callback={userRegistration} />
                  <UserFooter />
              </Route>

              {/* <Route exact path="/user/profile">
                  <UserNavbar />
                  <h2>Profile</h2>
                  <UserFooter />
              </Route> */}

                 <Route exact path="/user/profile">
                    
                        <UserNavbar />
                        
                        <UserProfile idl = {loginId} 
                            firstnamel = {loginFirstname}
                            lastnamel = {loginLastname}
                            genderl = {loginGender}
                            emaill = {loginEmail}
                            usernamel = {loginUsername} 
                            callback={userProfileUpdate} />
            
                        <UserFooter />
                </Route>

              <Route exact path="/login"> 
                  <UserNavbar />
                  <h2>Logout</h2>
                  <UserFooter />
              </Route>
              
              {/* ******USER API END****** */}

          </Switch>
      </Router>
    );

}


export default App;

