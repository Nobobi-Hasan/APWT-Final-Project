
const ServiceFlightBooking = ({id, user_id, air_id,fromloc,toloc, fromdate, todate,detail, serviceFlightBookingDeletecallback})=>{
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
            <button className='delete-button' onClick={()=>detail(id)}>Detail</button>

            {/* <Link to={`/hotelDashboard/information/${id}`} className='edit-button'>Info</Link> | */}

            <button className='delete-button' onClick={()=>serviceFlightBookingDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceFlightBooking;