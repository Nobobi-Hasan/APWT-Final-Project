import {Link} from 'react-router-dom';

const HotelNavbar = ()=>{
    return(
        <div>
            <Link to='/hotelDashboard'>Dashboard</Link> |
            <Link to='/hotelDashboard/addhotelfacility'>New Facilities</Link> |
            <Link to='/hotelDashboard/managehotelfacility'>Manage Facilities</Link> |
            <Link to='/hotelDashboard/addhotelroom'>New Room</Link> |
            <Link to='/hotelDashboard/managehotelroom'>Manage Room</Link> |
            <Link to='/hotelDashboard/showhotelallboking'>Booking List</Link> |
            <Link to='/hotelDashboard/room-book-pending'>Booking Pending List</Link> |
            <Link to='/hotelDashboard/checkhotelreview'>Check Review</Link> |
            <Link to='/hotelDashboard/hoteltransactionhistory'>Transaction Report</Link> |
            <Link to='/hotelDashboard/hotelsupport'>Support</Link> |
            <Link to='/hotelDashboard/profile'>Profile</Link> |
            <Link to='/login'>Logout</Link>
        </div>
    );
}

export default HotelNavbar;