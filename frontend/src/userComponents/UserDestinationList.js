import UserShowDestination from './UserShowDestination';
import './User.css';

const UserDestinationList = ({list})=>{
    console.log(list);

    return(
        <div>
            <table id='table'>

                <th>ID</th>
                <th>Place</th>
                <th>District</th>
                <th>Image</th>
                <th>Details</th>

                {
                    list.map((showdestination)=>{

                        
                            return <UserShowDestination {...showdestination}  />
                    
                    })
                }
                
            </table>
        </div>
        
    )
}

export default UserDestinationList;