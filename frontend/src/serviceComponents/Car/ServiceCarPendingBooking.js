import {Link} from 'react-router-dom';
const ServiceCarPendingBooking = ({id, user_id, car_id,fromloc, toloc, fromdate, todate, serviceCarPendingBookingDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{car_id}</td>
            <td>{fromloc}</td>
            <td>{toloc}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td> 
            <Link to='/carDashboard/car-pending-list'className='edit-button'>Accept</Link> |
            <button className='delete-button' onClick={()=>serviceCarPendingBookingDeletecallback(id)}>Decline</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceCarPendingBooking;