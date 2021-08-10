const EmployeePromo = ({id, image, message, employeePromoDeletecallback})=>{
    return(
        

        <tr>
            <td>{image}</td>
            <td>{message}</td>
            <td><button className='delete-button' onClick={()=>employeePromoDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeePromo;