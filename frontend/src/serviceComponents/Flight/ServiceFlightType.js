import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const ServiceFlightType = ({ status, callback }) => {
    
    const [title, setTitle] = useState("");
    const [fare, setFare] = useState("");
    const [type, setType] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ title: title, fare:fare, type:type});
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
                        <option value="Singapore Airlines">Singapore Airlines</option>
                        <option value="Emirates">Emirates</option>
                    </select>
                </label>
                <br />
                <br />

                <label>
                    Type of a Airplane:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Airbus">Airbus</option>
                        <option value="Jett">Jett</option>
                    </select>
                </label>
                <br />
                <br />

                <label>
                    Per Day Fare:
                    <input  type="text" name="fare" value={fare} onChange={(e) => setFare(e.target.value)} />
                </label>

                </fieldset>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ServiceFlightType;