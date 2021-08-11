import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddAdvertisement = ({ status, callback }) => {

    const [image, setImage] = useState("");
  
    
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ image : image});
        history.push('/employee');
    };
    return (
        <div>
            <h2>
                This is {status} Send page
            </h2>
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Send Advertisement</legend>
                <label>
                    Image:
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <br />
                </fieldset>


                <input id="submit" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default EmployeeAddAdvertisement;