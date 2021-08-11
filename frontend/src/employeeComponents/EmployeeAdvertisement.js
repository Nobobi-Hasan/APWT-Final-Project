const EmployeeAdvertisement = ({id, image, employeeAdvertisementDeletecallback})=>{
    return(
        

        <tr>
            <td>{image}</td>
            <td><button className='delete-button' onClick={()=>employeeAdvertisementDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeeAdvertisement;