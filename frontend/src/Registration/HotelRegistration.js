import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './css/reg-style.css';

const HotelRegistration = ({ callback }) => {
    
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");
    const [image, setImage] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ name: name, location: location, address:address, phone:phone, email:email, password:password, rpassword:rpassword, image: image});
        history.push('/register');
    };

    return (
        <div class="main">
            <div class="container">
                <div class="signup-content">
                     <div class="signup-img">
                            <img src={process.env.PUBLIC_URL + "/images/signup-hotel.jpg"}/>
                     </div>

                        <div class="signup-form">
                            <form class="register-form" id="register-form" onSubmit={onSubmit} >
                                <h2>Hotel Registration Form</h2>
                                    <div class="form-row"></div>
                                        <div class="form-group">
                                            <label for="name"> 
                                                Name :
                                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                            </label>
                                        </div>

                                        <div class="form-group">
                                            <label for="location">
                                                Location :
                                                 <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                            </label>
                                        </div>
                        
                                         <div class="form-group">
                                             <label for="address">
                                                Address :
                                                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                            </label>
                                        </div>
                        
                                        <div class="form-group">
                                            <label for="phone">
                                                Phone Number :
                                                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                            </label>
                                        </div>

                                        <div class="form-group">
                                            <label for="email">
                                                Email :
                                                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </label>
                                        </div>

                                        <div class="form-group">
                                            <label for="password">
                                                Password :
                                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </label>
                                        </div>

                                        <div class="form-group">
                                            <label for="rpassword">
                                                Re-type Password :
                                                <input type="password" name="rpassword" value={rpassword} onChange={(e) => setRpassword(e.target.value)} />
                                            </label>
                                        </div>

                                        <div>
                                            <label for="image">
                                                 Hotel Image
                                                <input type="file" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                                            </label>
                                        </div>

                                        <div class="form-submit">
                                            <input type="submit" value="Submit" class="regsubmit" name="regsubmit" id="regsubmit" />
                                        </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default HotelRegistration;