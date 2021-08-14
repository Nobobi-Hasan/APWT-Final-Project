import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Admin.css';


const AdminPackageStatus = ({list, callback})=>{

    const [place, setPlace] = useState("");
    const [status, setStatus] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({place, status});
        const p="dd";
        const s="ss";
        console.log(p);
        console.log(s);

        console.log(place);
        console.log(status);
        // history.push('/admin/all-employees');
    };
    
    return(
        <>

            <div id="form">
                <div className='fieldset'>
                    <legend>Package Status</legend>
                    <form className='form' onSubmit={onSubmit}>

                        <label for="title">Select Status:</label>

                            <select name="place" id="place">


                            {
                                list.map((packageS)=>(

                                    
                                    <option key={packageS.place} value={packageS.place} onChange={(e) => setPlace(e.target.value)}>{packageS.place}</option>
                                
                                ))
                            }

                            </select>
                            <br/>
                            <br/>

                            <label for="status">Status:</label>
                            <select name="status" id="status">

                                <option value="Upcoming" onChange={(e) => setStatus(e.target.value)}>Upcoming</option>
                                <option value="Completed" onChange={(e) => setStatus(e.target.value)}>Completed</option>
                                
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