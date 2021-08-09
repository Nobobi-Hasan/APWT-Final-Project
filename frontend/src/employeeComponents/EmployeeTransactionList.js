import EmployeeTransaction from './EmployeeTransaction';
import './Employee.css';

const EmployeeTransactionList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Date</th>
                <th>Receiver ID</th>
                <th>Receiver</th>
                <th>Username</th>
                <th>Description</th>
                <th>Amount</th>

                {
                    list.map((transaction)=>{


                            return <EmployeeTransaction {...transaction} />

                    })
                }
            </table>
        </div>
        
    )
}

export default EmployeeTransactionList;