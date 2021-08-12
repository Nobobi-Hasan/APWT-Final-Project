
import { useState } from "react";
import { useFetch } from './serviceComponents/useFetch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

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
import ServiceRoomUserInfoList from "./serviceComponents/Hotel/ServiceRoomUserInfoList";


// Car Import
import CarNavbar from "./serviceComponents/Car/CarNavbar";
import ServiceAddCar from "./serviceComponents/Car/ServiceAddCar";
import ServiceCarType from "./serviceComponents/Car/ServiceCarType";
import ServiceCarAvailability from "./serviceComponents/Car/ServiceCarAvailability";
import ServiceCarSupport from "./serviceComponents/Car/ServiceCarSupport";
import ServiceCarReviewList from "./serviceComponents/Car/ServiceCarReviewList";
import ServiceCarTransactionList from "./serviceComponents/Car/ServiceCarTransactionList";
import ServiceCarManageList from "./serviceComponents/Car/ServiceCarManageList";
import ServiceCarBookingList from "./serviceComponents/Car/ServiceCarBookingList";





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
              const serviceurl11 = 'http://127.0.0.1:8000/api/hotelDashboard/managehotelfacility';
              useFetch(serviceurl11, setServiceFacilitys);

      
              // Show all room list by service Hotel
              const [serviceroom, setServiceRooms] = useState([]);
              const serviceurl12 = 'http://127.0.0.1:8000/api/hotelDashboard/managehotelroom';
              useFetch(serviceurl12, setServiceRooms);

              // Show all booking list  by service Hotel
              const [servicebooking, setServiceBookings] = useState([]);
              const serviceurl13 = 'http://127.0.0.1:8000/api/hotelDashboard/showhotelallboking';
              useFetch(serviceurl13, setServiceBookings);

               // Show all pending booking list  by service Hotel
               const [servicependingbooking, setServicePendingBookings] = useState([]);
               const serviceurl14 = 'http://127.0.0.1:8000/api/hotelDashboard/room-book-pending';
               useFetch(serviceurl14, setServicePendingBookings);

              // Show all review list  by service Hotel
              const [servicereview, setServiceReviews] = useState([]);
              const serviceurl15 = 'http://127.0.0.1:8000/api/hotelDashboard/checkhotelreview';
              useFetch(serviceurl15, setServiceReviews);

              // Show all transaction list  by service Hotel
              const [servicetransaction, setServiceTransactions] = useState([]);
              const serviceurl16 = 'http://127.0.0.1:8000/api/hotelDashboard/hoteltransactionhistory';
              useFetch(serviceurl16, setServiceTransactions);

              //Show all room-user info list  by service Hotel
              const [serviceroomuserinfo, setServiceRoomUserInfos] = useState([]);
              
              // const serviceurl7 = 'http://127.0.0.1:8000/api/hotelDashboard/information';
              // useFetch(serviceurl7, setServiceRoomUserInfos);

              const detail = (id) => { 

                const axios = require('axios').default;
  
               const d = axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/information',
                    
                    data:id,
                  });
                  setServiceRoomUserInfos(d);
            };
  
  







                // Add Facility by service Hotel
                const serviceAddFacility = (newFacility) => { 

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/hotelDashboard/addhotelfacility',
                      
                      data:newFacility,
                    });
              };

            // Add Room by service Hotel
              const serviceAddRoom = (newRoom) => { 

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/addhotelroom',
                    
                    data:newRoom,
                  });
            };

            
          // Submit Support by service Hotel
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

              // Show all review list  by service Car
              const [servicecarreview, setServiceCarReviews] = useState([]);
              const serviceurl21 = 'http://127.0.0.1:8000/api/carDashboard/checkcarreview';
              useFetch(serviceurl21, setServiceCarReviews);

               // Show all transaction list  by service Car
               const [servicecartransaction, setServiceCarTransactions] = useState([]);
               const serviceurl22 = 'http://127.0.0.1:8000/api/carDashboard/cartransactionhistory';
               useFetch(serviceurl22, setServiceCarTransactions);

              // Show all car list by service Car
              const [servicecarmanage, setServiceCarManages] = useState([]);
              const serviceurl23 = 'http://127.0.0.1:8000/api/carDashboard/managecar';
              useFetch(serviceurl23, setServiceCarManages);

              // Show all booking list  by service Car
              const [servicecarbooking, setServiceCarBookings] = useState([]);
              const serviceurl24 = 'http://127.0.0.1:8000/api/carDashboard/car-booking-list';
              useFetch(serviceurl24, setServiceCarBookings);
                  
                  









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

       // Delete an Car from manage list by Service Car
       const serviceCarManageDeletecallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/carDashboard/cardelete',
            data:{
                id:id,
            }
          });
        const data = servicecarmanage.filter((service) => service.id != id);
        setServiceCarManages(data);
    };

     // Delete a Car Booking by Service Car
     const serviceCarBookingDeletecallback = (id) => {
      const axios = require('axios').default;

      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/carDashboard/delete',
          data:{
              id:id,
          }
        });
      const data = servicecarbooking.filter((service) => service.id != id);
      setServiceCarBookings(data);
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
                <div className="wrapper">
                       <HotelNavbar/>
                       <div className="main-container"> </div>
                </div> 
            </Route>

            <Route path="/hotelDashboard/addhotelfacility">
                  <div className="wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <ServiceAddFacility status="Facility" callback={serviceAddFacility} />
                        </div>
                  </div>
            </Route>

            <Route path="/hotelDashboard/addhotelroom">
                  <div className="wrapper"> 
                          <HotelNavbar />
                        <div className="main-container"> 
                             <ServiceAddRoom status="Room" callback={serviceAddRoom} />
                        </div>
                  </div>    
            </Route>

            <Route path="/hotelDashboard/hotelsupport">
                  <div className="wrapper"> 
                          <HotelNavbar />
                       <div className="main-container"> 
                            <ServiceHotelSupport status="Support" callback={serviceHotelSupport} />
                      </div>
                  </div>
            </Route>

            <Route path="/hotelDashboard/managehotelfacility">
                  <div className="wrapper"> 
                          <HotelNavbar />
                        <div className="main-container"> 
                        <ServiceFacilityList list={servicefacility} callback={serviceFacilityDeletecallback} />
                        </div>
                  </div>  
                </Route>

            <Route path="/hotelDashboard/managehotelroom">
                  <div className="wrapper">
                        <HotelNavbar />
                      <div className="main-container"> 
                        <ServiceRoomList list={serviceroom} callback={serviceRoomDeletecallback} />
                      </div>
                  </div>    
            </Route>

            <Route path="/hotelDashboard/showhotelallboking">
                <div className="wrapper">
                        <HotelNavbar />
                      <div className="main-container"> 
                        <ServiceBookingList list={servicebooking} detail={detail} callback={serviceBookingDeletecallback} />
                      </div>
                </div>
            </Route>

            <Route path="/hotelDashboard/room-book-pending">
                  <div className="wrapper">
                          <HotelNavbar />
                      <div className="main-container"> 
                        <ServicePendingBookingList list={servicependingbooking} callback={servicePendingBookingDeletecallback} />
                      </div>
                  </div>
            </Route>

            <Route path="/hotelDashboard/checkhotelreview">
                    <div className="wrapper">
                          <HotelNavbar />
                        <div className="main-container">
                            <ServiceReviewList list={servicereview} />
                        </div>
                    </div> 
            </Route>

            <Route path="/hotelDashboard/hoteltransactionhistory">
                  <div className="wrapper">
                          <HotelNavbar />
                      <div className="main-container">
                        <ServiceTransactionList list={servicetransaction} />
                      </div>
                  </div>
            </Route>

            <Route path="/hotelDashboard/information">
                <div className="wrapper">
                          <HotelNavbar />
                    <div className="main-container">
                        <ServiceRoomUserInfoList list={serviceroomuserinfo} />
                    </div>
                </div>  
            </Route>




            {/* Car Route */}
            <Route exact path="/carDashboard">
                  <div className="wrapper">
                        <CarNavbar/>
                      <div className="main-container"></div>
                  </div>
            </Route>

            <Route path="/carDashboard/addcar">
                  <div className="wrapper">
                          <CarNavbar />
                        <div className="main-container">
                           <ServiceAddCar status="Car" callback={serviceAddCar} />
                        </div>
                    </div>  
            </Route>

            <Route path="/carDashboard/managecar">
                  <div className="wrapper"> 
                          <CarNavbar />
                        <div className="main-container"> 
                        <ServiceCarManageList list={servicecarmanage} callback={serviceCarManageDeletecallback} />
                        </div>
                  </div>  
                </Route>

            <Route path="/carDashboard/car-booking-list">
                <div className="wrapper">
                        <CarNavbar />
                      <div className="main-container"> 
                        <ServiceCarBookingList list={servicecarbooking} detail={detail} callback={serviceCarBookingDeletecallback} />
                      </div>
                </div>
            </Route>

            <Route path="/carDashboard/cartype">
                  <div className="wrapper">
                            <CarNavbar />
                      <div className="main-container">
                        <ServiceCarType status="Type" callback={serviceCarType} />
                      </div>
                  </div>
            </Route>

            <Route path="/carDashboard/caravailability">
                   <div className="wrapper">
                              <CarNavbar />
                        <div className="main-container">
                            <ServiceCarAvailability status="Availability" callback={serviceCarAvailability} />
                        </div>
                  </div>

            </Route>

            <Route path="/carDashboard/carsupport">
                  <div className="wrapper">
                        <CarNavbar />
                      <div className="main-container">

                        <ServiceCarSupport status="Support" callback={serviceCarSupport} />
                      </div>
                  </div>
            </Route>

            <Route path="/carDashboard/checkcarreview">
                    <div className="wrapper">
                          <CarNavbar />
                        <div className="main-container">
                            <ServiceCarReviewList list={servicecarreview} />
                        </div>
                    </div> 
            </Route>

            <Route path="/carDashboard/cartransactionhistory">
                  <div className="wrapper">
                          <CarNavbar />
                      <div className="main-container">
                        <ServiceCarTransactionList list={servicecartransaction} />
                      </div>
                  </div>
            </Route>





            {/* Flight Route */}

            <Route exact path="/flightDashboard">
                <div className="wrapper">
                         <FlightNavbar/>
                    <div className="main-container"> 
                    </div>
                </div>
            </Route>

            <Route path="/flightDashboard/addflight">
                  <div className="wrapper">
                          <FlightNavbar />
                      <div className="main-container"> 
                        <ServiceAddFlight status="Flight" callback={serviceAddFlight} />
                      </div>
                  </div>
            </Route>

            <Route path="/flightDashboard/flighttype">
                <div className="wrapper">
                      <FlightNavbar />
                    <div className="main-container"> 
                        <ServiceFlightType status="Type" callback={serviceFlightType} />
                    </div>
                </div> 
            </Route>


            <Route path="/flightDashboard/flightavailability">
                <div className="wrapper">
                          <FlightNavbar />
                    <div className="main-container"> 
                        <ServiceFlightAvailability status="Availability" callback={serviceFlightAvailability} />
                    </div>
                </div>
            </Route>

            <Route path="/flightDashboard/flightsupport">
                  <div className="wrapper">
                        <FlightNavbar />
                    <div className="main-container"> 
                        <ServiceFlightSupport status="Support" callback={serviceFlightSupport} />
                    </div>
                  </div>  
            </Route>







        </Switch>
    </Router>
);
}

export default App;
