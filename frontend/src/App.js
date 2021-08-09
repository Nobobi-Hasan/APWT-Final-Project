import { useState } from "react";
import EmployeeNavbar from "./employeeComponents/EmployeeNavbar";
import { useFetch } from './employeeComponents/useFetch';
import EmployeeAddSalary from "./employeeComponents/EmployeeAddSalary";
import EmployeeAddStatement from "./employeeComponents/EmployeeAddStatement";
import EmployeeAddTransaction from "./employeeComponents/EmployeeAddTransaction";
import EmployeeSalaryList from "./employeeComponents/EmployeeSalaryList";
import EmployeeStatementList from "./employeeComponents/EmployeeStatementList";
import EmployeeTransactionList from "./employeeComponents/EmployeeTransactionList";

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
    const employeeAddStatement = (newEmployeeStatement) => { 

      const axios = require('axios').default;

      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/employee/statementAdd',
          data:newEmployeeStatement,
        });
        setEmployeeStatement([...employeestatement, newEmployeeStatement]);
          console.log(newEmployeeStatement);
    };

    //show Statement to employee
    const [employeestatement, setEmployeeStatement] = useState([]);
    const url2 = 'http://127.0.0.1:8000/api/employee/statement';
    useFetch(url2, setEmployeeStatement);

    //add transaction by employee
    const employeeAddTransaction = (newEmployeeTransaction) => { 

      const axios = require('axios').default;

      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/employee/transactionAdd',
          data:newEmployeeTransaction,
        });
        setEmployeeTransaction([...employeetransaction, newEmployeeTransaction]);
          console.log(newEmployeeTransaction);
    };

      //show Transaction history to employee
      const [employeetransaction, setEmployeeTransaction] = useState([]);
      const url3 = 'http://127.0.0.1:8000/api/employee/transaction';
      useFetch(url3, setEmployeeTransaction);

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
                    <div>
                      <EmployeeStatementList list={employeestatement} />
                    </div>
        </Route>

        <Route path="/employee/transactionAdd">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeAddTransaction status="Transaction" callback={employeeAddTransaction} />
                    </div>
        </Route>

        <Route path="/employee/transaction">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeTransactionList list={employeetransaction} />
                    </div>
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
