import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Admin.css';


const AdminPackageStatus = ({list, callback})=>{

    const [place, setPlace] = useState("");
    const [status, setStatus] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({place: place, status: status});

        console.log(place);
        console.log(status);
        // history.push('/admin/all-employees');
    };
    
    return(
        <>

            <div id="registration-form">
                <div className='fieldset'>
                    <legend>Package Status</legend>
                    <form className='form' onSubmit={onSubmit}>

                        <label for="title">Select Status:</label>

                            <select name="place" id="place" onChange={(e) => setPlace(e.target.value)}>


                            {
                                list.map((packageS)=>(

                                    
                                    <option value={packageS.place}>{packageS.place}</option>
                                
                                ))
                            }

                            </select>
                            <br/>
                            <br/>

                            <label for="status">Status:</label>
                            <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>

                                <option value="Upcoming">Upcoming</option>
                                <option value="Completed">Completed</option>
                                
                            </select>
                            <br/>
                            <br/>

                        <input type="submit" value="Submit"/>
                        <br/>

                    </form> 
                </div>
            </div>

        </>
    );
}

export default AdminPackageStatus;