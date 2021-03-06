import {Link} from 'react-router-dom';

const UserHotelRoom = ({id, hotel_id, name, description, price, image})=>{
    return(
        <>

        <tr>

            <td>{id}</td>
            <td>{hotel_id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td><img src={process.env.PUBLIC_URL + "/images/" + image} height="60px" width="60px" /></td>
            <td><Link to={`/user/confirm_hotel/${id}`}className='edit-button'>Book Now</Link></td> 

        </tr>

        </>
    );
}

export default UserHotelRoom;