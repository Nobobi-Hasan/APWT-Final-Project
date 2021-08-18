import { useState } from "react";
import EmployeeNavbar from "./employeeComponents/EmployeeNavbar";
import { useFetch } from './employeeComponents/useFetch';
import 'font-awesome/css/font-awesome.min.css';
import EmployeeHome from "./employeeComponents/EmployeeHome";
import EmployeeAddSalary from "./employeeComponents/EmployeeAddSalary";
import EmployeeAddStatement from "./employeeComponents/EmployeeAddStatement";
import EmployeeAddTransaction from "./employeeComponents/EmployeeAddTransaction";
import EmployeeAddAdvertisement from "./employeeComponents/EmployeeAddAdvertisement";
import EmployeeAddPromo from "./employeeComponents/EmployeeAddPromo";
import EmployeeAddGallery from "./employeeComponents/EmployeeAddGallery";
import EmployeeAddFaq from "./employeeComponents/EmployeeAddFaq";
import EmployeeAddPackage from "./employeeComponents/EmployeeAddPackage";
import EmployeeEditPackage from "./employeeComponents/EmployeeEditPackage";
import EmployeePackageList from "./employeeComponents/EmployeePackageList";
import EmployeeAddPlace from "./employeeComponents/EmployeeAddPlace";
import EmployeeEditPlace from "./employeeComponents/EmployeeEditPlace";
import EmployeePlaceList from "./employeeComponents/EmployeePlaceList";
import EmployeeSalaryList from "./employeeComponents/EmployeeSalaryList";
import EmployeeStatementList from "./employeeComponents/EmployeeStatementList";
import EmployeeTransactionList from "./employeeComponents/EmployeeTransactionList";
import EmployeeReviewList from "./employeeComponents/EmployeeReviewList";
import EmployeeTransportList from "./employeeComponents/EmployeeTransportList";
import EmployeeHotelList from "./employeeComponents/EmployeeHotelList";
import EmployeeFaqList from "./employeeComponents/EmployeeFaqList";
import EmployeeAdvertisementList from "./employeeComponents/EmployeeAdvertisementList";
import EmployeeGalleryList from "./employeeComponents/EmployeeGalleryList";
import EmployeePromoList from "./employeeComponents/EmployeePromoList";
import EmployeeSupportList from "./employeeComponents/EmployeeSupportList";
import EmployeeUserList from "./employeeComponents/EmployeeUserList";
import EmployeeUserDetailsList from "./employeeComponents/EmployeeUserDetailsList";
import EmployeeGuidelines from "./employeeComponents/EmployeeGuidelines";
import EmployeeGuidelinesForm from "./employeeComponents/EmployeeGuidelinesForm";

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


//add image in gallery by employee
const employeeAddGallery = (newEmployeeGallery) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/gallery',
      data:newEmployeeGallery,
    });
    setEmployeeGallery([...employeegallery, newEmployeeGallery]);
    console.log(newEmployeeGallery);
};

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




  //send advertisement by employee
  const employeeAddAdvertisement = (newEmployeeAdvertisement) => { 

    const axios = require('axios').default;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/employee/advertisement',
        data:newEmployeeAdvertisement,
      });
      setEmployeeAdvertisement([...employeeadvertisement, newEmployeeAdvertisement]);
      console.log(newEmployeeAdvertisement);
  };


    //show salary to employee
    const [employeesalary, setEmployeeSalary] = useState([]);
    const emp1 = 'http://127.0.0.1:8000/api/employee/salary/list';
    useFetch(emp1, setEmployeeSalary);


    //show Statement to employee
    const [employeestatement, setEmployeeStatement] = useState([]);
    const emp2 = 'http://127.0.0.1:8000/api/employee/statement';
    useFetch(emp2, setEmployeeStatement);

  
    //show Transaction history to employee
    const [employeetransaction, setEmployeeTransaction] = useState([]);
    const emp3 = 'http://127.0.0.1:8000/api/employee/transaction';
    useFetch(emp3, setEmployeeTransaction);

    //show user review to employee
    const [employeereview, setEmployeeReview] = useState([]);
    const emp4 = 'http://127.0.0.1:8000/api/employee/review';
    useFetch(emp4, setEmployeeReview);

    //show transport to employee
    const [employeetransport, setEmployeeTransport] = useState([]);
    const emp5 = 'http://127.0.0.1:8000/api/employee/transportList';
    useFetch(emp5, setEmployeeTransport);

    //show hotel to employee
    const [employeehotel, setEmployeeHotel] = useState([]);
    const emp6 = 'http://127.0.0.1:8000/api/employee/hotelList';
    useFetch(emp6, setEmployeeHotel);

     //show faq to employee
     const [employeefaq, setEmployeeFaq] = useState([]);
     const emp7 = 'http://127.0.0.1:8000/api/employee/faq/list';
     useFetch(emp7, setEmployeeFaq);

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

  
  //show advertisement list to employee
  const [employeeadvertisement, setEmployeeAdvertisement] = useState([]);
  const emp8 = 'http://127.0.0.1:8000/api/employee/advertisement/list';
  useFetch(emp8, setEmployeeAdvertisement);

  // Delete advertisement by employee
 const employeeAdvertisementDeletecallback = (id) => {
   const axios = require('axios').default;

   axios({
       method: 'post',
       url: 'http://127.0.0.1:8000/api/employee/advertisement/delete',
       data:{
           id:id,
       }
     });

   const data = employeeadvertisement.filter((employee) => employee.id !== id);
   setEmployeeAdvertisement(data);
};
 

  //show promo list to employee
  const [employeepromo, setEmployeePromo] = useState([]);
  const emp9 = 'http://127.0.0.1:8000/api/employee/promo/list';
  useFetch(emp9, setEmployeePromo);

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

//show gallery to employee
const [employeegallery, setEmployeeGallery] = useState([]);
const emp10 = 'http://127.0.0.1:8000/api/employee/gallery/manage';
useFetch(emp10, setEmployeeGallery);

// Delete image from gallery by employee
const employeeGalleryDeletecallback = (id) => {
 const axios = require('axios').default;

 axios({
     method: 'post',
     url: 'http://127.0.0.1:8000/api/employee/gallery/delete',
     data:{
         id:id,
     }
   });

 const data = employeegallery.filter((employee) => employee.id !== id);
 setEmployeeGallery(data);
};

//show support to employee
const [employeesupport, setEmployeeSupport] = useState([]);
const emp11 = 'http://127.0.0.1:8000/api/employee/support';
useFetch(emp11, setEmployeeSupport);

// Delete support by employee
const employeeSupportDeletecallback = (id) => {
 const axios = require('axios').default;

 axios({
     method: 'post',
     url: 'http://127.0.0.1:8000/api/employee/support/delete',
     data:{
         id:id,
     }
   });

 const data = employeesupport.filter((employee) => employee.id !== id);
 setEmployeeSupport(data);
};


// Show all users by employee
const [employeeUser, setEmployeeUser] = useState([]);
const emp12 = 'http://127.0.0.1:8000/api/employee/userlist';
useFetch(emp12, setEmployeeUser);

// Show user details by employee
const [employeeUserDetails, setEmployeeUserDetails] = useState([]);
const emp13 = 'http://127.0.0.1:8000/api/employee/userlist';
useFetch(emp13, setEmployeeUserDetails);

 // Show an User Details by employee
 const employeeUserDetailscallback = (id) => {
  const data = employeeUser.filter((user) => user.id === id);
  setEmployeeUserDetails(data);
  console.log(data);
  };

//Show Guidelines by employee
const [employeeGuidelines, setEmployeeGuidelines] = useState([]);
const emp14 = 'http://127.0.0.1:8000/api/employee/guidelines';
useFetch(emp14, setEmployeeGuidelines);

// Edit Guidelines by employee
const employeeGuidelinesEditCallback = (guidelines) => {
  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/guidelines/edit',
      data: guidelines
    });

  setEmployeeGuidelines(guidelines);

  console.log(guidelines);
};

//Show place by employee
const [employeePlace, setEmployeePlace] = useState([]);
const emp15 = 'http://127.0.0.1:8000/api/employee/place';
useFetch(emp15, setEmployeePlace);

 // Edit Place by employee
 const employeeEditPlace = (editPlace) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/placeEdit',
      data:editPlace,
    });
    const data = employeePlace.filter((place) => place.id !== editPlace.id);
  
    setEmployeePlace(data);
    setEmployeePlace([...data, editPlace]);
    
};

// Delete place by employee
const employeePlaceDeletecallback = (id) => {
  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/placedelete',
      data:{
          id:id,
      }
    });
  const data = employeePlace.filter((place) => place.id !== id);
  setEmployeePlace(data);
};

//Show package by employee
const [employeePackage, setEmployeePackage] = useState([]);
const emp16 = 'http://127.0.0.1:8000/api/employee/package';
useFetch(emp16, setEmployeePackage);

 // Edit Package by employee
 const employeeEditPackage = (editPackage) => { 

  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/packageEdit',
      data:editPackage,
    });
    const data = employeePackage.filter((packages) => packages.id !== editPackage.id);
  
    setEmployeePackage(data);
    setEmployeePackage([...data, editPackage]);
    
};

// Delete package by employee
const employeePackageDeletecallback = (id) => {
  const axios = require('axios').default;

  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/employee/packagedelete',
      data:{
          id:id,
      }
    });
  const data = employeePackage.filter((packages) => packages.id !== id);
  setEmployeePackage(data);
};


  return (
    <Router>
        {/* <EmployeeNavbar /> */}
        <Switch>
            
        <Route exact path="/employee">
          <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
              <EmployeeHome/>   
              </div>

          </div>
          
      </Route>

        <Route exact path="/employee/userList">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">  
              <EmployeeUserList list={employeeUser}  callback={employeeUserDetailscallback} />    
              </div>

          </div>
        </Route>

        <Route exact path="/employee/user/details/:id">
                    <div className="wrapper">
                        <EmployeeNavbar />
                        <div className="main-container"> 
                            <EmployeeUserDetailsList list={employeeUserDetails}/>
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
              <EmployeePackageList list={employeePackage} callback={employeePackageDeletecallback} />       
              </div>

          </div>
        </Route>


        <Route path="/employee/packageEdit/:id">
                  <div className="wrapper">
                          <EmployeeNavbar />
                        <div className="main-container">
                        <EmployeeEditPackage callback={employeeEditPackage} />
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
              <EmployeePlaceList list={employeePlace} callback={employeePlaceDeletecallback} />  
              </div>

          </div>
        </Route>

        <Route path="/employee/placeEdit/:id">
                  <div className="wrapper">
                          <EmployeeNavbar />
                        <div className="main-container">
                        <EmployeeEditPlace callback={employeeEditPlace} />
                        </div>
                    </div>  
            </Route>

        <Route exact path="/employee/gallery">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">  
              <EmployeeAddGallery status="Gallery" callback={employeeAddGallery} />     
              </div>

          </div>
        </Route>

        <Route exact path="/employee/gallery/manage">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
              <EmployeeGalleryList list={employeegallery} callback={employeeGalleryDeletecallback} />      
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
              <EmployeeAddAdvertisement status="Advertisement" callback={employeeAddAdvertisement} />  
              </div>

        </div>
        </Route>

        <Route exact path="/employee/advertisement/list">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
              <EmployeeAdvertisementList list={employeeadvertisement} callback={employeeAdvertisementDeletecallback} />    
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
              <EmployeeSupportList list={employeesupport} callback={employeeSupportDeletecallback} />   
              </div>

        </div>
        </Route>

        <Route exact path="/employee/guidelines">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
              <EmployeeGuidelines list={employeeGuidelines} />   
              </div>

        </div>
        </Route>

        <Route path="/employee/guidelines/edit">
                    <div className="wrapper">

                        <EmployeeNavbar />
                        <div className="main-container"> 
                            <EmployeeGuidelinesForm callback={employeeGuidelinesEditCallback} />
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

        <Route exact path="/employee/transportList">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
                      <EmployeeTransportList list={employeetransport} />
                    </div>
        </div>            
        </Route>

        <Route exact path="/employee/hotelList">
        <div className="wrapper">
            <EmployeeNavbar />
              <div className="main-container">   
                      <EmployeeHotelList list={employeehotel} />
                    </div>
        </div>            
        </Route>

        </Switch>
    </Router>    
  );
}

export default App;