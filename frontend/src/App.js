import { useState } from "react";
import AdminNavbar from "./adminComponents/AdminNavbar";
import AdminNavbar2 from "./adminComponents/AdminNavbar2";
import { useFetch } from './adminComponents/useFetch';

import AdminAddEmployee from "./adminComponents/AdminAddEmployee";
import AdminEmployeeList from "./adminComponents/AdminEmployeeList";
import AdminUserList from "./adminComponents/AdminUserList";
import AdminUserDetailsList from "./adminComponents/AdminUserDetailsList";

import AdminHotelADList from "./adminComponents/AdminHotelADList";
import AdminHotelList from "./adminComponents/AdminHotelList";

import AdminTransportADList from "./adminComponents/AdminTransportADList";
import AdminCarList from "./adminComponents/AdminCarList";
import AdminFlightList from "./adminComponents/AdminFlightList";

import 'font-awesome/css/font-awesome.min.css';


import AdminAdminList from "./adminComponents/AdminAdminList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

// Show all employees by admin
    const [adminemployee, setAdminEmployees] = useState([]);
    const url = 'http://127.0.0.1:8000/api/admin/all-employees';
    useFetch(url, setAdminEmployees);


// Show all Active employees by admin
    const [adminActiveemployee, setAdminActiveEmployees] = useState([]);
    const urlA = 'http://127.0.0.1:8000/api/admin/active-employees';
    useFetch(urlA, setAdminActiveEmployees);


// Show all users by admin
    const [adminUser, setAdminUser] = useState([]);
    const urlU1 = 'http://127.0.0.1:8000/api/admin/all-users';
    useFetch(urlU1, setAdminUser);


// Show all Active users by admin
    const [adminActiveUser, setAdminActiveUser] = useState([]);
    const urlUA = 'http://127.0.0.1:8000/api/admin/active-users';
    useFetch(urlUA, setAdminActiveUser);


// Show user details by admin
    const [adminUserDetails, setAdminUserDetails] = useState([]);
    const urlUD = 'http://127.0.0.1:8000/api/admin/all-users';
    useFetch(urlUD, setAdminUserDetails);



// Show all Admins by admin
    const [adminadmin, setAdminAdmins] = useState([]);
    const url2 = 'http://127.0.0.1:8000/api/admin/all-admins';
    useFetch(url2, setAdminAdmins);


// Show Pending Hotels by admin
    const [adminHotelAD, setAdminHotelAD] = useState([]);
    const url3 = 'http://127.0.0.1:8000/api/admin/hotels-pending';
    useFetch(url3, setAdminHotelAD);


// Show all Hotels by admin
    const [adminHotel, setAdminHotel] = useState([]);
    const url4 = 'http://127.0.0.1:8000/api/admin/all-hotels';
    useFetch(url4, setAdminHotel);


// Show Pending Transports by admin
    const [adminTransportAD, setAdminTransportAD] = useState([]);
    const url5 = 'http://127.0.0.1:8000/api/admin/transports-pending';
    useFetch(url5, setAdminTransportAD);

// Show all Cars by admin
    const [adminCar, setAdminCar] = useState([]);
    const url6 = 'http://127.0.0.1:8000/api/admin/all-cars';
    useFetch(url6, setAdminCar);

// Show all Flights by admin
    const [adminFlight, setAdminFlight] = useState([]);
    const url7 = 'http://127.0.0.1:8000/api/admin/all-flight';
    useFetch(url7, setAdminFlight);


// Add Employee by admin
    const adminAddEmployee = (newEmployee) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/add-employee',
            //data: JSON.stringify(newUser)
            data:newEmployee,
          });
          setAdminEmployees([...adminemployee, newEmployee]);
          console.log(newEmployee);
    };


// Delete an Employee by admin
    const adminEmployeeDeleteCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/employee/delete',
            data:{
                id:id,
            }
          });

        const data = adminemployee.filter((employee) => employee.id != id);
        setAdminEmployees(data);

        const dataA = adminActiveemployee.filter((employee) => employee.id != id);
        setAdminActiveEmployees(dataA);
    };

    // Delete an User by admin
    const adminUserDeleteCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/user/delete',
            data:{
                id:id,
            }
          });

        const data = adminUser.filter((user) => user.id != id);
        setAdminUser(data);

        const dataA = adminActiveUser.filter((user) => user.id != id);
        setAdminActiveUser(dataA);
    };

    

    // Show an User Details by admin
    const adminUserDetailsCallback = (id) => {

        const data = adminUser.filter((user) => user.id == id);
        setAdminUserDetails(data);
        console.log(data);
    };


// Delete an Admin by admin
    const adminAdminDeleteCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/admin/delete',
            data:{
                id:id,
            }
          });

        const data = adminadmin.filter((admin) => admin.id != id);
        setAdminAdmins(data);
    };


// Approve Hotel by admin
    const adminHotelApproveCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/hotel/approve',
            data:{
                id:id,
            }
          });

        const data = adminHotelAD.filter((hotelAD) => hotelAD.id != id);
        const data2 = adminHotelAD.filter((hotelAD) => hotelAD.id == id);
        console.log(data);
        console.log(data2);
        setAdminHotelAD(data);
        setAdminHotel([...adminHotel, ...data2]);
    };


// Decline Hotel by admin
    const adminHotelDeclineCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/hotel/decline',
            data:{
                id:id,
            }
          });

        const data = adminHotelAD.filter((hotelAD) => hotelAD.id != id);
        setAdminHotelAD(data);
    };


// Delete Hotel by admin
    const adminHotelDeleteCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/hotel/delete',
            data:{
                id:id,
            }
          });

        const data = adminHotel.filter((hotel) => hotel.id != id);
        setAdminHotel(data);
    };


    // Approve Transport by admin
    const adminTransportApproveCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/transport/approve',
            data:{
                id:id,
            }
          });

        const data = adminTransportAD.filter((transportAD) => transportAD.id != id);
        const data2 = adminTransportAD.filter((transportAD) => transportAD.id == id);
        const data3 = {...data2};
        // const type = data2.type;
        console.log(data3[0]['type']);
        const type = data3[0]['type'];
        setAdminTransportAD(data);

        if(type == "Car"){
            setAdminCar([...adminCar, ...data2]);
        }
        else if(type == "Flight"){
            setAdminFlight([...adminFlight, ...data2]);
        }
        
        
    };


// Decline Transport by admin
    const adminTransportDeclineCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/transport/decline',
            data:{
                id:id,
            }
          });

        const data = adminTransportAD.filter((transportAD) => transportAD.id != id);
        setAdminTransportAD(data);
    };


// Delete Car by admin
    const adminCarDeleteCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/car/delete',
            data:{
                id:id,
            }
          });

        const data = adminCar.filter((car) => car.id != id);
        setAdminCar(data);
    };


// Delete Flight by admin
    const adminFlightDeleteCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/flight/delete',
            data:{
                id:id,
            }
          });

        const data = adminFlight.filter((car) => car.id != id);
        setAdminFlight(data);
    };



  return (
    <Router>
            {/* <Navbar /> */}
            <Switch>
          
                <Route exact path="/admin">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                    
                </Route>

                
                <Route path="/admin/add-admin">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-admins">

                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminAdminList list={adminadmin} list2={adminemployee} callback={adminAdminDeleteCallback} />
                        </div>

                    </div>

                </Route>

                <Route path="/admin/all-users">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminUserList list={adminUser}  callbackD={adminUserDetailsCallback} callback={adminUserDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route path="/admin/active-users">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminUserList list={adminActiveUser} callbackD={adminUserDetailsCallback} callback={adminUserDeleteCallback} />
                        </div>

                    </div>
                </Route>


                <Route exact path="/admin/user/details/:id">
                    <div className="wrapper">
                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminUserDetailsList list={adminUserDetails}/>
                        </div>

                    </div>
                </Route>

                <Route path="/admin/add-employee">


                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminAddEmployee status="Employee" callback={adminAddEmployee} />
                        </div>

                    </div>
                   
                </Route>

                <Route path="/admin/all-employees">

                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminEmployeeList list={adminemployee} callback={adminEmployeeDeleteCallback} />
                        </div>

                    </div>
                    
                </Route>

                <Route path="/admin/active-employees">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminEmployeeList list={adminActiveemployee} callback={adminEmployeeDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route path="/admin/hotels-pending">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminHotelADList list={adminHotelAD} callbackA={adminHotelApproveCallback} callbackD={adminHotelDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-hotels">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminHotelList list={adminHotel} callback={adminHotelDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route path="/admin/hotel-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/transports-pending">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminTransportADList list={adminTransportAD} callbackA={adminTransportApproveCallback} callbackD={adminTransportDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-cars">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminCarList list={adminCar} callbackA={adminCarDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-flight">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <AdminFlightList list={adminFlight} callback={adminFlightDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route path="/admin/car-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/flight-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>




                <Route path="/admin/package-pending">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-packages">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/package-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/package-status">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>




                <Route path="/admin/place-pending">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-places">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                
                <Route path="/admin/income-statement">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/transaction-history">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/pending-salary">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/support">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/policy">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/guidelines">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/about">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>


                <Route path="/admin/profile">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>


                <Route path="/login">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                

                {/* <Route path='/edit/:id' children={<AddUser status='edit'/>}></Route> */}
                <Route path="*">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            <h3>404 not found</h3>
                        </div>

                    </div>
                    
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
