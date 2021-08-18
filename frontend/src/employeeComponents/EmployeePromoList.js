import EmployeePromo from './EmployeePromo';
import './Employee.css';

const EmployeePromoList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

               
                <th>Message</th>
                <th>Action</th>
               
                {
                    list.map((promo)=>{


                            return <EmployeePromo {...promo} employeePromoDeletecallback={callback} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeePromoList;