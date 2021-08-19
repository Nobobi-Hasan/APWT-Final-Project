import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useFetch } from '../useFetch';

import '../Service.css';

const HotelProfile = ({ hotelidl,hotelnamel,hotellocationl,hoteladdressl, hotelphonel, hotelemaill, hoteltypel, callback }) => {

    console.log(hotelidl);
    console.log(hotelnamel);
    console.log(hotellocationl);
    console.log(hoteladdressl);
    console.log(hotelphonel);
    console.log(hotelemaill);
    console.log(hoteltypel);


    const [name, setName] = useState(hotelnamel);
    const [location, setLocation] = useState(hotellocationl);
    const [address, setAddress] = useState(hoteladdressl);
    const [phone, setPhone] = useState(hotelphonel);
    const [email, setEmail] = useState(hotelemaill);
    const [type, setType] = useState(hoteltypel);

   
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
       
        callback({ name: name,location:location, address:address, phone: phone, email: email, type: type, password: password, rpassword: rpassword, submit:  submitButton});

        if(submitButton == "Delete")
            history.push('/login');
    };
    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Basic Information: </legend>
                <label>
                    Hotel Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />

                <label>
                    Hotel Location:
                    <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
                <br />

                <label>
                    Hotel Address:
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <br />

                <label>
                     Phone:
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
                     Type:
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

export default HotelProfile;