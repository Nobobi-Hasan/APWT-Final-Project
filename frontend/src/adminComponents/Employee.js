// import {Link} from 'react-router-dom';
import './Employee.css';

const Employee = ({id, firstname, lastname, gender, email, username, adminEmployeeDeletecallback})=>{
    return(
        <div className='employee' style={{color:'red'}}>
            <p>ID: {id}</p>
            <h3>First Name: {firstname}</h3>
            <p>Last Name: {lastname}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <button onClick={()=>adminEmployeeDeletecallback(id)}>Delete</button>
            {/* <Link to={`/edit/${id}`}> Edit </Link> */}
        </div>
    );
}

export default Employee;