import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const UserConfirmFlight = ({ status, callback }) => {
    //const { id: eid } = useParams();
    const [user_id, setUser_id] = useState("");
    const [air_id, setAir_id] = useState("");
    const [fromloc, setFromloc] = useState("");
    const [toloc, setToloc] = useState("");
    const [fromdate, setFromdate] = useState("");
    const [todate, setTodate] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ user_id: user_id, air_id: air_id, fromloc: fromloc, toloc: toloc, fromdate: fromdate, todate: todate });
        history.push('/user');
    };
    return (
        <div>
            <h2>
                {/* This is {status} employee page id: {eid} */}
                Flight Booking
            </h2>
            <form onSubmit={onSubmit}>
            <fieldset>
            <legend> Book Your Flight  </legend>
            <br />
                <label>
                    User ID:
                    <input type="text" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    Flight ID:
                    <input type="text" name="air_id" value={air_id} onChange={(e) => setAir_id(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    From:
                    <input type="text" name="fromloc" value={fromloc} onChange={(e) => setFromloc(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <label>
                    To:
                    <input type="text" name="toloc" value={toloc} onChange={(e) => setToloc(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Check-in:
                    <input type="date" name="fromdate" value={fromdate} onChange={(e) => setFromdate(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <label>
                    Check-out:
                    <input type="date" name="todate" value={todate} onChange={(e) => setTodate(e.target.value)}
                    />
                </label>
                <br />

                </fieldset>
                <br />
                
                <input type="submit" value="Confirm" />
            </form>
        </div>
    );
};

export default UserConfirmFlight;