import EmployeeGallery from './EmployeeGallery';
import './Employee.css';

const EmployeeGalleryList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>Image</th>
                <th>Action</th>
               
                {
                    list.map((gallery)=>{


                            return <EmployeeGallery {...gallery} employeeGalleryDeletecallback={callback} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeGalleryList;