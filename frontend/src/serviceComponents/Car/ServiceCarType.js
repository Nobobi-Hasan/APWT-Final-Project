import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const ServiceCarType = ({ status, callback }) => {
    
    const [title, setTitle] = useState("");
    const [fare, setFare] = useState("");
    const [type, setType] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ title: title, fare:fare, type:type});
        history.push('/carDashboard');
    };
    return (
        <div>
            <h2>
               <center>This is Car {status} page</center> 
            </h2>
            <form className='form'  onSubmit={onSubmit}>
            <fieldset>
                
                <label>
                    Select Car:
                    <select value={title} onChange={(e) => setTitle(e.target.value)}>
                        <option value="BMW">BMW</option>
                        <option value="Toyota">Toyota</option>
                    </select>
                </label>
                <br />
                <br />

                <label>
                    Type of a Car:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Luxury">Luxury</option>
                        <option value="Standard">Standard</option>
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
                <input id='submit' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ServiceCarType;