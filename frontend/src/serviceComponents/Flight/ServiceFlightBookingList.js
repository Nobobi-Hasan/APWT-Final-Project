import Service from './ServiceFlightBooking';
import '../Service.css';

const ServiceFlightBookingList = ({list,detail, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Id</th>
                <th>User Id</th>
                <th>Air Id</th>
                <th>Departure Location</th>
                <th>Arrival Location</th>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} detail={detail} serviceFlightBookingDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceFlightBookingList;