
const ServiceBooking = ({id, user_id, room_id, fromdate, todate,detail, serviceBookingDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{room_id}</td>
            <td>{fromdate}</td>
            <td>{todate}</td>
            <td> 
            <button className='delete-button' onClick={()=>detail(id)}>Detail</button>

            {/* <Link to={`/hotelDashboard/information/${id}`} className='edit-button'>Info</Link> | */}

            <button className='delete-button' onClick={()=>serviceBookingDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceBooking;