import {Link} from 'react-router-dom';
const UserDestinationDetails = ({id, place, district, image})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{district}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><Link to='/user/show_hotels'className='edit-button'>Search</Link></td>

                
        </tr>

        </>
    );
}

export default UserDestinationDetails;