import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// useFetch----------------------------------------- SERVICE
import { useFetch } from './serviceComponents/useFetch';


// Registration------------------------------ SERVICE
import Register from "./Registration/Register";
import HotelRegistration from "./Registration/HotelRegistration";
import TransportRegistration from "./Registration/TransportRegistration";


// Hotel Import---------------------------------------- SERVICE Start
import HotelHome from "./serviceComponents/Hotel/HotelHome";
import HotelProfile from "./serviceComponents/Hotel/HotelProfile";
import HotelNavbar from "./serviceComponents/Hotel/HotelNavbar";
import ServiceAddFacility from "./serviceComponents/Hotel/ServiceAddFacility";
import ServiceEditFacility from "./serviceComponents/Hotel/ServiceEditFacility";
import ServiceAddRoom from "./serviceComponents/Hotel/ServiceAddRoom";
import ServiceEditRoom from "./serviceComponents/Hotel/ServiceEditRoom";
import ServiceFacilityList from "./serviceComponents/Hotel/ServiceFacilityList";
import ServiceRoomList from "./serviceComponents/Hotel/ServiceRoomList";
import ServiceBookingList from "./serviceComponents/Hotel/ServiceBookingList";
import ServiceBookingDetailsList from "./serviceComponents/Hotel/ServiceBookingDetailsList";
import ServicePendingBookingList from "./serviceComponents/Hotel/ServicePendingBookingList";
import ServiceReviewList from "./serviceComponents/Hotel/ServiceReviewList";
import ServiceTransactionList from "./serviceComponents/Hotel/ServiceTransactionList";
import ServiceHotelSupport from "./serviceComponents/Hotel/ServiceHotelSupport";
// Hotel Import----------------------------------------------------- SERVICE End



// Car Import ----------------------------------------------- SERVICE Start
import CarHome from "./serviceComponents/Car/CarHome";
import CarProfile from "./serviceComponents/Car/CarProfile";
import CarNavbar from "./serviceComponents/Car/CarNavbar";
import ServiceAddCar from "./serviceComponents/Car/ServiceAddCar";
import ServiceEditCar from "./serviceComponents/Car/ServiceEditCar";
import ServiceCarManageList from "./serviceComponents/Car/ServiceCarManageList";
import ServiceCarBookingList from "./serviceComponents/Car/ServiceCarBookingList";
import ServiceCarBookingDetailsList from "./serviceComponents/Car/ServiceCarBookingDetailsList";
import ServiceCarPendingBookingList from "./serviceComponents/Car/ServiceCarPendingBookingList";
import ServiceCarType from "./serviceComponents/Car/ServiceCarType";
import ServiceCarAvailability from "./serviceComponents/Car/ServiceCarAvailability";
import ServiceCarReviewList from "./serviceComponents/Car/ServiceCarReviewList";
import ServiceCarTransactionList from "./serviceComponents/Car/ServiceCarTransactionList";
import ServiceCarSupport from "./serviceComponents/Car/ServiceCarSupport";
// Car Import ------------------------------------------------------  SERVICE END



// Flight Import----------------------SERVICE Start
import FlightHome from "./serviceComponents/Flight/FlightHome";
import FlightProfile from "./serviceComponents/Flight/FlightProfile";
import FlightNavbar from "./serviceComponents/Flight/FlightNavbar";
import ServiceAddFlight from "./serviceComponents/Flight/ServiceAddFlight";
import ServiceEditFlight from "./serviceComponents/Flight/ServiceEditFlight";
import ServiceFlightManageList from "./serviceComponents/Flight/ServiceFlightManageList";
import ServiceFlightBookingList from "./serviceComponents/Flight/ServiceFlightBookingList";
import ServiceFlightBookingDetailsList from "./serviceComponents/Flight/ServiceFlightBookingDetailsList";
import ServiceFlightPendingBookingList from "./serviceComponents/Flight/ServiceFlightPendingBookingList";
import ServiceFlightType from "./serviceComponents/Flight/ServiceFlightType";
import ServiceFlightAvailability from "./serviceComponents/Flight/ServiceFlightAvailability";
import ServiceFlightReviewList from "./serviceComponents/Flight/ServiceFlightReviewList";
import ServiceFlightTransactionList from "./serviceComponents/Flight/ServiceFlightTransactionList";
import ServiceFlightSupport from "./serviceComponents/Flight/ServiceFlightSupport";
// Flight Import----------------------SERVICE END




function App() {

// Service Function App -----------------------------------------------------------------------Start
  
//-------------- Registration -----------------
          
          // Add Hotel in Registration Page
          const hotelRegistration = (newHotel) => { 

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/hotelreg',
                data:newHotel,
              });
        };

        // Add Transport in Registration Page
        const transportRegistration = (newTransport) => { 

          const axios = require('axios').default;

          axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/api/transportreg',
              data:newTransport,
            });
      };



  //-----------------------  Hotel -----------------------------

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

               // Show an Booking Details by Hotel
               const [serviceBookingDetails, setServiceBookingDetails] = useState([]);

               const serviceBookingDetailscallback = (id) => {
               const data = servicebooking.filter((service) => service.id == id);
               setServiceBookingDetails(data);
               console.log(data);
               };

              
              
                // Add Facility by service Hotel
                const serviceAddFacility = (newFacility) => { 
                  var answer = window.confirm("Add this Facility?");
                    if (answer) {

                          const axios = require('axios').default;

                          axios({
                              method: 'post',
                              url: 'http://127.0.0.1:8000/api/hotelDashboard/addhotelfacility',
                              
                              data:newFacility,
                            });
                            setServiceFacilitys([...servicefacility,newFacility])
                          }
                      };


              // Edit Facility by service Hotel
              const serviceEditFacility = (editFacility) => { 

                var answer = window.confirm("Edit this Facility?");
                    if (answer) {

                const axios = require('axios').default;
  
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/facilityedit',
                    data:editFacility,
                  });
                  const data = servicefacility.filter((facility) => facility.id != editFacility.id);
                  const data2 = servicefacility.filter((facility) => facility.id == editFacility.id);
                  const data3 = servicefacility.filter((facility) => facility.id == editFacility.id);
  
                  data3.id = editFacility.id;
                  data3.title = editFacility.title;
                  data3.description = editFacility.description;
  
                  data3.created = data2[0].created;
                  data3.image = data2[0].image;
                  
                  console.log(data2[0]);
                  console.log(data2.created);
  
                  setServiceFacilitys([...data, data3]);
                }
              };


            // Add Room by service Hotel
              const serviceAddRoom = (newRoom) => { 

                var answer = window.confirm("Add this Facility?");
                if (answer) {

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/addhotelroom',
                    
                    data:newRoom,
                  });
                  setServiceRooms([...serviceroom,newRoom])
                }
            };


            //Edit Room by Service Hotel
            const serviceEditRoom = (editRoom) => { 
              
              var answer = window.confirm("Edit this Room?");
                    if (answer) {

              const axios = require('axios').default;

              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/hotelDashboard/roomedit',
                  data:editRoom,
                });
                const data = serviceroom.filter((room) => room.id != editRoom.id);
                const data2 = serviceroom.filter((room) => room.id == editRoom.id);
                const data3 = serviceroom.filter((room) => room.id == editRoom.id);

                data3.id = editRoom.id;
                data3.name = editRoom.name;
                data3.description = editRoom.description;
                data3.price = editRoom.price;
                data3.availability = editRoom.availability;

                
                data3.created = data2[0].created;
                data3.image = data2[0].image;
                
                console.log(data2[0]);
                console.log(data2.created);

                setServiceRooms([...data, data3]);
              }
            };

            
                // Submit Support by service Hotel
                const serviceHotelSupport = (newSupport) => { 
                  
                  var answer = window.confirm("Want to Send Message to Admin?");
                          if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/hotelDashboard/hotelsupport',
                      
                      data:newSupport,
                    });
                    
                  }
              };


              // Approve Pending Bookign List Hotel
              const servicePendingBookingApprovecallback = (id) => {
                
              var answer = window.confirm("Approve this Booking?");
                    if (answer) {

                const axios = require('axios').default;
        
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/hotelDashboard/bookingapprove',
                    data:{
                        id:id,
                    }
                  });
        
                const data = servicependingbooking.filter((service) => service.id != id);
                const data2 = servicependingbooking.filter((service) => service.id == id);
                console.log(data);
                console.log(data2);
                setServicePendingBookings(data);
                setServiceBookings([...servicebooking, ...data2]);
                    }
            };


            // Delete an Facility by Service Hotel
            const serviceFacilityDeletecallback = (id) => {
              var answer = window.confirm("Delete this Facility?");
                    if (answer) {

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
                    }
          };


                // Delete a Room by Service Hotel
                const serviceRoomDeletecallback = (id) => {
                  var answer = window.confirm("Delete this Room?");
                          if (answer) {

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
                          }
              };


                // Delete a Booking by Service Hotel
                const serviceBookingDeletecallback = (id) => {
                  var answer = window.confirm("Delete this Booking?");
                  if (answer) {

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
                  }
                };


                // Delete a Pending Booking by Service Hotel
                const servicePendingBookingDeclinecallback = (id) => {
                  var answer = window.confirm("Decline this Pendeing Booking?");
                  if (answer) {

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
                  }
              };


          
        
//------------------------------ Car -----------------------------------------

              // Show all car list by service Car
              const [servicecarmanage, setServiceCarManages] = useState([]);
              const serviceurl21 = 'http://127.0.0.1:8000/api/carDashboard/managecar';
              useFetch(serviceurl21, setServiceCarManages);

              // Show all booking list  by service Car
              const [servicecarbooking, setServiceCarBookings] = useState([]);
              const serviceurl22 = 'http://127.0.0.1:8000/api/carDashboard/car-booking-list';
              useFetch(serviceurl22, setServiceCarBookings);

              // Show all pending booking list  by service Hotel
              const [servicecarpendingbooking, setServiceCarPendingBookings] = useState([]);
              const serviceurl23 = 'http://127.0.0.1:8000/api/carDashboard/car-pending-list';
              useFetch(serviceurl23, setServiceCarPendingBookings);

               // Show all review list  by service Car
               const [servicecarreview, setServiceCarReviews] = useState([]);
               const serviceurl24 = 'http://127.0.0.1:8000/api/carDashboard/checkcarreview';
               useFetch(serviceurl24, setServiceCarReviews);

                // Show all transaction list  by service Car
                const [servicecartransaction, setServiceCarTransactions] = useState([]);
                const serviceurl25 = 'http://127.0.0.1:8000/api/carDashboard/cartransactionhistory';
                useFetch(serviceurl25, setServiceCarTransactions);

                // Show car availability by Car
                const [serviceCarAvailability, setServiceCarAvailability] = useState([]);
                const url26 = 'http://127.0.0.1:8000/api/carDashboard/caravailability';
                useFetch(url26, setServiceCarAvailability);

                // Show car type by Car
                const [serviceCarType, setServiceCarType] = useState([]);
                const url27 = 'http://127.0.0.1:8000/api/carDashboard/cartype';
                useFetch(url27, setServiceCarType);

                // Show an Booking Details by Car
                const [serviceCarBookingDetails, setServiceCarBookingDetails] = useState([]);

                const serviceCarBookingDetailscallback = (id) => {
                const data = servicecarbooking.filter((service) => service.id == id);
                setServiceCarBookingDetails(data);
                console.log(data);
                };


                    //Add CAR
                      const serviceAddCar = (newCar) => { 
                        var answer = window.confirm("Add this Car?");
                          if (answer) {

                        const axios = require('axios').default;

                        axios({
                            method: 'post',
                            url: 'http://127.0.0.1:8000/api/carDashboard/addcar',
                            data:newCar,
                            });

                            setServiceCarManages([...servicecarmanage,newCar])
                          }
                      };


                    //Edit CAR
                    const serviceEditCar = (editCar) => { 

                      var answer = window.confirm("Edit this Car?");
                        if (answer) {

                      const axios = require('axios').default;

                      axios({
                          method: 'post',
                          url: 'http://127.0.0.1:8000/api/carDashboard/caredit',
                          data:editCar,
                        });
                        const data = servicecarmanage.filter((car) => car.id != editCar.id);
                        const data2 = servicecarmanage.filter((car) => car.id == editCar.id);
                        const data3 = servicecarmanage.filter((car) => car.id == editCar.id);
    
                        data3.id = editCar.id;
                        data3.title = editCar.title;
                        data3.model = editCar.model;
                        data3.driver = editCar.driver;

                        
                        data3.type = data2[0].type;
                        data3.fare = data2[0].fare;
                        data3.availability = data2[0].availability;
                        data3.image = data2[0].image;
                        
                        console.log(data2[0]);
                        console.log(data2.type);
                        console.log(data2.fare);
                        console.log(data2.availability);
    
                        setServiceCarManages([...data, data3]);
                        }
                    };


                    //ADD CAR Support
                    const serviceCarSupport = (newSupport) => { 

                      var answer = window.confirm("Want to Send Message to Admin?");
                     if (answer) {

                      const axios = require('axios').default;

                      axios({
                          method: 'post',
                          url: 'http://127.0.0.1:8000/api/carDashboard/carsupport',
                          
                          data:newSupport,
                        });
                      }
                  };


                  // Approve Pending Bookign List Car
                  const serviceCarPendingBookingApprovecallback = (id) => {
                    var answer = window.confirm("Approve this Booking?");
                     if (answer) {

                    const axios = require('axios').default;
            
                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/carDashboard/approve',
                        data:{
                            id:id,
                        }
                      });
            
                    const data = servicecarpendingbooking.filter((service) => service.id != id);
                    const data2 = servicecarpendingbooking.filter((service) => service.id == id);
                    console.log(data);
                    console.log(data2);
                    setServiceCarPendingBookings(data);
                    setServiceCarBookings([...servicecarbooking, ...data2]);
                     }
                };


                // Car Availability Change Post
                const carAvailabilityCallback = ({title, availability}) => {
                  var answer = window.confirm("Change this Availability?");
                     if (answer) {

                  const axios = require('axios').default;
          
                  console.log(title);
          
                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/carDashboard/caravailability',
                      data:{
                        title: title,
                        availability: availability,
                      }
                      });
                    }
              };


               // Car Type Change Post
               const carTypeCallback = ({title, type, fare}) => {
                var answer = window.confirm("Change this Type?");
                if (answer) {

                const axios = require('axios').default;
        
                console.log(title);
        
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/carDashboard/cartype',
                    data:{
                      title: title,
                      fare:fare,
                      type: type,
                    }
                    });
                  }
                };


                      // Delete an Car from manage list by Service Car
                      const serviceCarManageDeletecallback = (id) => {

                        var answer = window.confirm("Delete this Car?");
                           if (answer) {
                        
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
                           }
                    };


                    // Delete a Car Booking by Service Car
                    const serviceCarBookingDeletecallback = (id) => {
                      var answer = window.confirm("Delete this Booking?");
                          if (answer) {

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
                          }
                  };


                  // Decline a Car Pending Booking by Service Car
                  const serviceCarPendingBookingDeclinecallback = (id) => {
                    var answer = window.confirm("Decline this Pending Booking?");
                      if (answer) {

                    const axios = require('axios').default;

                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/carDashboard/decline',
                        data:{
                            id:id,
                        }
                      });
                    const data = servicecarpendingbooking.filter((service) => service.id != id);
                    setServiceCarPendingBookings(data);
                      }
                };




//  --------------------------------------- Flight ------------------------------------------------

              // Show all Flight list by service Flight
              const [serviceflightmanage, setServiceFlightManages] = useState([]);
              const serviceurl31 = 'http://127.0.0.1:8000/api/flightDashboard/manageflight';
              useFetch(serviceurl31, setServiceFlightManages);

              // Show all booking list  by service Flight
              const [serviceflightbooking, setServiceFlightBookings] = useState([]);
              const serviceurl32 = 'http://127.0.0.1:8000/api/flightDashboard/flight-booking-list';
              useFetch(serviceurl32, setServiceFlightBookings);

              // Show all pending booking list  by service Flight
              const [serviceflightpendingbooking, setServiceFlightPendingBookings] = useState([]);
              const serviceurl33 = 'http://127.0.0.1:8000/api/flightDashboard/flight-pending-list';
              useFetch(serviceurl33, setServiceFlightPendingBookings);

              // Show all review list  by service Flight
              const [serviceflightreview, setServiceFlightReviews] = useState([]);
              const serviceurl34 = 'http://127.0.0.1:8000/api/flightDashboard/checkflightreview';
              useFetch(serviceurl34, setServiceFlightReviews);

              // Show all transaction list  by service Flight
              const [serviceflighttransaction, setServiceFlightTransactions] = useState([]);
              const serviceurl35 = 'http://127.0.0.1:8000/api/flightDashboard/flighttransactionhistory';
              useFetch(serviceurl35, setServiceFlightTransactions);

               // Show Flight availability by Flight
               const [serviceFlightAvailability, setServiceFlightAvailability] = useState([]);
               const url36 = 'http://127.0.0.1:8000/api/flightDashboard/flightavailability';
               useFetch(url36, setServiceFlightAvailability);

               // Show Flight type by Flight
               const [serviceFlightType, setServiceFlightType] = useState([]);
               const url37 = 'http://127.0.0.1:8000/api/flightDashboard/flighttype';
               useFetch(url37, setServiceFlightType);

               // Show an Booking Details by Flight
               const [serviceFlightBookingDetails, setServiceFlightBookingDetails] = useState([]);

               const serviceFlightBookingDetailscallback = (id) => {
               const data = serviceflightbooking.filter((service) => service.id == id);
               setServiceFlightBookingDetails(data);
               console.log(data);
               };


                  //Add Flight
                  const serviceAddFlight = (newFlight) => { 
                    var answer = window.confirm("Add this Air?");
                      if (answer) {

                    const axios = require('axios').default;


                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/flightDashboard/addflight',
                        
                        data:newFlight,
                      });
                      
                        setServiceFlightManages([...serviceflightmanage,newFlight])
                    }
                };


                //Add Flight Support
                const serviceFlightSupport = (newSupport) => { 
                  
                  var answer = window.confirm("Want to Send Message to Admin?");
                      if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/flightDashboard/flightsupport',
                      
                      data:newSupport,
                    });
                  }
              };

              const serviceEditFlight = (editFlight) => { 

                var answer = window.confirm("Edit this Air?");
                      if (answer) {

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/flightedit',
                    data:editFlight,
                  });
                    console.log(editFlight);

                    const data = serviceflightmanage.filter((flight) => flight.id != editFlight.id);
                    const data2 = serviceflightmanage.filter((flight) => flight.id == editFlight.id);
                    const data3 = serviceflightmanage.filter((flight) => flight.id == editFlight.id);

                    data3.id = editFlight.id;
                    data3.title = editFlight.title;
                    data3.model = editFlight.model;

                    data3.type = data2[0].type;
                    data3.fare = data2[0].fare;
                    data3.availability = data2[0].availability;
                    data3.image = data2[0].image;
                    
                    console.log(data2[0]);
                    console.log(data2.type);
                    console.log(data2.fare);
                    console.log(data2.availability);

                    setServiceFlightManages([...data, data3]);
                    }
                 };


              // Flight Availability Change Post
              const flightAvailabilityCallback = ({title, availability}) => {
                
                var answer = window.confirm("Change this Availability?");
                      if (answer) {
                const axios = require('axios').default;
        
                console.log(title);
        
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/flightavailability',
                    data:{
                      title: title,
                      availability: availability,
                    }
                    });
                  }
            };


             // Flight Type Change Post
             const flightTypeCallback = ({title, type, fare}) => {
              
              var answer = window.confirm("Change this Type?");
              if (answer) {

              const axios = require('axios').default;
      
              console.log(title);
      
              axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8000/api/flightDashboard/flighttype',
                  data:{
                    title: title,
                    fare:fare,
                    type: type,
                  }
                  });
                }
          };


              // Approve Pending Bookign List Flight
              const serviceFlightPendingBookingApprovecallback = (id) => {
                var answer = window.confirm("Approve this Booking?");
                      if (answer) {

                const axios = require('axios').default;
        
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/approve',
                    data:{
                        id:id,
                    }
                  });
        
                const data = serviceflightpendingbooking.filter((service) => service.id != id);
                const data2 = serviceflightpendingbooking.filter((service) => service.id == id);
                console.log(data);
                console.log(data2);
                setServiceFlightPendingBookings(data);
                setServiceFlightBookings([...serviceflightbooking, ...data2]);
                }
            };


                  // Delete an Flight from manage list by Service Flight
                  const serviceFlightManageDeletecallback = (id) => {
                    var answer = window.confirm("Delete this Air?");
                      if (answer) {

                    const axios = require('axios').default;

                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/flightDashboard/flightdelete',
                        data:{
                            id:id,
                        }
                      });
                    const data = serviceflightmanage.filter((service) => service.id != id);
                    setServiceFlightManages(data);
                      }
                };


                  // Delete a Flight Booking by Service Flight
                const serviceFlightBookingDeletecallback = (id) => {
                  var answer = window.confirm("Delete this Booking?");
                      if (answer) {

                  const axios = require('axios').default;

                  axios({
                      method: 'post',
                      url: 'http://127.0.0.1:8000/api/flightDashboard/delete',
                      data:{
                          id:id,
                      }
                    });
                  const data = serviceflightbooking.filter((service) => service.id != id);
                  setServiceFlightBookings(data);
                  }
              };


              // Decline a Flight Pending Booking by Service Flight
              const serviceFlightPendingBookingDeclinecallback = (id) => {
                var answer = window.confirm("Decline this Pending Booking?");
                      if (answer) {

                const axios = require('axios').default;

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/flightDashboard/decline',
                    data:{
                        id:id,
                    }
                  });
                const data = serviceflightpendingbooking.filter((service) => service.id != id);
                setServiceFlightPendingBookings(data);
                      }
            };



// --------------------------------  All Profile  ---------------------------------------------

                      
                            // Profile update by CAR
                            const carProfileUpdate = async(newProfile) => { 
                              var answer = window.confirm("Update this Profile?");
                                   if (answer) {

                                const axios = require('axios').default;

                                const status = await axios({
                                    method: 'post',
                                    url: 'http://127.0.0.1:8000/api/carDashboard/profile',
                                    data:newProfile,
                                  });

                                  if (status)
                                  {
                                    alert("Profile Updated successfully");

                                  setCarLoginName(newProfile.name);
                                  setCarLoginPhone(newProfile.phone);
                                  setCarLoginEmail(newProfile.email);
                                  setCarLoginType(newProfile.type);
                                  
                                  console.log(newProfile);
                                }
                              }
                            };


                            // Profile update by Flight
                            const flightProfileUpdate =async (newProfile) => { 
                              
                              var answer = window.confirm("Update this Profile?");
                                   if (answer) {

                              const axios = require('axios').default;
                              const status = await axios({

                                  method: 'post',
                                  url: 'http://127.0.0.1:8000/api/flightDashboard/profile',
                                  data:newProfile,
                                });

                                if (status)
                                {
                                  alert("Profile Updated successfully");

                                setFlightLoginName(newProfile.name);
                                setFlightLoginPhone(newProfile.phone);
                                setFlightLoginEmail(newProfile.email);
                                setFlightLoginType(newProfile.type);
                                
                                console.log(newProfile);
                              }
                            }
                          };


                          // Profile update by Hotel
                          const hotelProfileUpdate = async(newProfile) => {
                            
                            var answer = window.confirm("Update this Profile?");
                                   if (answer) { 

                            const axios = require('axios').default;

                            const status = await axios({
                                method: 'post',
                                url: 'http://127.0.0.1:8000/api/hotelDashboard/profile',
                                data:newProfile,
                              });

                              if (status)
                              {
                                alert("Profile Updated successfully");

                              setHotelLoginName(newProfile.name);
                              setHotelLoginAddress(newProfile.address);
                              setHotelLoginLocation(newProfile.location);
                              setHotelLoginPhone(newProfile.phone);
                              setHotelLoginEmail(newProfile.email);
                              setHotelLoginType(newProfile.type);
                              
                              console.log(newProfile);
                            }
                          }
                        };

// Service Function App -----------------------------------------------------------------------END




  return (
    <Router>
        <Switch>
        
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route Start */}
          


          {/* ------------------------- Service Registration Route -------------------------------- */}

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/hotelreg">
                <HotelRegistration  callback={hotelRegistration} />
            </Route>

            <Route exact path="/transportreg">
                <TransportRegistration  callback={transportRegistration} />
            </Route>




      {/* ---------------------------------   Service Hotel Route  --------------------------------------------  */}

           <Route exact path="/hotelDashboard/index">
                    <div className="wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <HotelHome/>
                        </div>
                    </div>      
            </Route>

            <Route exact exact path="/hotelDashboard/profile">
                    <div className="wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <HotelProfile hotelidl = {hotelloginId} 
                            hotelnamel = {hotelloginName}
                            hoteladdressl = {hotelloginAddress}
                            hotellocationl = {hotelloginLocation}
                            hotelphonel = {hotelloginPhone}
                            hotelemaill = {hotelloginEmail}
                            hoteltypel = {hotelloginType}
                            callback={hotelProfileUpdate} />  
                        </div>
                    </div>
            </Route>

            <Route exact path="/hotelDashboard/addhotelfacility">
                  <div className="wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <ServiceAddFacility status="Facility" callback={serviceAddFacility} />
                        </div>
                  </div>
            </Route>

            <Route exact path="/hotelDashboard/addhotelroom">
                  <div className="wrapper"> 
                          <HotelNavbar />
                        <div className="main-container"> 
                             <ServiceAddRoom status="Room" callback={serviceAddRoom} />
                        </div>
                  </div>    
            </Route>

            <Route exact path="/hotelDashboard/hotelsupport">
                  <div className="wrapper"> 
                          <HotelNavbar />
                       <div className="main-container"> 
                            <ServiceHotelSupport status="Support" callback={serviceHotelSupport} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/hotelDashboard/managehotelfacility">
                  <div className="wrapper"> 
                          <HotelNavbar />
                        <div className="main-container"> 
                        <ServiceFacilityList list={servicefacility} callback={serviceFacilityDeletecallback} />
                        </div>
                  </div>  
            </Route>

                <Route exact path="/hotelDashboard/facilityedit/:id">
                  <div className="wrapper">
                          <HotelNavbar />
                        <div className="main-container">
                        <ServiceEditFacility callback={serviceEditFacility} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/hotelDashboard/managehotelroom">
                  <div className="wrapper">
                        <HotelNavbar />
                      <div className="main-container"> 
                        <ServiceRoomList list={serviceroom} callback={serviceRoomDeletecallback} />
                      </div>
                  </div>    
            </Route>

            <Route exact path="/hotelDashboard/details/:id">
                    <div className="wrapper">
                        <HotelNavbar />
                        <div className="main-container"> 
                            <ServiceBookingDetailsList list={serviceBookingDetails}/>
                        </div>
                    </div>
            </Route>

            <Route exact path="/hotelDashboard/roomedit/:id">
                  <div className="wrapper">
                          <HotelNavbar />
                        <div className="main-container">
                        <ServiceEditRoom callback={serviceEditRoom} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/hotelDashboard/showhotelallboking">
                <div className="wrapper">
                        <HotelNavbar />
                      <div className="main-container"> 
                        <ServiceBookingList list={servicebooking} callbackD={serviceBookingDetailscallback} callback={serviceBookingDeletecallback} />
                      </div>
                </div>
            </Route>

            <Route exact path="/hotelDashboard/room-book-pending">
                  <div className="wrapper">
                          <HotelNavbar />
                      <div className="main-container"> 
                        <ServicePendingBookingList list={servicependingbooking} callbackA={servicePendingBookingApprovecallback} callbackD={servicePendingBookingDeclinecallback} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/hotelDashboard/checkhotelreview">
                    <div className="wrapper">
                          <HotelNavbar />
                        <div className="main-container">
                            <ServiceReviewList list={servicereview} />
                        </div>
                    </div> 
            </Route>

            <Route exact path="/hotelDashboard/hoteltransactionhistory">
                  <div className="wrapper">
                          <HotelNavbar />
                      <div className="main-container">
                        <ServiceTransactionList list={servicetransaction} />
                      </div>
                  </div>
            </Route>




  {/* ------------------------------------ Service Car Route -------------------------------------------------- */}

            <Route exact path="/carDashboard/index">
                    <div className="wrapper">
                        <CarNavbar />
                        <div className="main-container"> 
                            <CarHome/>
                        </div>
                    </div>      
            </Route>

            <Route exact path="/carDashboard/profile">
                    <div className="wrapper">

                        <CarNavbar />
                        <div className="main-container"> 
                            <CarProfile caridl = {carloginId} 
                            carnamel = {carloginName}
                            carphonel = {carloginPhone}
                            caremaill = {carloginEmail}
                            cartypel = {carloginType}
                            callback={carProfileUpdate} />  
                        </div>
                    </div>
            </Route>

            <Route exact path="/carDashboard/addcar">
                  <div className="wrapper">
                          <CarNavbar />
                        <div className="main-container">
                           <ServiceAddCar callback={serviceAddCar} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/carDashboard/caredit/:id">
                  <div className="wrapper">
                          <CarNavbar />
                        <div className="main-container">
                        <ServiceEditCar callback={serviceEditCar} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/carDashboard/managecar">
                  <div className="wrapper"> 
                          <CarNavbar />
                        <div className="main-container"> 
                        <ServiceCarManageList list={servicecarmanage} callback={serviceCarManageDeletecallback} />
                        </div>
                  </div>  
                </Route>

            <Route exact path="/carDashboard/car-booking-list">
                <div className="wrapper">
                        <CarNavbar />
                      <div className="main-container"> 
                        <ServiceCarBookingList list={servicecarbooking} callbackD={serviceCarBookingDetailscallback} callback={serviceCarBookingDeletecallback} />
                      </div>
                </div>
            </Route>

            <Route exact path="/carDashboard/details/:id">
                    <div className="wrapper">
                        <CarNavbar />
                        <div className="main-container"> 
                            <ServiceCarBookingDetailsList list={serviceCarBookingDetails}/>
                        </div>
                    </div>
            </Route>

            <Route exact path="/carDashboard/car-pending-list">
                  <div className="wrapper">
                          <CarNavbar />
                      <div className="main-container"> 
                        <ServiceCarPendingBookingList list={servicecarpendingbooking} callbackA={serviceCarPendingBookingApprovecallback} callbackD={serviceCarPendingBookingDeclinecallback} />
                      </div>
                  </div>
            </Route>
            
            <Route exact path="/carDashboard/cartype">
                  <div className="wrapper">
                            <CarNavbar />
                      <div className="main-container">
                        <ServiceCarType list={serviceCarType} callback={carTypeCallback} /> 
                      </div>
                  </div>
            </Route>

            <Route exact path="/carDashboard/caravailability">
                   <div className="wrapper">
                              <CarNavbar />
                        <div className="main-container">
                            <ServiceCarAvailability list={serviceCarAvailability} callback={carAvailabilityCallback} /> 
                        </div>
                  </div>
            </Route>

            <Route exact path="/carDashboard/carsupport">
                  <div className="wrapper">
                        <CarNavbar />
                      <div className="main-container">

                        <ServiceCarSupport status="Support" callback={serviceCarSupport} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/carDashboard/checkcarreview">
                    <div className="wrapper">
                          <CarNavbar />
                        <div className="main-container">
                            <ServiceCarReviewList list={servicecarreview} />
                        </div>
                    </div> 
            </Route>

            <Route exact path="/carDashboard/cartransactionhistory">
                  <div className="wrapper">
                          <CarNavbar />
                      <div className="main-container">
                        <ServiceCarTransactionList list={servicecartransaction} />
                      </div>
                  </div>
            </Route>



    {/* --------------------------------------Service Flight Route ----------------------------------- */}

            <Route exact path="/flightDashboard/index">
                    <div className="wrapper">
                        <FlightNavbar />
                        <div className="main-container"> 
                            <FlightHome/>
                        </div>
                    </div>      
            </Route>

            <Route exact path="/flightDashboard/profile">
                    <div className="wrapper">
                        <FlightNavbar />
                        <div className="main-container"> 
                            <FlightProfile flightidl = {flightloginId} 
                            flightnamel = {flightloginName}
                            flightphonel = {flightloginPhone}
                            flightemaill = {flightloginEmail}
                            flighttypel = {flightloginType}
                            callback={flightProfileUpdate} />  
                        </div>
                    </div>
            </Route>

            <Route exact path="/flightDashboard/addflight">
                  <div className="wrapper">
                          <FlightNavbar />
                      <div className="main-container"> 
                        <ServiceAddFlight status="Flight" callback={serviceAddFlight} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/flightDashboard/flightedit/:id">
                  <div className="wrapper">
                          <FlightNavbar />
                        <div className="main-container">
                        <ServiceEditFlight callback={serviceEditFlight} />
                        </div>
                    </div>  
            </Route>

            <Route exact path="/flightDashboard/manageflight">
                  <div className="wrapper"> 
                          <FlightNavbar />
                        <div className="main-container"> 
                        <ServiceFlightManageList list={serviceflightmanage}  callback={serviceFlightManageDeletecallback} />
                        </div>
                  </div>  
            </Route>

            <Route exact path="/flightDashboard/details/:id">
                    <div className="wrapper">
                        <FlightNavbar />
                        <div className="main-container"> 
                            <ServiceFlightBookingDetailsList list={serviceFlightBookingDetails}/>
                        </div>
                    </div>
            </Route>
               
            <Route exact path="/flightDashboard/flight-booking-list">
                <div className="wrapper">
                        <FlightNavbar />
                      <div className="main-container"> 
                        <ServiceFlightBookingList list={serviceflightbooking} callbackD={serviceFlightBookingDetailscallback} callback={serviceFlightBookingDeletecallback} />
                      </div>
                </div>
            </Route>

            <Route exact path="/flightDashboard/flight-pending-list">
                  <div className="wrapper">
                          <FlightNavbar />
                      <div className="main-container"> 
                        <ServiceFlightPendingBookingList list={serviceflightpendingbooking} callbackA={serviceFlightPendingBookingApprovecallback} callbackD={serviceFlightPendingBookingDeclinecallback} />
                      </div>
                  </div>
            </Route>

            <Route exact path="/flightDashboard/flighttype">
                  <div className="wrapper">
                            <FlightNavbar />
                      <div className="main-container">
                        <ServiceFlightType list={serviceFlightType} callback={flightTypeCallback} /> 
                      </div>
                  </div>
            </Route>

            <Route exact path="/flightDashboard/flightavailability">
                   <div className="wrapper">
                              <FlightNavbar />
                        <div className="main-container">
                            <ServiceFlightAvailability list={serviceFlightAvailability} callback={flightAvailabilityCallback} /> 
                        </div>
                  </div>
            </Route>

            <Route exact path="/flightDashboard/checkflightreview">
                    <div className="wrapper">
                          <FlightNavbar />
                        <div className="main-container">
                            <ServiceFlightReviewList list={serviceflightreview} />
                        </div>
                    </div> 
            </Route>

            <Route exact path="/flightDashboard/flighttransactionhistory">
                  <div className="wrapper">
                          <FlightNavbar />
                      <div className="main-container">
                        <ServiceFlightTransactionList list={serviceflighttransaction} />
                      </div>
                  </div>
            </Route>


            <Route exact path="/flightDashboard/flightsupport">
                  <div className="wrapper">
                        <FlightNavbar />
                    <div className="main-container"> 
                        <ServiceFlightSupport status="Support" callback={serviceFlightSupport} />
                    </div>
                  </div>  
            </Route>
    
{/* Registration, Hotel, Car, Flight ----------------------------------------------Service Route END */}




        </Switch>
    </Router>
);
}



export default App;
