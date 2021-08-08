import {Link} from 'react-router-dom';

const CarNavbar = ()=>{
    return(
        <div>
            <Link to='/carDashboard'>Dashboard</Link> |
            <Link to='/carDashboard/addcar'>New Car</Link> |
            <Link to='/carDashboard/managecar'>Manage Car</Link> |
            <Link to='/carDashboard/cartype'>Car Type</Link> |
            <Link to='/carDashboard/car-booking-list'>Booking List</Link> |
            <Link to='/carDashboard/car-pending-list'>Booking Pending List</Link> |
            <Link to='/carDashboard/caravailability'>Car Availability</Link> |
            <Link to='/carDashboard/checkcarreview'>Check Review</Link> |
            <Link to='/carDashboard/cartransactionhistory'>Transaction Report</Link> |
            <Link to='/carDashboard/carsupport'>Support</Link> |
            <Link to='/carDashboard/profile'>Profile</Link> |
            <Link to='/login'>Logout</Link>
        </div>
    );
}

export default CarNavbar;