import UserShowHotels from './UserShowHotels';
import './User.css';

const UserShowHotelList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Hotel Name</th>
                <th>Location</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Image</th>
                <th>Book</th>
                
                
               
                {
                    list.map((hotellist)=>{


                            return <UserShowHotels {...hotellist} />

                    })
                }
            </table>
        </div>
        
    )
}

export default UserShowHotelList;