
import { useState } from "react";
import { useFetch } from './serviceComponents/useFetch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Hotel Import
import HotelNavbar from "./serviceComponents/Hotel/HotelNavbar";
import ServiceAddFacility from "./serviceComponents/Hotel/ServiceAddFacility";
import ServiceAddRoom from "./serviceComponents/Hotel/ServiceAddRoom";
import ServiceHotelSupport from "./serviceComponents/Hotel/ServiceHotelSupport";
import ServiceFacilityList from "./serviceComponents/Hotel/ServiceFacilityList";
import ServiceRoomList from "./serviceComponents/Hotel/ServiceRoomList";
import ServiceBookingList from "./serviceComponents/Hotel/ServiceBookingList";
import ServicePendingBookingList from "./serviceComponents/Hotel/ServicePendingBookingList";
import ServiceReviewList from "./serviceComponents/Hotel/ServiceReviewList";
import ServiceTransactionList from "./serviceComponents/Hotel/ServiceTransactionList";


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

              // Show all faccilities list by service Hotel
              const [servicefacility, setServiceFacilitys] = useState([]);
              const serviceurl1 = 'http://127.0.0.1:8000/api/hotelDashboard/managehotelfacility';
              useFetch(serviceurl1, setServiceFacilitys);

      
              // Show all room list by service Hotel
              const [serviceroom, setServiceRooms] = useState([]);
              const serviceurl2 = 'http://127.0.0.1:8000/api/hotelDashboard/managehotelroom';
              useFetch(serviceurl2, setServiceRooms);

              // Show all booking list  by service Hotel
              const [servicebooking, setServiceBookings] = useState([]);
              const serviceurl3 = 'http://127.0.0.1:8000/api/hotelDashboard/showhotelallboking';
              useFetch(serviceurl3, setServiceBookings);

               // Show all pending booking list  by service Hotel
               const [servicependingbooking, setServicePendingBookings] = useState([]);
               const serviceurl4 = 'http://127.0.0.1:8000/api/hotelDashboard/room-book-pending';
               useFetch(serviceurl4, setServicePendingBookings);

              // Show all review list  by service Hotel
              const [servicereview, setServiceReviews] = useState([]);
              const serviceurl5 = 'http://127.0.0.1:8000/api/hotelDashboard/checkhotelreview';
              useFetch(serviceurl5, setServiceReviews);

              // Show all transaction list  by service Hotel
              const [servicetransaction, setServiceTransactions] = useState([]);
              const serviceurl6 = 'http://127.0.0.1:8000/api/hotelDashboard/hoteltransactionhistory';
              useFetch(serviceurl6, setServiceTransactions);








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

            // Delete an Facility by Service Hotel
            const serviceFacilityDeletecallback = (id) => {
              const axios = require('axios').default;

              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/hotelDashboard/facilitydelete',
                  data:{
                      id:id,
                  }
                });
              const data = servicefacility.filter((service) => service.id != id);
              setServiceFacilitys(data);
          };

          // Delete a Room by Service Hotel
          const serviceRoomDeletecallback = (id) => {
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/hotelDashboard/roomdelete',
                data:{
                    id:id,
                }
              });
            const data = serviceroom.filter((service) => service.id != id);
            setServiceRooms(data);
        };

        // Delete a Booking by Service Hotel
        const serviceBookingDeletecallback = (id) => {
          const axios = require('axios').default;

          axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/api/hotelDashboard/bookingdelete',
              data:{
                  id:id,
              }
            });
          const data = servicebooking.filter((service) => service.id != id);
          setServiceBookings(data);
      };

      // Delete a Pending Booking by Service Hotel
      const servicePendingBookingDeletecallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/hotelDashboard/bookingdecline',
            data:{
                id:id,
            }
          });
        const data = servicependingbooking.filter((service) => service.id != id);
        setServicePendingBookings(data);
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

            <Route path="/hotelDashboard/managehotelfacility">
                <HotelNavbar />
                    <div>
                        <ServiceFacilityList list={servicefacility} callback={serviceFacilityDeletecallback} />
                    </div>
                </Route>

            <Route path="/hotelDashboard/managehotelroom">
                <HotelNavbar />
                    <div>
                        <ServiceRoomList list={serviceroom} callback={serviceRoomDeletecallback} />
                    </div>
            </Route>

            <Route path="/hotelDashboard/showhotelallboking">
                <HotelNavbar />
                    <div>
                        <ServiceBookingList list={servicebooking} callback={serviceBookingDeletecallback} />
                    </div>
            </Route>

            <Route path="/hotelDashboard/room-book-pending">
                <HotelNavbar />
                    <div>
                        <ServicePendingBookingList list={servicependingbooking} callback={servicePendingBookingDeletecallback} />
                    </div>
            </Route>

            <Route path="/hotelDashboard/checkhotelreview">
                <HotelNavbar />
                    <div>
                        <ServiceReviewList list={servicereview} />
                    </div>
            </Route>

            <Route path="/hotelDashboard/hoteltransactionhistory">
                <HotelNavbar />
                    <div>
                        <ServiceTransactionList list={servicetransaction} />
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
