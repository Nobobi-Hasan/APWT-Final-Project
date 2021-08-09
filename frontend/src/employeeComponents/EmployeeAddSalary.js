import { useState } from "react";
//import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const EmployeeAddSalary = ({ status, callback }) => {
    //const { id: eid } = useParams();
    const [employee_id, setEmployee_id] = useState("");
    const [username, setUsername] = useState("");
    const [salary, setSalary] = useState("");
    const [bonus, setBonus] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
        callback({ employee_id : employee_id, username: username, salary: salary, bonus: bonus});
        history.push('/employee');
    };
    return (
        <div>
            <h2>
                {/* This is {status} employee page id: {eid} */}
                This is {status} Add page
            </h2>
            <form onSubmit={onSubmit}>
            <fieldset>
            <legend>Add Salary and Festival Bonus</legend>
                <label>
                    Employee ID:
                    <input type="text" name="employee_id" value={employee_id} onChange={(e) => setEmployee_id(e.target.value)} />
                </label>
                <br />
                <label>
                    Username:
                    <input  type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Salary:
                    <input type="text" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Bonus:
                    <input type="text" name="bonus" value={bonus} onChange={(e) => setBonus(e.target.value)}
                    />
                </label>
                </fieldset>


                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EmployeeAddSalary;