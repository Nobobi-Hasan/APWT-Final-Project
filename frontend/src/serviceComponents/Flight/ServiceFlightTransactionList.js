import Service from './ServiceFlightTransaction';
import '../Service.css';

const ServiceFlightTransactionList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Id</th>
                <th>Date</th>
                <th>Receiver Id</th>
                <th>Receiver</th>
                <th>Username</th>
                <th>Description</th>
                <th>Amount</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceFlightTransactionList;