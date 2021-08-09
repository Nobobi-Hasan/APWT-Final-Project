import UserNavbar from "./userComponents/UserNavbar";
import UserReview from "./userComponents/UserReview";
import UserContactUs from "./userComponents/UserContactUs";
//import { useFetch } from './userComponents/useFetch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

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
              </Route>

              <Route exact path="/user/hotel">
                  <UserNavbar />
                  <h2>Hotel List</h2>
              </Route>

              <Route exact path="/user/car">
                  <UserNavbar />
                  <h2>Car List</h2>
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

              <Route exact path="/user/flight_list">
                  <UserNavbar />
                  <h2>Flight</h2>
              </Route>

              <Route exact path="/user/Car_list">
                  <UserNavbar />
                  <h2>Car</h2>
              </Route>

              <Route exact path="/user/travel_history">
                  <UserNavbar />
                  <h2>Travel History</h2>
              </Route>

              <Route exact path="/user/guideline">
                  <UserNavbar />
                  <h2>Travel Guideline</h2>
              </Route>

              <Route exact path="/user/notification">
                  <UserNavbar />
                  <h2>Notification</h2>
              </Route>

              <Route exact path="/user/about">
                  <UserNavbar />
                  <h2>About Us</h2>
              </Route>

              <Route exact path="/user/contact">
                  <UserNavbar />
                  <UserContactUs status="User" callback={userContactUs} />
              </Route>

              <Route exact path="/user/privay_policy">
                  <UserNavbar />
                  <h2>Privacy Policy</h2>
              </Route>

              <Route exact path="/user/faq">
                  <UserNavbar />
                  <h2>FAQ</h2>
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
}


export default App;
