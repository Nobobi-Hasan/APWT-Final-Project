import AdminTransportBookings from '../AdminCarBookings';
import './Admin.css';

const AdminFlightBookingsList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>User ID</th>
                <th>Flight ID</th>
                <th>From</th>
                <th>To</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Status</th>

                {
                    list.map((car)=>{
          
                            return <AdminTransportBookings {...book} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminFlightBookingsList;