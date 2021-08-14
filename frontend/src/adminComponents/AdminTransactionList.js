import AdminTransaction from './AdminTransaction';
import './Admin.css';

const AdminTransactionList = ({list})=>{
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

                        
                            return <AdminTransaction {...transaction}/>
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminTransactionList;