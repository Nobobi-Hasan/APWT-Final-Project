import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const UserConfirmHotel = ({ status, callback }) => {
    //const { id: eid } = useParams();
    const [user_id, setUser_id] = useState("");
    const [room_id, setRoom_id] = useState("");
    const [fromdate, setFromdate] = useState("");
    const [todate, setTodate] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ user_id: user_id, room_id: room_id, fromdate: fromdate, todate: todate });
        history.push('/user');
    };
    return (
        <div>
            <h2>
                {/* This is {status} employee page id: {eid} */}
                Hotel Booking
            </h2>
            <form onSubmit={onSubmit}>
            <fieldset>
            <legend> Book Your Hotel  </legend>
            <br />
                <label>
                    User ID:
                    <input type="text" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                </label>
                <br />
                <br />
                <label>
                    Room ID:
                    <input type="text" name="room_id" value={room_id} onChange={(e) => setRoom_id(e.target.value)} />
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

export default UserConfirmHotel;