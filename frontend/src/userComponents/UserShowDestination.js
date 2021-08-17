//import {Link} from 'react-router-dom';
//import { useHistory } from 'react-router-dom';


const UserShowDestination = ({id, place, district, image})=>{
    // const history = useHistory();

    // const routeChange = () =>{ 
    //     userDestinationDetailscallback(id);
    //     let path = `/user/destination_details/${id}`; 
    //     history.push(path);
    //   }
    return(
        <>
        
        <tr>

            <td>{id}</td>
            <td>{place}</td>
            <td>{district}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><button className='details-button'>Details</button></td>
            
        </tr>
        
        
        </>
    );
}

export default UserShowDestination;