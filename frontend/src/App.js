//import { useState } from "react";
import EmployeeNavbar from "./employeeComponents/EmployeeNavbar";
//import { useFetch } from './employeeComponents/useFetch';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        {/* <EmployeeNavbar /> */}
        <Switch>
            
        <Route path="/employee">
                    <EmployeeNavbar />
                    <h2>Welcome to the  Employee Dashboard...</h2>
        </Route>

        <Route path="/employee/userList">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/packageAdd">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/package">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/placeAdd">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/place">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/gallery">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/galleryManage">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/salary">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/salary/List">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/satementAdd">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/statement">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/transactionAdd">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/transaction">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/advertisement">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/promo">
                    <EmployeeNavbar />
        </Route>

        </Switch>
    </Router>    
  );
}

export default App;
