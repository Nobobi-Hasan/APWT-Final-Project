import { useState } from "react";
import EmployeeNavbar from "./employeeComponents/EmployeeNavbar";
import { useFetch } from './employeeComponents/useFetch';
import EmployeeAddSalary from "./employeeComponents/EmployeeAddSalary";
import EmployeeAddStatement from "./employeeComponents/EmployeeAddStatement";
import EmployeeAddTransaction from "./employeeComponents/EmployeeAddTransaction";
import EmployeeSalaryList from "./employeeComponents/EmployeeSalaryList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  //Add Salary by employee
  const employeeAddSalary = (newEmployeeSalary) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/salary',
        data:newEmployeeSalary,
      });
      setEmployeeSalary([...employeesalary, newEmployeeSalary]);
          console.log(newEmployeeSalary);
};
//show salary to employee
const [employeesalary, setEmployeeSalary] = useState([]);
const url = 'http://127.0.0.1:8000/api/employee/salary/List';
useFetch(url, setEmployeeSalary);

//add statement by employee
const employeeAddStatement = (newIncome) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/statementAdd',
      data:newIncome,
    });
};

//add transaction by employee
const employeeAddTransaction = (newTransaction) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/transactionAdd',
      //data: JSON.stringify(newUser)
      data:newTransaction,
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

        <Route exact path="/employee/salary">
                    <EmployeeNavbar />
                    <div>
                    <EmployeeAddSalary status="Salary" callback={employeeAddSalary} />
                    </div>
        </Route>

        <Route exact path="/employee/salary/List">
                    <EmployeeNavbar />
                    <div>
                    <EmployeeSalaryList list={employeesalary} />
                    </div>
        </Route>

        <Route path="/employee/statementAdd">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeAddStatement status="Statement" callback={employeeAddStatement} />
                    </div>
        </Route>

        <Route path="/employee/statement">
                    <EmployeeNavbar />
        </Route>

        <Route path="/employee/transactionAdd">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeAddTransaction status="Transaction" callback={employeeAddTransaction} />
                    </div>
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
