import {Link} from 'react-router-dom';
const UserHotelRoom = ({id, name, location, address, phone, email, image, userBookPackageCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{location}</td>
            <td>{address}</td>
            <td>{phone}<br/>
                {email}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><Link to='/user/hotel_rooms'className='edit-button'>Book Now</Link></td>
            {/* <button className='approve-button' onClick={()=>userBookPackageCallback({id: id, place: place, location: location, image: image, description: description, duration: duration, transport: transport, hotel: hotel, cost: cost})}>Book</button> */}

                
        </tr>

        </>
    );
}

export default UserHotelRoom;