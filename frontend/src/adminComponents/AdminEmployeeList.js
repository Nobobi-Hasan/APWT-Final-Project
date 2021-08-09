import Employee from './AdminEmployee';
import './Admin.css';

const AdminEmployeeList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Username</th>
                <th>Action</th>

                {
                    list.map((employee)=>{

                        
                            return <Employee {...employee} adminEmployeeDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminEmployeeList;