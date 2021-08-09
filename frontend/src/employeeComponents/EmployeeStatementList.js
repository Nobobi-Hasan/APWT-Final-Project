import EmployeeStatement from './EmployeeStatement';
import './Employee.css';

const EmployeeStatementList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Month</th>
                <th>Revenue</th>
                <th>Cost</th>
                <th>Profit</th>

                {
                    list.map((statement)=>{


                            return <EmployeeStatement {...statement} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeStatementList;