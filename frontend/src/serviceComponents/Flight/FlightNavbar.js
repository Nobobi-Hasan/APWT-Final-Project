import {Link} from 'react-router-dom';

const FlightNavbar = ()=>{
    return(
        <div>
            <Link to='/flightDashboard'>Dashboard</Link> |
            <Link to='/flightDashboard/addflight'>New Airplane</Link> |
            <Link to='/flightDashboard/manageflight'>Manage Airplane</Link> |
            <Link to='/flightDashboard/flighttype'>Airplane Type</Link> |
            <Link to='/flightDashboard/flight-booking-list'>Booking List</Link> |
            <Link to='/flightDashboard/flight-pending-list'>Booking Pending List</Link> |
            <Link to='/flightDashboard/flightavailability'>Ariplane Availability</Link> |
            <Link to='/flightDashboard/checkflightreview'>Check Review</Link> |
            <Link to='/flightDashboard/flighttransactionhistory'>Transaction Report</Link> |
            <Link to='/flightDashboard/flightsupport'>Support</Link> |
            <Link to='/flightDashboard/profile'>Profile</Link> |
            <Link to='/login'>Logout</Link>
        </div>
    );
}

export default FlightNavbar;