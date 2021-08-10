import { useState } from "react";
//import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddPromo = ({ status, callback }) => {
    //const { id: eid } = useParams();
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");
    
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ image : image, message: message});
        history.push('/employee');
    };
    return (
        <div>
            <h2>
                This is {status} Send page
            </h2>
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Send Promo</legend>
                <label>
                    Image:
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <br />
                <label>
                    Message:
                    <input  type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <br />
                </fieldset>


                <input id="submit" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default EmployeeAddPromo;