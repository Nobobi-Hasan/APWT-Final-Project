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
        <>
        <div id="form-main">
            <div id="form-div">

            <form onSubmit={onSubmit} class="form" id="form1">

            <legend> Book Your Hotel  </legend>
            <br />

                <p class="username" >
                        <input type="text" name="user_id" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="User ID"  value={user_id} onChange={(e) => setUser_id(e.target.value)} />
                </p>
                <br />

                <p class="username" >
                        <input type="text" name="room_id" class="feedback-input" placeholder="Room ID"  value={room_id} onChange={(e) => setRoom_id(e.target.value)} />
                </p>
                <br />

                <p class="username" >
                <b>Check-In</b>:
                        <input type="date" name="fromdate" class="feedback-input" placeholder="Check-in"  value={fromdate} onChange={(e) => setFromdate(e.target.value)} />
                </p>
                <br />

                <p class="username" >
                <b>Check-Out</b>:
                        <input type="date" name="todate" class="feedback-input" placeholder="Check-out"  value={todate} onChange={(e) => setTodate(e.target.value)} />
                </p>
                <br />

                <div class="submit">
                <input type="submit" value="Confirm" id="button-blue" />
                <div class="ease"></div>
                </div>
                
            </form>
            </div>
        </div>
        </>
    );
};

export default UserConfirmHotel;