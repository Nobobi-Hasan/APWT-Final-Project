
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
import ServiceAddFlight from "./serviceComponents/Flight/ServiceAddFlight";
import ServiceFlightType from "./serviceComponents/Flight/ServiceFlightType";
import ServiceFlightAvailability from "./serviceComponents/Flight/ServiceFlightAvailability";
import ServiceFlightSupport from "./serviceComponents/Flight/ServiceFlightSupport";

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
              const serviceAddFlight = (newFlight) => { 

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/addflight',
                    
                    data:newFlight,
                  });
            };

            const serviceFlightType = (newType) => { 

              const axios = require('axios').default;

              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/flightDashboard/flighttype',
                  
                  data:newType,
                });
          };

          const serviceFlightAvailability = (newAvailable) => { 

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/flightDashboard/flightavailability',
                
                data:newAvailable,
              });
        };

        const serviceFlightSupport = (newSupport) => { 

          const axios = require('axios').default;

          axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/api/flightDashboard/flightsupport',
              
              data:newSupport,
            });
      };






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

            <Route path="/flightDashboard/addflight">
                    <FlightNavbar />
                    <div>
                        <ServiceAddFlight status="Flight" callback={serviceAddFlight} />
                    </div>
            </Route>

            <Route path="/flightDashboard/flighttype">
                    <FlightNavbar />
                    <div>
                        <ServiceFlightType status="Type" callback={serviceFlightType} />
                    </div>
            </Route>

            <Route path="/flightDashboard/flightavailability">
                    <FlightNavbar />
                    <div>
                        <ServiceFlightAvailability status="Availability" callback={serviceFlightAvailability} />
                    </div>
            </Route>

            <Route path="/flightDashboard/flightsupport">
                    <FlightNavbar />
                    <div>
                        <ServiceFlightSupport status="Support" callback={serviceFlightSupport} />
                    </div>
            </Route>







        </Switch>
    </Router>
);
}

export default App;
