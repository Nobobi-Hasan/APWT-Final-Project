import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddGallery = ({ status, callback }) => {
    const [place, setPlace] = useState("");
    const [image, setImage] = useState("");
    
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ place : place, image: image});
        history.push('/employee');
    };
    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add in Gallery</legend>
                <label>
                    Place:
                    <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
                </label>
                <br />
                <label>
                    Image:
                    <input  type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <br />
                </fieldset>


                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddGallery;