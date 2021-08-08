import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const ServiceAddRoom = ({ status, callback }) => {
    
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ name: name, price: price,description:description, image: image});
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
                    Room Name :
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Room Price:
                    <input  type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Room Description:
                    <input  type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                   Room Image:
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

export default ServiceAddRoom;