import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddPackage = ({ status, callback }) => {
    const [place, setPlace] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [transport, setTransport] = useState("");
    const [hotel, setHotel] = useState("");
    const [cost, setCost] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ place : place, location: location, image: image, description: description, duration: duration, transport: transport, hotel: hotel, cost: cost});
        history.push('/employee');
    };
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add New Package</legend>
                <label>
                    Place:
                    <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
                </label>
                <br />
                <label>
                    Location:
                    <input  type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Duration:
                    <input type="text" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Transport:
                    <input type="text" name="transport" value={transport} onChange={(e) => setTransport(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Hotel:
                    <input type="text" name="hotel" value={hotel} onChange={(e) => setHotel(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Cost:
                    <input type="number" name="cost" value={cost} onChange={(e) => setCost(e.target.value)}
                    />
                </label>

                </fieldset>


                <input id="submit" type="submit" value="Submit for Approval" />
            </form>
        </div>
    );
};

export default EmployeeAddPackage;