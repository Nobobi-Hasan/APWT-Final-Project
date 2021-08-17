const EmployeePromo = ({id, image, message, employeePromoDeletecallback})=>{
    return(
        

        <tr>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>{message}</td>
            <td><button className='delete-button' onClick={()=>employeePromoDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeePromo;