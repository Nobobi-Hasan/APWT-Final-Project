import Service from './ServiceCarBooking';
import '../Service.css';

const ServiceCarBookingList = ({list,detail, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>Id</th>
                <th>User Id</th>
                <th>Car Id</th>
                <th>Departure Location</th>
                <th>Arrival Location</th>
                <th>Arrival Date</th>
                <th>Departure Date</th>
                <th>Action</th>

                {
                    list.map((service)=>{

                        
                            return <Service {...service} detail={detail} serviceCarBookingDeletecallback={callback} />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default ServiceCarBookingList;