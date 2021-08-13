import {Link} from 'react-router-dom';
const ServiceFlightPendingBooking = ({id, user_id, air_id,fromloc, toloc, fromdate, todate, serviceFlightPendingBookingDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{air_id}</td>
            <td>{fromloc}</td>
            <td>{toloc}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td> 
            <Link to='/flightDashboard/flight-pending-list'className='edit-button'>Accept</Link> |
            <button className='delete-button' onClick={()=>serviceFlightPendingBookingDeletecallback(id)}>Decline</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceFlightPendingBooking;