import EmployeeAdvertisement from './EmployeeAdvertisement';
import './Employee.css';

const EmployeeAdvertisementList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Image</th>
                <th>Action</th>
               
                {
                    list.map((advertisement)=>{


                            return <EmployeeAdvertisement {...advertisement} employeeAdvertisementDeletecallback={callback} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeAdvertisementList;