import {Link} from 'react-router-dom';

const UserNavbar = ()=>{
    return(
        <div>
            <Link to='/user'>Home</Link> |
            <Link to='/user/travel_history'>Travel History</Link> |
            <Link to='/user/guideline'>Travel Guideline</Link> |
            <Link to='/user/notification'>Notification</Link> |
            <Link to='/user/give_review'>Review</Link> |
            <Link to='/user/profile'>Profile</Link> |
            <Link to='/project-login'>Logout</Link> 
        </div>
    );
}

export default UserNavbar;