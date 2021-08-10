import { useState } from "react";
import EmployeeNavbar from "./employeeComponents/EmployeeNavbar";
import { useFetch } from './employeeComponents/useFetch';
import EmployeeAddSalary from "./employeeComponents/EmployeeAddSalary";
import EmployeeAddStatement from "./employeeComponents/EmployeeAddStatement";
import EmployeeAddTransaction from "./employeeComponents/EmployeeAddTransaction";
import EmployeeAddPromo from "./employeeComponents/EmployeeAddPromo";
import EmployeeAddFaq from "./employeeComponents/EmployeeAddFaq";
import EmployeeAddPackage from "./employeeComponents/EmployeeAddPackage";
import EmployeeAddPlace from "./employeeComponents/EmployeeAddPlace";
import EmployeeSalaryList from "./employeeComponents/EmployeeSalaryList";
import EmployeeStatementList from "./employeeComponents/EmployeeStatementList";
import EmployeeTransactionList from "./employeeComponents/EmployeeTransactionList";
import EmployeeReviewList from "./employeeComponents/EmployeeReviewList";
import EmployeeFaqList from "./employeeComponents/EmployeeFaqList";
import EmployeePromoList from "./employeeComponents/EmployeePromoList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  //Add package by employee
  const employeeAddPackage = (newEmployeePackage) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/packageAdd',
        data:newEmployeePackage,
      });
      //setEmployeePackage([...employeepackage, newEmployeePackage]);
        //  console.log(newEmployeePackage);
};


 //Add place by employee
 const employeeAddPlace = (newEmployeePlace) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/placeAdd',
      data:newEmployeePlace,
    });
    //setEmployeePlace([...employeeplace, newEmployeePlace]);
      //  console.log(newEmployeePlace);
};

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
    const emp1 = 'http://127.0.0.1:8000/api/employee/salary/list';
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

      //add faq by employee
    const employeeAddFaq = (newEmployeeFaq) => { 

      const axios = require('axios').default;

      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/employee/faq',
          data:newEmployeeFaq,
        });
        setEmployeeFaq([...employeefaq, newEmployeeFaq]);
          console.log(newEmployeeFaq);
    };

     //show faq to employee
     const [employeefaq, setEmployeeFaq] = useState([]);
     const emp5 = 'http://127.0.0.1:8000/api/employee/faq/list';
     useFetch(emp5, setEmployeeFaq);

     // Delete faq by employee
    const employeeFaqDeletecallback = (id) => {
      const axios = require('axios').default;

      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/employee/faq/delete',
          data:{
              id:id,
          }
        });

      const data = employeefaq.filter((employee) => employee.id !== id);
      setEmployeeFaq(data);
  };

   //send promo by employee
   const employeeAddPromo = (newEmployeePromo) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/promo',
        data:newEmployeePromo,
      });
      setEmployeePromo([...employeepromo, newEmployeePromo]);
      console.log(newEmployeePromo);
  };

  //show promo list to employee
  const [employeepromo, setEmployeePromo] = useState([]);
  const emp6 = 'http://127.0.0.1:8000/api/employee/promo/list';
  useFetch(emp6, setEmployeePromo);

  // Delete promo by employee
 const employeePromoDeletecallback = (id) => {
   const axios = require('axios').default;

   axios({
       method: 'post',
       url: 'http://127.0.0.1:8000/api/employee/promo/delete',
       data:{
           id:id,
       }
     });

   const data = employeepromo.filter((employee) => employee.id !== id);
   setEmployeePromo(data);
};


  return (
    <Router>
        {/* <EmployeeNavbar /> */}
        <Switch>
            
        <Route exact path="/employee">
          <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

          </div>
          
      </Route>

        <Route exact path="/employee/userList">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

          </div>
        </Route>

        <Route exact path="/employee/packageAdd">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">  
              <EmployeeAddPackage status="Package" callback={employeeAddPackage} />       
              </div>

          </div>
        </Route>

        <Route exact path="/employee/package">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

          </div>
        </Route>

        <Route exact path="/employee/placeAdd">
          <div className="wrapper">
              <EmployeeNavbar />
                <div className="main-container">
                <EmployeeAddPlace status="Place" callback={employeeAddPlace} />          
                </div>

            </div>
        </Route>

        <Route exact path="/employee/place">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

          </div>
        </Route>

        <Route exact path="/employee/gallery">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

          </div>
        </Route>

        <Route exact path="/employee/galleryManage">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

          </div>
        </Route>

        <Route exact path="/employee/salary">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
              <EmployeeAddSalary status="Salary" callback={employeeAddSalary} />   
              </div>

          </div>     
        </Route>

        <Route exact path="/employee/salary/list">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
              <EmployeeSalaryList list={employeesalary} />   
              </div>
        </div>            
        </Route>

        <Route exact path="/employee/statementAdd">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
              <EmployeeAddStatement status="Statement" callback={employeeAddStatement} />   
              </div>
                      
        </div>
        </Route>

        <Route exact path="/employee/statement">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
                      <EmployeeStatementList list={employeestatement} />
                    </div>
        </div>            
        </Route>

        <Route exact path="/employee/transactionAdd">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
                      <EmployeeAddTransaction status="Transaction" callback={employeeAddTransaction} />
                    </div>
        </div>            
        </Route>

        <Route exact path="/employee/transaction">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
                      <EmployeeTransactionList list={employeetransaction} />
                    </div>
        </div>
        </Route>

        <Route exact path="/employee/advertisement">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

        </div>
        </Route>

        <Route exact path="/employee/advertisement/list">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

        </div>
        </Route>

        <Route exact path="/employee/promo">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">    
              <EmployeeAddPromo status="Promo" callback={employeeAddPromo} />  
              </div>

        </div>
        </Route>

        <Route exact path="/employee/promo/list">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">     
              <EmployeePromoList list={employeepromo} callback={employeePromoDeletecallback} /> 
              </div>

        </div>
        </Route>

        <Route exact path="/employee/review">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
                      <EmployeeReviewList list={employeereview} />
                    </div>
        </div>            
        </Route>

        <Route exact path="/employee/support">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

        </div>
        </Route>

        <Route exact path="/employee/guideline">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">      
              </div>

        </div>
        </Route>

        <Route exact path="/employee/faq">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
                        <EmployeeAddFaq status="Faq" callback={employeeAddFaq} />
                    </div>
        </div>            
        </Route>

        <Route exact path="/employee/faq/list">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
                        <EmployeeFaqList list={employeefaq} callback={employeeFaqDeletecallback} />
                    </div>
        </div>            
        </Route>
        </Switch>
    </Router>    
  );
}

export default App;