import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useFetch } from '../adminComponents/useFetch';

import './Admin.css';

const AdminProfile = ({ idl, firstnamel, lastnamel, genderl, emaill, usernamel, callback }) => {

    console.log(idl);
    console.log(firstnamel);
    console.log(lastnamel);
    console.log(genderl);
    console.log(emaill);
    console.log(usernamel);
    
// //Show Admin Profile by Admin
//     const [adminProfile, setAdminProfile] = useState([]);
//     const urlAP = 'http://127.0.0.1:8000/api/admin/profile';
//     useFetch(urlAP, setAdminProfile);

//     console.log(adminProfile);


    const [firstname, setFirstname] = useState(firstnamel);
    // setFirstname(firstnamel);
    const [lastname, setLastname] = useState(lastnamel);
    // setLastname(lastnamel);
    const [gender, setGender] = useState(genderl);
    // setGender(genderl);
    const [email, setEmail] = useState(emaill);
    // setEmail(emaill);
    const [username, setUsername] = useState(usernamel);
    // setUsername(usernamel);
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ firstname: firstname, lastname: lastname, gender: gender, email: email, username: username, password: password, conPassword: conPassword });
        // history.push('/admin/all-employees');
    };
    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
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
                    <input type="text" name="password" value= {password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Confirm Password:
                    <input type="text" name="conPassword" value= {conPassword}  onChange={(e) => setConPassword(e.target.value)}
                    />
                </label>
                <br />
                </fieldset>

                <input id='submit' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AdminProfile;