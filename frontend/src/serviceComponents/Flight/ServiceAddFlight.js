import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const ServiceAddFlight = ({ status, callback }) => {
    
    const [title, setTitle] = useState("");
    const [model, setModel] = useState("");
    const [fare, setFare] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");


    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ title: title, model: model, fare:fare, type:type, image: image});
        history.push('/flightDashboard');
    };
    return (
        <div>
            <h2>

                This is Add {status} page
            </h2>
            <form onSubmit={onSubmit}>
            <fieldset>

                <label>
                    Airplane Name :
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Airplane Model:
                    <input  type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                  Fare:
                    <input  type="text" name="fare" value={fare} onChange={(e) => setFare(e.target.value)} />
                </label>
                <br />
                <br />

                <label>
                    Type of a Airplane:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="airbus">Airbus</option>
                        <option value="jett">Jett</option>
                    </select>
                </label>
                <br />
                <br />

                <label>
                   Airplane Image:
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

export default ServiceAddFlight;