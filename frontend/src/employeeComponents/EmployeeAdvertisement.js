const EmployeeAdvertisement = ({id, image, employeeAdvertisementDeletecallback})=>{
    return(
        

        <tr>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td><button className='delete-button' onClick={()=>employeeAdvertisementDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeeAdvertisement;