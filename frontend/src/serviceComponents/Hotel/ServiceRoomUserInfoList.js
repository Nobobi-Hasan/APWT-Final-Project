import Service from './ServiceRoomUserInfo';
import '../Service.css';

const ServiceRoomUserInfoList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>User Information</th>
                <th>Room Information</th>

                        <Service {...list}  />


            </table>
        </div>
        
    )
}

export default ServiceRoomUserInfoList;