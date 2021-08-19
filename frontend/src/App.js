import { useState } from "react";
import AdminNavbar from "./adminComponents/AdminNavbar";
import AdminNavbar2 from "./adminComponents/AdminNavbar2";
import { useFetch } from './adminComponents/useFetch';


import AdminHome from "./adminComponents/AdminHome";

import Login from "./loginComponents/Login";

import AdminProfile from "./adminComponents/AdminProfile";

import AdminAdminList from "./adminComponents/AdminAdminList";

import AdminAddEmployee from "./adminComponents/AdminAddEmployee";
import AdminEmployeeList from "./adminComponents/AdminEmployeeList";
import AdminUserList from "./adminComponents/AdminUserList";
import AdminUserDetailsList from "./adminComponents/AdminUserDetailsList";

import AdminHotelADList from "./adminComponents/AdminHotelADList";
import AdminHotelList from "./adminComponents/AdminHotelList";
import AdminHotelBookingsList from "./adminComponents/AdminHotelBookingsList";

import AdminTransportADList from "./adminComponents/AdminTransportADList";
import AdminCarList from "./adminComponents/AdminCarList";
import AdminFlightList from "./adminComponents/AdminFlightList";
import AdminCarBookingsList from "./adminComponents/AdminCarBookingsList";
import AdminFlightBookingsList from "./adminComponents/AdminFlightBookingsList";

import AdminPlaceADList from "./adminComponents/AdminPlaceADList";
import AdminPlaceList from "./adminComponents/AdminPlaceList";

import AdminPackageADList from "./adminComponents/AdminPackageADList";
import AdminPackageList from "./adminComponents/AdminPackageList";
import AdminPackageBookingsList from "./adminComponents/AdminPackageBookingsList";
import AdminPackageStatus from "./adminComponents/AdminPackageStatus";


import AdminIncomeStatementList from "./adminComponents/AdminIncomeStatementList";
import AdminTransactionList from "./adminComponents/AdminTransactionList";
import AdminSalaryADList from "./adminComponents/AdminSalaryADList";


import AdminSupportList from "./adminComponents/AdminSupportList";


import AdminPolicy from "./adminComponents/AdminPolicy";
import AdminPolicyForm from "./adminComponents/AdminPolicyForm";


import AdminGuidelines from "./adminComponents/AdminGuidelines";
import AdminGuidelinesForm from "./adminComponents/AdminGuidelinesForm";

import AdminAbout from "./adminComponents/AdminAbout";
import AdminAboutForm from "./adminComponents/AdminAboutForm";

import 'font-awesome/css/font-awesome.min.css';




import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {


// Show all employees by admin
    const [adminEmployee, setAdminEmployees] = useState([]);
    const url = 'http://127.0.0.1:8000/api/admin/all-employees';
    useFetch(url, setAdminEmployees);


// Show all Active employees by admin
    const [adminActiveEmployee, setAdminActiveEmployees] = useState([]);
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
    // const urlUD = 'http://127.0.0.1:8000/api/admin/all-users';
    // useFetch(urlUD, setAdminUserDetails);



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



// Show all Hotel Bookings by admin
    const [adminHotelBookings, setAdminHotelBookings] = useState([]);
    const urlHB = 'http://127.0.0.1:8000/api/admin/hotel-bookings';
    useFetch(urlHB, setAdminHotelBookings);


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


// Show all Car Bookings by admin
    const [adminCarBookings, setAdminCarBookings] = useState([]);
    const urlCB = 'http://127.0.0.1:8000/api/admin/car-bookings';
    useFetch(urlCB, setAdminCarBookings);

// Show all Flight Bookings by admin
    const [adminFlightBookings, setAdminFlightBookings] = useState([]);
    const urlCF = 'http://127.0.0.1:8000/api/admin/flight-bookings';
    useFetch(urlCF, setAdminFlightBookings);


// Show Pending Places by admin
    const [adminPlaceAD, setAdminPlaceAD] = useState([]);
    const urlPAD = 'http://127.0.0.1:8000/api/admin/place-pending';
    useFetch(urlPAD, setAdminPlaceAD);


// Show all Places by admin
    const [adminPlace, setAdminPlace] = useState([]);
    const urlP = 'http://127.0.0.1:8000/api/admin/all-places';
    useFetch(urlP, setAdminPlace);



// Show Pending Packages by admin
    const [adminPackageAD, setAdminPackageAD] = useState([]);
    const urlPkAD = 'http://127.0.0.1:8000/api/admin/package-pending';
    useFetch(urlPkAD, setAdminPackageAD);


// Show all Packages by admin
    const [adminPackage, setAdminPackage] = useState([]);
    const urlPk = 'http://127.0.0.1:8000/api/admin/all-packages';
    useFetch(urlPk, setAdminPackage);

// Show all Package Bookings by admin
    const [adminPackageBookings, setAdminPackageBookings] = useState([]);
    const urlPkB = 'http://127.0.0.1:8000/api/admin/package-bookings';
    useFetch(urlPkB, setAdminPackageBookings);


// Package Status change by admin
    const [adminPackageAll, setAdminPackageAll] = useState([]);
    const urlPkS = 'http://127.0.0.1:8000/api/admin/package-status';
    useFetch(urlPkS, setAdminPackageAll);


// Income Statement by admin
    const [adminIncomeStatement, setadminIncomeStatement] = useState([]);
    const urlIS = 'http://127.0.0.1:8000/api/admin/income-statement';
    useFetch(urlIS, setadminIncomeStatement);

// Transaction History by admin
    const [adminTransaction, setAdminTransaction] = useState([]);
    const urlTH = 'http://127.0.0.1:8000/api/admin/transaction-history';
    useFetch(urlTH, setAdminTransaction);


// Show Pending Salary by admin
    const [adminSalaryAD, setAdminSalaryAD] = useState([]);
    const urlPS = 'http://127.0.0.1:8000/api/admin/pending-salary';
    useFetch(urlPS, setAdminSalaryAD);



// Show Support Messages by admin
    const [adminSupport, setAdminSupport] = useState([]);
    const urlS = 'http://127.0.0.1:8000/api/admin/support';
    useFetch(urlS, setAdminSupport);



//Show Policy Policy by Admin
    const [adminPolicy, setAdminPolicy] = useState([]);
    const urlPP = 'http://127.0.0.1:8000/api/admin/policy';
    useFetch(urlPP, setAdminPolicy);


//Show Guidelines by Admin
const [adminGuidelines, setAdminGuidelines] = useState([]);
const urlGL = 'http://127.0.0.1:8000/api/admin/guidelines';
useFetch(urlGL, setAdminGuidelines);


//Show About Policy by Admin
const [adminAbout, setAdminAbout] = useState([]);
const urlAA = 'http://127.0.0.1:8000/api/admin/about';
useFetch(urlAA, setAdminAbout);



//Google login data by Admin
const [google, setGoogle] = useState(false);

const googlef = (tf) => { 

    setGoogle(tf);
    console.log("Google login Status: "+google);

};



//store login data by Admin
const [loginId, setLoginId] = useState([]);
const [loginFirstname, setLoginFirstname] = useState([]);
const [loginLastname, setLoginLastname] = useState([]);
const [loginGender, setLoginGender] = useState([]);
const [loginEmail, setLoginEmail] = useState([]);
const [loginUsername, setLoginUsername] = useState([]);

//store login data by Admin
const loginIdf = ({id}) => { 

    if(id.type=="admin")
    {
        setLoginId(id.id);
        setLoginFirstname(id.firstname);
        setLoginLastname(id.lastname);
        setLoginGender(id.gender);
        setLoginEmail(id.email);
        setLoginUsername(id.username);
    }

};


// Profile update by admin
const adminProfileUpdate =async (newProfile) => { 

    const axios = require('axios').default;

    const status = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/admin/profile',
        //data: JSON.stringify(newUser)
        data:newProfile,
      });

      if (status)
      {
        alert("Profile Updated successfully");
        
        setLoginFirstname(newProfile.firstname);
        setLoginLastname(newProfile.lastname);
        setLoginGender(newProfile.gender);
        setLoginEmail(newProfile.email);
        setLoginUsername(newProfile.username);

        console.log(newProfile);
      }


};



// Add Employee by admin
    const adminAddEmployee = (newEmployee) => { 
        var answer = window.confirm("Add this Employee?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/add-employee',
                //data: JSON.stringify(newUser)
                data:newEmployee,
            });
            setAdminEmployees([...adminEmployee, newEmployee]);
            console.log(newEmployee);
        }
    };


// Delete an Employee by admin
    const adminEmployeeDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/employee/delete',
                data:{
                    id:id,
                }
            });

            const data = adminEmployee.filter((employee) => employee.id != id);
            setAdminEmployees(data);

            const dataA = adminActiveEmployee.filter((employee) => employee.id != id);
            setAdminActiveEmployees(dataA);
        }
    };

    // Delete an User by admin
    const adminUserDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {
                    
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
        }
    };

    

    // Show an User Details by admin
    const adminUserDetailsCallback = (id) => {
        const data = adminUser.filter((user) => user.id == id);
        setAdminUserDetails(data);
        console.log(data);
    };

    // Show an Employee Details by admin
    const adminEmployeeDetailsCallback = (id) => {
        const data = adminEmployee.filter((user) => user.id == id);
        setAdminUserDetails(data);
        console.log(data);
    };



    // Add Admin by admin
    const adminAddAdmin = (newAdmin) => { 
        var answer = window.confirm("Add this Admin?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/add-admin',
                //data: JSON.stringify(newUser)
                data:newAdmin,
            });
            newAdmin.image="admin.jpg";
            setAdminAdmins([...adminadmin, newAdmin]);
            console.log(newAdmin);
        }
    };


// Delete an Admin by admin
    const adminAdminDeleteCallback = (id) => {

        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {
                    
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
        }
    };


// Approve Hotel by admin
    const adminHotelApproveCallback = (id) => {

        var answer = window.confirm("Are you sure to Approve?");
        if (answer) {
                
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
        }
    };


// Decline Hotel by admin
    const adminHotelDeclineCallback = (id) => {

        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {
                
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
        }
    };


// Delete Hotel by admin
    const adminHotelDeleteCallback = (id) => {

        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

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
        }
    };


    // Approve Transport by admin
    const adminTransportApproveCallback = (id) => {

        var answer = window.confirm("Are you sure to Approve?");
        if (answer) {

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
        }
        
    };


// Decline Transport by admin
    const adminTransportDeclineCallback = (id) => {

        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {

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
        }
    };


// Delete Car by admin
    const adminCarDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

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
        }
    };


// Delete Flight by admin
    const adminFlightDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

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
        }
    };



    // Approve Place by admin
    const adminPlaceApproveCallback = (id) => {
        var answer = window.confirm("Are you sure to Approve?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/place/approve',
                data:{
                    id:id,
                }
            });

            const data = adminPlaceAD.filter((placeAD) => placeAD.id != id);
            const data2 = adminPlaceAD.filter((placeAD) => placeAD.id == id);

            setAdminPlaceAD(data);
            setAdminPlace([...adminPlace, ...data2]);
        }
    };


// Decline Place by admin
    const adminPlaceDeclineCallback = (id) => {

        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/place/decline',
                data:{
                    id:id,
                }
            });

            const data = adminPlaceAD.filter((placeAD) => placeAD.id != id);
            setAdminPlaceAD(data);
        }
    };


// Delete Place by admin
    const adminPlaceDeleteCallback = (id) => {

        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/place/delete',
                data:{
                    id:id,
                }
            });

            const data = adminPlace.filter((place) => place.id != id);
            setAdminPlace(data);
        }
    };




    // Approve Package by admin
    const adminPackageApproveCallback = (id) => {

        var answer = window.confirm("Are you sure to Approve?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/package/approve',
                data:{
                    id:id,
                }
                });

            const data = adminPackageAD.filter((packageAD) => packageAD.id != id);
            const data2 = adminPackageAD.filter((packageAD) => packageAD.id == id);

            setAdminPackageAD(data);
            setAdminPackage([...adminPackage, ...data2]);
        }
    };


// Decline Package by admin
    const adminPackageDeclineCallback = (id) => {
        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/package/decline',
                data:{
                    id:id,
                }
                });

            const data = adminPackageAD.filter((packageAD) => packageAD.id != id);
            setAdminPackageAD(data);
        }
    };


// Delete Package by admin
    const adminPackageDeleteCallback = (id) => {

        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/package/delete',
                data:{
                    id:id,
                }
                });

            const data = adminPackage.filter((packageD) => packageD.id != id);
            setAdminPackage(data);
        }
    };

// Package Status change by admin
    const adminPackageStatusCallback = ({place, status}) => {

        var answer = window.confirm("Are you sure to update?");
        if (answer) {

        const axios = require('axios').default;

        console.log(place);

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/package-status',
            data:{
                place: place,
                status: status,
            }
            });

            alert("Updated successfully");
        }

        // const data = adminPackage.filter((packageD) => packageD.id != id);
        // setAdminPackage(data);
    };
    




    // Approve Salary by admin
    const adminSalaryApproveCallback = (id) => {

        var answer = window.confirm("Are you sure to approve?");
        if (answer) {

            const axios = require('axios').default;
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/salary/approve',
                data:{
                    id:id,
                }
            });

            const data = adminSalaryAD.filter((salaryAD) => salaryAD.id != id);
            setAdminSalaryAD(data);

            alert("Salary Approved successfully");

        }
        else {
            //some code
        }

        

    };


    // Decline Salary by admin
    const adminSalaryDeclineCallback = (id) => {
        var answer = window.confirm("Are you sure to Decline?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/salary/decline',
                data:{
                    id:id,
                }
            });

            const data = adminSalaryAD.filter((salaryAD) => salaryAD.id != id);
            setAdminSalaryAD(data);
        }
    };



    // Delete Support by admin
    const adminSupportDeleteCallback = (id) => {
        var answer = window.confirm("Are you sure to Delete?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/support/delete',
                data:{
                    id:id,
                }
            });

            const data = adminSupport.filter((support) => support.id != id);
            setAdminSupport(data);
        }
    };



    // Edit Policy by admin
    const adminPolicyEditCallback = (policy) => {
        var answer = window.confirm("Are you sure?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/edit-policy',
                data: policy
            });

            setAdminPolicy(policy);

            console.log(policy);
        }
    };


       // Edit Guidelines by admin
       const adminGuidelinesEditCallback = (guidelines) => {

        var answer = window.confirm("Are you sure?");
        if (answer) {
                
            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/edit-guidelines',
                data: guidelines
            });

            setAdminGuidelines(guidelines);

            console.log(guidelines);
        }
    };


       // Edit About Us by admin
       const adminAboutEditCallback = (about) => {
        var answer = window.confirm("Are you sure?");
        if (answer) {

            const axios = require('axios').default;

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/admin/edit-about',
                data: about
            });

            setAdminAbout(about);

            console.log(about);
        }
    };



  return (
    <Router>
            {/* <Navbar /> */}
            <Switch>


                <Route exact path="/login">
                    <div className="login-wrapper">

                        <Login callback={loginIdf} callbackGoogle = {googlef}/>

                    </div>
                    
                </Route>

          
                <Route exact path="/admin/home">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminHome/>
                        </div>

                    </div>
                    
                </Route>

                
                <Route exact path="/admin/add-admin">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAddEmployee status="Admin" callback={adminAddAdmin}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-admins">

                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAdminList list={adminadmin} list2={adminEmployee} callback={adminAdminDeleteCallback} />
                        </div>

                    </div>

                </Route>

                <Route exact path="/admin/all-users">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminUserList list={adminUser}  callbackD={adminUserDetailsCallback} callback={adminUserDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/active-users">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminUserList list={adminActiveUser} callbackD={adminUserDetailsCallback} callback={adminUserDeleteCallback} />
                        </div>

                    </div>
                </Route>


                <Route exact path="/admin/user/details/:id">
                    <div className="wrapper">
                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminUserDetailsList list={adminUserDetails}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/add-employee">


                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAddEmployee status="Employee" callback={adminAddEmployee} />
                        </div>

                    </div>
                   
                </Route>

                <Route exact path="/admin/all-employees">

                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminEmployeeList list={adminEmployee} callback={adminEmployeeDeleteCallback} />
                        </div>

                    </div>
                    
                </Route>

                <Route exact path="/admin/active-employees">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminEmployeeList list={adminActiveEmployee} callback={adminEmployeeDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/hotels-pending">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminHotelADList list={adminHotelAD} callbackA={adminHotelApproveCallback} callbackD={adminHotelDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-hotels">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminHotelList list={adminHotel} callback={adminHotelDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/hotel-bookings">adminHotelBookings
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminHotelBookingsList list={adminHotelBookings} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/transports-pending">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminTransportADList list={adminTransportAD} callbackA={adminTransportApproveCallback} callbackD={adminTransportDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-cars">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminCarList list={adminCar} callbackA={adminCarDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-flight">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminFlightList list={adminFlight} callback={adminFlightDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/car-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminCarBookingsList list={adminCarBookings} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/flight-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminFlightBookingsList list={adminFlightBookings} />
                        </div>

                    </div>
                </Route>




                <Route exact path="/admin/package-pending">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPackageADList list={adminPackageAD} callbackA={adminPackageApproveCallback} callbackD={adminPackageDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-packages">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPackageList list={adminPackage} callback={adminPackageDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/package-bookings">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPackageBookingsList list={adminPackageBookings} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/package-status">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPackageStatus list={adminPackageAll} callback={adminPackageStatusCallback} /> 
                        </div>

                    </div>
                </Route>




                <Route exact path="/admin/place-pending">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPlaceADList list={adminPlaceAD} callbackA={adminPlaceApproveCallback} callbackD={adminPlaceDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/all-places">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPlaceList list={adminPlace} callback={adminPlaceDeleteCallback} />
                        </div>

                    </div>
                </Route>

                
                <Route exact path="/admin/income-statement">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminIncomeStatementList list={adminIncomeStatement}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/transaction-history">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminTransactionList list={adminTransaction}/>
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/pending-salary">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminSalaryADList list={adminSalaryAD} callbackA={adminSalaryApproveCallback} callbackD={adminSalaryDeclineCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/support">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminSupportList list={adminSupport} callback={adminSupportDeleteCallback} />
                        </div>

                    </div>
                </Route>

                <Route exact exact path="/admin/policy">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPolicy list={adminPolicy} />
                        </div>

                    </div>
                </Route>

                <Route exact path="/admin/policy/edit">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminPolicyForm callback={adminPolicyEditCallback} />
                        </div>

                    </div>
                </Route>


                <Route exact exact path="/admin/guidelines">
                    <div className="wrapper">
                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminGuidelines list={adminGuidelines} />
                        </div>
                    </div>
                </Route>


                <Route exact path="/admin/guidelines/edit">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminGuidelinesForm callback={adminGuidelinesEditCallback} />
                        </div>

                    </div>
                </Route>



                <Route exact path="/admin/about">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAbout list={adminAbout} />
                        </div>

                    </div>
                </Route>


                <Route exact path="/admin/about/edit">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminAboutForm callback={adminAboutEditCallback} />
                        </div>

                    </div>
                </Route>



                <Route exact path="/admin/profile">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            <AdminProfile idl = {loginId} 
                            firstnamel = {loginFirstname}
                            lastnamel = {loginLastname}
                            genderl = {loginGender}
                            emaill = {loginEmail}
                            usernamel = {loginUsername} 
                            callback={adminProfileUpdate} />
                        </div>

                    </div>
                </Route>


                {/* <Route exact path="/login">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route> */}

                

                {/* <Route path='/edit/:id' children={<AddUser status='edit'/>}></Route> */}
                <Route path="*">
                    <div className="wrapper">

                        <AdminNavbar2 callbackGoogle ={googlef} googletf = {google}/>
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
