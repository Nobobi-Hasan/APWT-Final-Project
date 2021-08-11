import UserPrivacyPolicy from './UserPrivacyPolicy';

const UserShowPrivacyPolicy = ({list})=>{
console.log(list);

    return(
        <div>
            
            <UserPrivacyPolicy {...list} />
            
        </div>
    )
}

export default UserShowPrivacyPolicy;