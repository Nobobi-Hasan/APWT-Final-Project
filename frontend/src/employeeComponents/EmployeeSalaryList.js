import Salary from './EmployeeSalary';
import './Employee.css';

const EmployeeSalaryList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Employee ID</th>
                <th>Salary</th>
                <th>Festival Bonus</th>
               
                {
                    list.map((salary)=>{


                            return <Salary {...salary} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeSalaryList;