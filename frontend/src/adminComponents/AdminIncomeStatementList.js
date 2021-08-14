import AdminIncomeStatement from './AdminIncomeStatement';
import './Admin.css';

const AdminIncomeStatementList = ({list})=>{
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
                    list.map((income)=>{

                        
                            return <AdminIncomeStatement {...income}/>
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default AdminIncomeStatementList;