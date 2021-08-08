import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const AdminAddEmployee = ({ status, callback }) => {
    //const { id: eid } = useParams();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ firstname: firstname, lastname: lastname, gender: gender, email: email, username: username, password: password, conPassword: conPassword });
        history.push('/admin');
    };
    return (
        <div>
            <h2>
                {/* This is {status} employee page id: {eid} */}
                This is {status} Add page
            </h2>
            <form onSubmit={onSubmit}>
            <fieldset>
            <legend>Basic Information: </legend>
                <label>
                    Firstname:
                    <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input  type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </label>
                <br />
                <label>
                    Gender:
                    <input type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                </fieldset>


                <fieldset>
                <legend>Account Information: </legend>
                <br />
                <label>
                    Usename:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Confirm Password:
                    <input type="text" name="conPassword" value={conPassword} onChange={(e) => setConPassword(e.target.value)}
                    />
                </label>
                <br />
                </fieldset>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AdminAddEmployee;