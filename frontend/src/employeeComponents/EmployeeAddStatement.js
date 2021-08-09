import { useState } from "react";
//import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './Employee.css';

const EmployeeAddStatement = ({ status, callback }) => {
    //const { id: eid } = useParams();
    const [month, setMonth] = useState("");
    const [revenue, setRevenue] = useState("");
    const [cost, setCost] = useState("");

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ month : month, revenue: revenue, cost: cost});
        history.push('/employee');
    };
    return (
        
        <div>
            <h2>
                This is {status} Add page
            </h2>
            <form className='form' onSubmit={onSubmit}>
            <fieldset>
            <legend>Add Income Statement</legend>
                <label>
                    Month:
                    <input type="month" name="month" value={month} onChange={(e) => setMonth(e.target.value)} />
                </label>
                <br />
                <label>
                    Revenue:
                    <input  type="text" name="revenue" value={revenue} onChange={(e) => setRevenue(e.target.value)} />
                </label>
                <br />
                <label>
                    Cost:
                    <input type="text" name="cost" value={cost} onChange={(e) => setCost(e.target.value)}
                    />
                </label>
                <br/>
                </fieldset>


                <input id="submit" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddStatement;