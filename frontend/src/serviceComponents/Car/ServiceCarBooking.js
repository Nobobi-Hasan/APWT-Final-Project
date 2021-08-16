
const ServiceCarBooking = ({id, user_id, car_id,fromloc,toloc, fromdate, todate,detail, serviceCarBookingDeletecallback})=>{
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
            <button className='delete-button' onClick={()=>detail(id)}>Detail</button>

            {/* <Link to={`/hotelDashboard/information/${id}`} className='edit-button'>Info</Link> | */}

            <button className='delete-button' onClick={()=>serviceCarBookingDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceCarBooking;