import {Link} from 'react-router-dom';
const ServiceFacility = ({id, title, description, image, created, serviceFacilityDeletecallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            {/* <td>{image}</td> */}
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>{created}</td>
            <td> 
            <Link to='/hotelDashboard'>Edit</Link> |
            <button className='delete-button' onClick={()=>serviceFacilityDeletecallback(id)}>Delete</button>
            </td>

        </tr>

        </>
    );
}

export default ServiceFacility;