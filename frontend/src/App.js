import { useState } from "react";
import AdminNavbar from "./adminComponents/AdminNavbar";
import AdminNavbar2 from "./adminComponents/AdminNavbar2";
import { useFetch } from './adminComponents/useFetch';
import AdminAddEmployee from "./adminComponents/AdminAddEmployee";
import AdminEmployeeList from "./adminComponents/AdminEmployeeList";
import AdminHotelADList from "./adminComponents/AdminHotelADList";
import AdminHotelList from "./adminComponents/AdminHotelList";

import 'font-awesome/css/font-awesome.min.css';


import AdminAdminList from "./adminComponents/AdminAdminList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

// Show all employees by admin
    const [adminemployee, setAdminEmployees] = useState([]);
    const url = 'http://127.0.0.1:8000/api/admin/all-employees';
    useFetch(url, setAdminEmployees);

// Show all Admins by admin
    const [adminadmin, setAdminAdmins] = useState([]);
    const url2 = 'http://127.0.0.1:8000/api/admin/all-admins';
    useFetch(url2, setAdminAdmins);


// Show all Pending Hotels by admin
    const [adminHotelAD, setAdminHotelAD] = useState([]);
    const url3 = 'http://127.0.0.1:8000/api/admin/hotels-pending';
    useFetch(url3, setAdminHotelAD);



// Show all Hotels by admin
    const [adminHotel, setAdminHotel] = useState([]);
    const url4 = 'http://127.0.0.1:8000/api/admin/all-hotels';
    useFetch(url4, setAdminHotel);





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
        setAdminHotelAD(data);
        
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
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/active-users">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
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
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-cars">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-flight">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
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
