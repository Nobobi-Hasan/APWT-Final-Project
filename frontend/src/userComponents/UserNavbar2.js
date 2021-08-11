import {Link} from 'react-router-dom';

const UserNavbar = ()=>{
    return(
        <div>
            <Link to='/user'>Home</Link> |
            <Link to='/user/flight'>Booked Flight List</Link> |
            <Link to='/user/hotel'>Booked Hotel List</Link> |
            <Link to='/user/car'>Booked Car List</Link> |
            <Link to='/user/destination'>Destination</Link> |
            <Link to='/user/package'>Packages</Link> |
            <Link to='/user/show_hotels'>Hotels</Link> |
            (<Link to='/user/confirm_hotel'>Confirm Hotel</Link> ) |
            <Link to='/user/flight_list'>Flight</Link> |
            (<Link to='/user/flight/book'>Confirm Flight</Link> ) |
            <Link to='/user/Car_list'>Car</Link> |
            (<Link to='/user/car/book'>Confirm Car</Link> ) |
            <Link to='/user/travel_history'>Travel History</Link> |
            <Link to='/user/guideline'>Travel Guideline</Link> |
            <Link to='/user/notification'>Notification</Link> |
            <Link to='/user/about'>About Us</Link> |
            <Link to='/user/contact'>Contact Us</Link> |
            <Link to='/user/privay_policy'>Privacy Policy</Link> |
            <Link to='/user/faq'>FAQ</Link> |
            <Link to='/user/give_review'>Review</Link> |
            <Link to='/user/profile'>Profile</Link> |
            <Link to='/project-login'>Logout</Link> 
        </div>
    );
}

export default UserNavbar;