const EmployeeGallery = ({id, place, image, employeeGalleryDeletecallback})=>{
    return(
        

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{image}</td>
            <td><button className='delete-button' onClick={()=>employeeGalleryDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeeGallery;