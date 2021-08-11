import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddPlace = ({ status, callback }) => {
    const [place, setPlace] = useState("");
    const [district, setDistrict] = useState("");
    const [image, setImage] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ place : place, district: district, image: image});
        history.push('/employee');
    };
    return (
        <div>
            <h2>
                This is {status} Add page
            </h2>
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add New Place</legend>
                <label>
                    Place:
                    <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
                </label>
                <br />
                <label>
                    District:
                    <input  type="text" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <br />
                </fieldset>


                <input id="submit" type="submit" value="Submit for Approval" />
            </form>
        </div>
    );
};

export default EmployeeAddPlace;