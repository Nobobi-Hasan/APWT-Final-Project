import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const ServiceFlightAvailability = ({ status, callback }) => {
    
    const [title, setTitle] = useState("");
    const [availability, setAvailability] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ title: title, availability:availability});
        history.push('/flightDashboard');
    };
    return (
        <div>
            <h2>
                This is Flight {status} page
            </h2>
            <form onSubmit={onSubmit}>
            <fieldset>
                
                <label>
                    Select Airplane:
                    <select value={title} onChange={(e) => setTitle(e.target.value)}>
                        <option value="Emirates">Emirates</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </label>
                <br />
                <br />

                <label>
                    Airplane Availability:
                    <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>
                </label>

                </fieldset>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ServiceFlightAvailability;