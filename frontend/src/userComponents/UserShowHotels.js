import {Link} from 'react-router-dom';
const UserHotelRoom = ({id, name, location, address, phone, email, image})=>{
    return(
        <>

        <tr>

            <td>{id}</td>
            <td>{name}</td>
            <td>{location}</td>
            <td>{address}</td>
            <td>Phone: {phone}<br/>
                Email: {email}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><Link to={`/user/hotel_rooms/${id}`}className='edit-button'>Book</Link></td>
                
        </tr>

        </>
    );
}

export default UserHotelRoom;