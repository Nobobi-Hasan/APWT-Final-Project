import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useFetch } from '../useFetch';

import '../Service.css';

const FlightProfile = ({ flightidl, flightnamel, flightphonel, flightemaill, flighttypel, callback }) => {

    console.log(flightidl);
    console.log(flightnamel);
    console.log(flightphonel);
    console.log(flightemaill);
    console.log(flighttypel);


    const [name, setName] = useState(flightnamel);
    const [phone, setPhone] = useState(flightphonel);
    const [email, setEmail] = useState(flightemaill);
    const [type, setType] = useState(flighttypel);

   
    // setUsername(usernamel);
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");

    const [submitButton, setSubmitButton] = useState("");


    const buttonU = () => { 

        setSubmitButton("Update");
    
          console.log("update");
    };

    const buttonD = () => { 

        setSubmitButton("Delete");
    
          console.log("Delete");
    };




    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(submitButton);
       
        callback({ name: name, phone: phone, email: email, type: type, password: password, rpassword: rpassword, submit:  submitButton});

        if(submitButton == "Delete")
            history.push('/login');
    };
    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Basic Information: </legend>
                <label>
                    Company Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Company Phone:
                    <input  type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Company Type:
                    <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value= {password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Re-Type Password:
                    <input type="password" name="rpassword" value= {rpassword}  onChange={(e) => setRpassword(e.target.value)}
                    />
                </label>
                <br />
            </fieldset>


                <input type="submit" name="submit" value="Update" id="updateBtn" onClick={buttonU}/>
                <input type="submit" name="submit" value="Delete" id="deleteBtn" onClick={buttonD}/>
            </form>
        </div>
    );
};

export default FlightProfile;