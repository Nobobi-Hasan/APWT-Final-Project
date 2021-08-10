import { useState } from "react";
import EmployeeNavbar from "./employeeComponents/EmployeeNavbar";
import { useFetch } from './employeeComponents/useFetch';
import EmployeeAddSalary from "./employeeComponents/EmployeeAddSalary";
import EmployeeAddStatement from "./employeeComponents/EmployeeAddStatement";
import EmployeeAddTransaction from "./employeeComponents/EmployeeAddTransaction";
import EmployeeSalaryList from "./employeeComponents/EmployeeSalaryList";
import EmployeeStatementList from "./employeeComponents/EmployeeStatementList";
import EmployeeTransactionList from "./employeeComponents/EmployeeTransactionList";
import EmployeeReviewList from "./employeeComponents/EmployeeReviewList";

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
    const emp1 = 'http://127.0.0.1:8000/api/employee/salary/List';
    useFetch(emp1, setEmployeeSalary);

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
    const emp2 = 'http://127.0.0.1:8000/api/employee/statement';
    useFetch(emp2, setEmployeeStatement);

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
      const emp3 = 'http://127.0.0.1:8000/api/employee/transaction';
      useFetch(emp3, setEmployeeTransaction);

       //show user review to employee
       const [employeereview, setEmployeeReview] = useState([]);
       const emp4 = 'http://127.0.0.1:8000/api/employee/review';
       useFetch(emp4, setEmployeeReview);

  return (
    <Router>
        {/* <EmployeeNavbar /> */}
        <Switch>
            
        <Route exact path="/employee">
                    <EmployeeNavbar />
                    <h2>Welcome to the  Employee Dashboard...</h2>
        </Route>

        <Route exact path="/employee/userList">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/packageAdd">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/package">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/placeAdd">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/place">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/gallery">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/galleryManage">
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

        <Route exact path="/employee/statementAdd">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeAddStatement status="Statement" callback={employeeAddStatement} />
                    </div>
        </Route>

        <Route exact path="/employee/statement">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeStatementList list={employeestatement} />
                    </div>
        </Route>

        <Route exact path="/employee/transactionAdd">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeAddTransaction status="Transaction" callback={employeeAddTransaction} />
                    </div>
        </Route>

        <Route exact path="/employee/transaction">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeTransactionList list={employeetransaction} />
                    </div>
        </Route>

        <Route exact path="/employee/advertisement">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/promo">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/review">
                    <EmployeeNavbar />
                    <div>
                      <EmployeeReviewList list={employeereview} />
                    </div>
        </Route>

        <Route exact path="/employee/support">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/guideline">
                    <EmployeeNavbar />
        </Route>

        <Route exact path="/employee/faq">
                    <EmployeeNavbar />
        </Route>
        </Switch>
    </Router>    
  );
}

export default App;
