//import { useState } from "react";
import EmployeeNavbar from "./employeeComponents/EmployeeNavbar";
//import { useFetch } from './employeeComponents/useFetch';
import EmployeeAddSalary from "./employeeComponents/EmployeeAddSalary";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const employeeAddSalary = (newSalary) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/salary',
        //data: JSON.stringify(newUser)
        data:newSalary,
      });
};


  return (
    <Router>
        {/* <EmployeeNavbar /> */}
        <Switch>
            
        <Route exact path="/employee">
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
                    <div>
                    <EmployeeAddSalary status="Salary" callback={employeeAddSalary} />
                    </div>
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
