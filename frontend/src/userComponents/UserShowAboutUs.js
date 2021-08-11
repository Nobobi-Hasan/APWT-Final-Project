import UserAboutUs from './UserAboutUs';

const UserShowAboutUs = ({list})=>{
console.log(list);

    return(
        <div>
            
            <UserAboutUs {...list} />
            
        </div>
    )
}

export default UserShowAboutUs;