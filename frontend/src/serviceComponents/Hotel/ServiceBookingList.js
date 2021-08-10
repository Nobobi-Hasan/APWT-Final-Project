import Service from './ServiceBooking';
import '../Service.css';

const ServiceBookingList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Id</th>
                <th>User Id</th>
                <th>Room Id</th>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} serviceBookingDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceBookingList;