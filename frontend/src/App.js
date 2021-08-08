
import { useState } from "react";
import HotelNavbar from "./serviceComponents/HotelNavbar";

import CarNavbar from "./serviceComponents/CarNavbar";

import FlightNavbar from "./serviceComponents/FlightNavbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function App() {

  return (
    <Router>
        <Switch>

           {/* Hotel Route */}
            <Route exact path="/hotelDashboard">
              <HotelNavbar/>
            </Route>


            {/* Car Route */}
            <Route exact path="/carDashboard">
              <CarNavbar/>
            </Route>


            {/* Flight Route */}
            <Route exact path="/flightDashboard">
              <FlightNavbar/>
            </Route>


        </Switch>
    </Router>
);
}

export default App;
