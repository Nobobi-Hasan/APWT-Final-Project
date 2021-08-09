import { useState } from "react";
import AdminNavbar from "./adminComponents/AdminNavbar";
import { useFetch } from './adminComponents/useFetch';
import AdminAddEmployee from "./adminComponents/AdminAddEmployee";
import EmployeeList from "./adminComponents/EmployeeList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {


    const [myemployee, setEmployees] = useState([]);
    const url = 'http://127.0.0.1:8000/api/admin/all-employees';
    useFetch(url, setEmployees);


    const adminAddEmployee = (newEmployee) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/add-employee',
            //data: JSON.stringify(newUser)
            data:newEmployee,
          });
          setEmployees([...myemployee, newEmployee]);
          console.log(newEmployee);
    };

    const adminEmployeeDeleteCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/admin/employee/delete',
            data:{
                id:id,
            }
          });

        const data = myemployee.filter((employee) => employee.id != id);
        setEmployees(data);
    };


  return (
    <Router>
            {/* <Navbar /> */}
            <Switch>
          
                <Route exact path="/admin">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                
                <Route path="/admin/add-admin">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/all-admins">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/all-users">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/active-users">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/add-employee">
                    <AdminNavbar />
                    <div>
                        <AdminAddEmployee status="Employee" callback={adminAddEmployee} />
                    </div>
                </Route>

                <Route path="/admin/all-employees">
                    <AdminNavbar />
                    <div>
                        <EmployeeList list={myemployee} callback={adminEmployeeDeleteCallback} />
                    </div>
                </Route>

                <Route path="/admin/active-employees">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/hotels-pending">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/all-hotels">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/hotel-bookings">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/transports-pending">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/all-cars">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/all-flight">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/car-bookings">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/flight-bookings">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/place-pending">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/all-places">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                
                <Route path="/admin/income-statement">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/transaction-history">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/pending-salary">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/support">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/policy">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/guidelines">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                <Route path="/admin/about">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>


                <Route path="/admin/profile">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>


                <Route path="/login">
                    <AdminNavbar />
                    <div>
                        {/* <UserList list={myuser} callback={deleteCallback} /> */}
                    </div>
                </Route>

                

                {/* <Route path='/edit/:id' children={<AddUser status='edit'/>}></Route> */}
                <Route path="*">
                    <h3>404 not found</h3>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
