import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const UserContactUs = ({ status, callback }) => {
    //const { id: eid } = useParams();
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ username: username, phone: phone, email: email, message: message });
        history.push('/user');
    };
    return (
        <div>
            <h2>
                {/* This is {status} employee page id: {eid} */}
                {status} Get In Touch
            </h2>
            <form onSubmit={onSubmit}>
            <fieldset>
            <legend>Information: </legend>
            <br />
                <label>
                    Name:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    Phone Number:
                    <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Message:
                    <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <br />

                </fieldset>
                <br />


                <input type="submit" value="Send Message" />
            </form>
        </div>
    );
};

export default UserContactUs;