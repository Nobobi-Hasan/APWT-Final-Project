import { useState } from "react";
import AdminNavbar from "./adminComponents/AdminNavbar";
import AdminNavbar2 from "./adminComponents/AdminNavbar2";
import { useFetch } from './adminComponents/useFetch';
import AdminAddEmployee from "./adminComponents/AdminAddEmployee";
import AdminEmployeeList from "./adminComponents/AdminEmployeeList";


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
                            <AdminAdminList list={adminadmin} callback={adminAdminDeleteCallback} />
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
                            
                        </div>

                    </div>
                </Route>

                <Route path="/admin/all-hotels">
                    <div className="wrapper">

                        <AdminNavbar2 />
                        <div className="main-container"> 
                            
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
