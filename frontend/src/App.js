
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Hotel Import
import HotelNavbar from "./serviceComponents/Hotel/HotelNavbar";
import ServiceAddFacility from "./serviceComponents/Hotel/ServiceAddFacility";
import ServiceAddRoom from "./serviceComponents/Hotel/ServiceAddRoom";
import ServiceHotelSupport from "./serviceComponents/Hotel/ServiceHotelSupport";




// Car Import
import CarNavbar from "./serviceComponents/Car/CarNavbar";
import ServiceAddCar from "./serviceComponents/Car/ServiceAddCar";
import ServiceCarType from "./serviceComponents/Car/ServiceCarType";
import ServiceCarAvailability from "./serviceComponents/Car/ServiceCarAvailability";
import ServiceCarSupport from "./serviceComponents/Car/ServiceCarSupport";



// Flight Import
import FlightNavbar from "./serviceComponents/Flight/FlightNavbar";




function App() {

  // Hotel API Work
                const serviceAddFacility = (newFacility) => { 

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/hotelDashboard/addhotelfacility',
                      
                      data:newFacility,
                    });
              };

              const serviceAddRoom = (newRoom) => { 

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/addhotelroom',
                    
                    data:newRoom,
                  });
            };

            const serviceHotelSupport = (newSupport) => { 

              const axios = require('axios').default;

              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/hotelDashboard/hotelsupport',
                  
                  data:newSupport,
                });
          };

  // Car API Work
              const serviceAddCar = (newCar) => { 

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/carDashboard/addcar',
                    
                    data:newCar,
                  });
            };

            const serviceCarType = (newType) => { 

              const axios = require('axios').default;

              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/carDashboard/cartype',
                  
                  data:newType,
                });
          };

          const serviceCarAvailability = (newAvailable) => { 

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/carDashboard/caravailability',
                
                data:newAvailable,
              });
        };

        const serviceCarSupport = (newSupport) => { 

          const axios = require('axios').default;

          axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/api/carDashboard/carsupport',
              
              data:newSupport,
            });
      };










  // Flight API Work






  return (
    <Router>
        <Switch>

           {/* Hotel Route */}

            <Route exact path="/hotelDashboard">
              <HotelNavbar/>
            </Route>

            <Route path="/hotelDashboard/addhotelfacility">
                    <HotelNavbar />
                    <div>
                        <ServiceAddFacility status="Facility" callback={serviceAddFacility} />
                    </div>
            </Route>

            <Route path="/hotelDashboard/addhotelroom">
                    <HotelNavbar />
                    <div>
                        <ServiceAddRoom status="Room" callback={serviceAddRoom} />
                    </div>
            </Route>

            <Route path="/hotelDashboard/hotelsupport">
                    <HotelNavbar />
                    <div>
                        <ServiceHotelSupport status="Support" callback={serviceHotelSupport} />
                    </div>
            </Route>












            {/* Car Route */}
            <Route exact path="/carDashboard">
              <CarNavbar/>
            </Route>

            <Route path="/carDashboard/addcar">
                    <CarNavbar />
                    <div>
                        <ServiceAddCar status="Car" callback={serviceAddCar} />
                    </div>
            </Route>

            <Route path="/carDashboard/cartype">
                    <CarNavbar />
                    <div>
                        <ServiceCarType status="Type" callback={serviceCarType} />
                    </div>
            </Route>

            <Route path="/carDashboard/caravailability">
                    <CarNavbar />
                    <div>
                        <ServiceCarAvailability status="Availability" callback={serviceCarAvailability} />
                    </div>
            </Route>

            <Route path="/carDashboard/carsupport">
                    <CarNavbar />
                    <div>
                        <ServiceCarSupport status="Support" callback={serviceCarSupport} />
                    </div>
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
