import {Link} from 'react-router-dom';
const ServiceCarTransaction = ({id, date, receiver_type, receiver, username, description, amount})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{receiver_type}</td>
            <td>{receiver}</td>
            <td>{username}</td>
            <td>{description}</td>
            <td>{amount}</td>
        </tr>

        </>
    );
}

export default ServiceCarTransaction;