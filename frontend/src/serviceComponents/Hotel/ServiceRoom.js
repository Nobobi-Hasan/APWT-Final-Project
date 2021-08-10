import {Link} from 'react-router-dom';
const ServiceRoom = ({id, name, description, image,price, created,availability, serviceRoomDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{description}</td>
            {/* <td>{image}</td> */}
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>{price}</td>
            <td>{created}</td>
            <td>{availability}</td>
            <td> 
            <Link to='/hotelDashboard'className='edit-button'>Edit</Link> |
            <button className='delete-button' onClick={()=>serviceRoomDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceRoom;