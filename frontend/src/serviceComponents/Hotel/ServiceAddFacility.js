import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const ServiceAddFacility = ({ status, callback }) => {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ title: title, description: description, image: image});
        history.push('/hotelDashboard');
    };
    return (
        <div>
            <h2>
                {/* This is {status} Hotel Facility page id: {eid} */}
                This is Add {status} page
            </h2>
            <form onSubmit={onSubmit}>
            <fieldset>
                <label>
                    Facility Title :
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    Description:
                    <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    Image:
                    <input type="file" name="image" value={image} onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                </fieldset>
                <br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default ServiceAddFacility;