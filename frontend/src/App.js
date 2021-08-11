import { useState } from "react";

import UserNavbar from "./userComponents/UserNavbar";

import UserReview from "./userComponents/UserReview";

import UserContactUs from "./userComponents/UserContactUs";

import UserConfirmHotel from "./userComponents/UserConfirmHotel";
import UserBookedHotelList from "./userComponents/UserBookedHotelList";

import UserConfirmFlight from "./userComponents/UserConfirmFlight";
import UserBookedFlightList from "./userComponents/UserBookedFlightList";

import UserConfirmCar from "./userComponents/UserConfirmCar";
import UserBookedCarList from "./userComponents/UserBookedCarList";

import UserTravelHistoryList from "./userComponents/UserTravelHistoryList";

import UserShowNotification from "./userComponents/UserShowNotification";

import UserShowTravelGuideline from "./userComponents/UserShowTravelGuideline";

import UserShowAboutUs from "./userComponents/UserShowAboutUs";

import UserShowPrivacyPolicy from "./userComponents/UserShowPrivacyPolicy";

import UserShowFAQ from "./userComponents/UserShowFAQ";

import { useFetch } from './userComponents/useFetch';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

    //USER API START*********


    //User Give Review
    const userReview = (newReview) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/give_review',
            //data: JSON.stringify(newUser)
            data:newReview,
          });
        //   setEmployees([...myuser, newEmployee]);
        //   console.log(newEmployee);
    };

    //User Support/ Contact Us
    const userContactUs = (newContact) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/contact',
            //data: JSON.stringify(newUser)
            data:newContact,
          });
        //   setEmployees([...myuser, newEmployee]);
        //   console.log(newEmployee);
    };


    //Show User Booked Hotel List
    const [userbookedhotel, setBookedHotel] = useState([]);
    const userurl2 = 'http://127.0.0.1:8000/api/user/hotel';
    useFetch(userurl2, setBookedHotel);

    //Confirm User Hotel
    const userConfirmHotel = (newConfirmHotel) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/confirm_hotel{id}',
            //data: JSON.stringify(newUser)
            data:newConfirmHotel,
          });
        //   setEmployees([...myuser, newEmployee]);
        //   console.log(newEmployee);
    };


    //Show User Booked Flight List
    const [userbookedflight, setBookedFlight] = useState([]);
    const userurl1 = 'http://127.0.0.1:8000/api/user/flight';
    useFetch(userurl1, setBookedFlight);

    //Confirm User FLight
    const userConfirmFlight = (newConfirmFLight) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/flight/book{id}',
            //data: JSON.stringify(newUser)
            data:newConfirmFLight,
          });
        //   setEmployees([...myuser, newEmployee]);
        //   console.log(newEmployee);
    };



    //Show User Booked Car List
    const [userbookedcar, setBookedCar] = useState([]);
    const userurl3 = 'http://127.0.0.1:8000/api/user/car';
    useFetch(userurl3, setBookedCar);

    //Confirm User Car
    const userConfirmCar = (newConfirmCar) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/car/book{id}',
            //data: JSON.stringify(newUser)
            data:newConfirmCar,
          });
        //   setEmployees([...myuser, newEmployee]);
        //   console.log(newEmployee);
    };


    //Show User Travel History List
    const [usertravelhistory, setTravelHistory] = useState([]);
    const userurl4 = 'http://127.0.0.1:8000/api/user/travel_history';
    useFetch(userurl4, setTravelHistory);


    //Show User Notifications 
    const [usershowpromos, setShowPormos] = useState([]);
    const userurl5 = 'http://127.0.0.1:8000/api/user/notification';
    useFetch(userurl5, setShowPormos);

    //Show User Travel Guideline 
    const [usershowguideline, setShowGuideLine] = useState([]);
    const userurl6 = 'http://127.0.0.1:8000/api/user/guideline';
    useFetch(userurl6, setShowGuideLine);

    //Show User About Us 
    const [usershowaboutus, setShowAboutUs] = useState([]);
    const userurl7 = 'http://127.0.0.1:8000/api/user/about';
    useFetch(userurl7, setShowAboutUs);

    //Show User Privacy Policy 
    const [usershowprivacypolicy, setShowPrivacyPolicy] = useState([]);
    const userurl8 = 'http://127.0.0.1:8000/api/user/privay_policy';
    useFetch(userurl8, setShowPrivacyPolicy);
    
    //Show User FAQ 
    const [usershowfaq, setShowFAQ] = useState([]);
    const userurl9 = 'http://127.0.0.1:8000/api/user/faq';
    useFetch(userurl9, setShowFAQ);
    


  return (
      <Router>
          {/* <UserNavbar /> */}
          <Switch>

              <Route exact path="/user">
                  <UserNavbar />
                  <h2>Tour</h2>
              </Route>

              <Route exact path="/user">
                  <UserNavbar />
                  <h2>Home</h2>
              </Route>

              <Route exact path="/user/flight">
                  <UserNavbar />
                  <h2>Flight List</h2>
                  <UserBookedFlightList list={userbookedflight} />
              </Route>

              <Route exact path="/user/hotel">
                  <UserNavbar />
                  <h2>Hotel List</h2>
                  <UserBookedHotelList list={userbookedhotel} />
              </Route>

              <Route exact path="/user/car">
                  <UserNavbar />
                  <h2>Car List</h2>
                  <UserBookedCarList list={userbookedcar} />
              </Route>

              <Route exact path="/user/destination">
                  <UserNavbar />
                  <h2>Destination</h2>
              </Route>

              <Route exact path="/user/package">
                  <UserNavbar />
                  <h2>Packages</h2>
              </Route>

              <Route exact path="/user/show_hotels">
                  <UserNavbar />
                  <h2>Hotels</h2>
              </Route>

              <Route exact path="/user/confirm_hotel">
                  <UserNavbar />
                  <h2>Confirm Hotel</h2>
                  <UserConfirmHotel status="User" callback={userConfirmHotel} />
              </Route>

              <Route exact path="/user/flight_list">
                  <UserNavbar />
                  <h2>Flight</h2>
              </Route>

              <Route exact path="/user/flight/book">
                  <UserNavbar />
                  <h2>Confirm Flight</h2>
                  <UserConfirmFlight status="User" callback={userConfirmFlight} />
              </Route>

              <Route exact path="/user/Car_list">
                  <UserNavbar />
                  <h2>Car</h2>
              </Route>

              <Route exact path="/user/car/book">
                  <UserNavbar />
                  <h2>Confirm Car</h2>
                  <UserConfirmCar status="User" callback={userConfirmCar} />
              </Route>

              <Route exact path="/user/travel_history">
                  <UserNavbar />
                  <h2>Travel History</h2>
                  <UserTravelHistoryList list={usertravelhistory} />
              </Route>

              <Route exact path="/user/guideline">
                  <UserNavbar />
                  <h2>Travel Guideline</h2>
                  <UserShowTravelGuideline list={usershowguideline} />
              </Route>

              <Route exact path="/user/notification">
                  <UserNavbar />
                  <h2>Notification</h2>
                  <UserShowNotification list={usershowpromos} />
              </Route>

              <Route exact path="/user/about">
                  <UserNavbar />
                  <h2>About Us</h2>
                  <UserShowAboutUs list={usershowaboutus} />
              </Route>

              <Route exact path="/user/contact">
                  <UserNavbar />
                  <UserContactUs status="User" callback={userContactUs} />
              </Route>

              <Route exact path="/user/privay_policy">
                  <UserNavbar />
                  <h2>Privacy Policy</h2>
                  <UserShowPrivacyPolicy list={usershowprivacypolicy} />
              </Route>

              <Route exact path="/user/faq">
                  <UserNavbar />
                  <h2>FAQ</h2>
                  <UserShowFAQ list={usershowfaq} />
              </Route>

              <Route exact path="/user/give_review">
                  <UserNavbar />
                  <UserReview status="User" callback={userReview} />
              </Route>

              <Route exact path="/user/profile">
                  <UserNavbar />
                  <h2>Profile</h2>
              </Route>

              <Route exact path="/project-login">
                  <UserNavbar />
                  <h2>Logout</h2>
              </Route>
              
          </Switch>
      </Router>
    );

    //USER API END***********
}


export default App;
