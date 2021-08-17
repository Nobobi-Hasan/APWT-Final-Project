import EmployeePlace from './EmployeePlace';
import './Employee.css';

const EmployeePlaceList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>District</th>
                <th>Image</th>
                <th>Action</th>

                {
                    list.map((place)=>{

                        
                            return <EmployeePlace {...place} employeePlaceDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default EmployeePlaceList;