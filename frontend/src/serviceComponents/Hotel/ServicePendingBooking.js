import {Link} from 'react-router-dom';
const ServicePendingBooking = ({id, user_id, room_id, fromdate, todate, servicePendingBookingDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{room_id}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td> 
            <Link to='/hotelDashboard'className='edit-button'>Accept</Link> |
            <button className='delete-button' onClick={()=>servicePendingBookingDeletecallback(id)}>Decline</button>
            </td>

        </tr>

        </>
    );
}

export default ServicePendingBooking;