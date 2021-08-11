import UserTravelGuideline from './UserTravelGuideline';

const UserShowGuideline = ({list})=>{
console.log(list);

    return(
        <div>
            
            <UserTravelGuideline {...list} />
            
        </div>
    )
}

export default UserShowGuideline;