/* eslint-disable jsx-a11y/alt-text */
const EmployeeGallery = ({id, place, image, employeeGalleryDeletecallback})=>{
    return(
        

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><button className='delete-button' onClick={()=>employeeGalleryDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeeGallery;