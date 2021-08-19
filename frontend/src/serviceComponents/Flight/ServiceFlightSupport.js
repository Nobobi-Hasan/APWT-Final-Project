import { useState } from "react";
import { useHistory } from 'react-router-dom';

const ServiceFlightSupport = ({ status, callback }) => {
    
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ username: username, phone: phone, email:email, message: message});
        history.push('/flightDashboard/flightsupport');
    };
    return (
        <div id="registration-form">
        <div className='fieldset'>
            <legend>Airplane Support</legend>
                <form className='form' onSubmit={onSubmit}>
        
                <label>
                    Company Name :
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Phone Number:
                    <input  type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Email:
                    <input  type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                   Message:
                   <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="5" cols="80"/>
                </label>
                <br/>
                <input id='submit' type="submit" value="Submit" />
            </form>
        </div>
    </div>    
    );
};

export default ServiceFlightSupport;