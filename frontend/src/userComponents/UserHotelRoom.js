import {Link} from 'react-router-dom';

const UserHotelRoom = ({id, hotel_id, name, description, price, image, userBookPackageCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{hotel_id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><Link to='/user/car/book'className='edit-button'>Book Now</Link></td>
            {/* <button className='approve-button' onClick={()=>userBookPackageCallback({id: id, place: place, location: location, image: image, description: description, duration: duration, transport: transport, hotel: hotel, cost: cost})}>Book</button> */}

                
        </tr>

        </>
    );
}

export default UserHotelRoom;