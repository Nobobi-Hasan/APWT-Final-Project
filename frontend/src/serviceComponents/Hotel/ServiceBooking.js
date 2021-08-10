import {Link} from 'react-router-dom';
const ServiceBooking = ({id, user_id, room_id, fromdate, todate, serviceBookingDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{room_id}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td> 
            <Link to='/hotelDashboard'className='edit-button'>Info</Link> |
            <button className='delete-button' onClick={()=>serviceBookingDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceBooking;