import {Link} from 'react-router-dom';

const EmployeeNavbar = ()=>{
    return(
        <div>
            <Link to='/employee'>Dashboard</Link> |
            <Link to='/employee/userlist'>Users</Link> |
            <Link to='/employee/packageAdd'>Add Package</Link> |
            <Link to='/employee/package'>Manage Package</Link> |
            <Link to='/employee/placeAdd'>Add Place</Link> |
            <Link to='/employee/place'>Manage Place</Link> |
            <Link to='/employee/gallery'>Add Image</Link> |
            <Link to='/employee/galleryManage'>Manage Album</Link> |
            <Link to='/employee/salary'>Generate Salary</Link> |
            <Link to='/employee/salary/list'>Salary List</Link> |
            <Link to='/employee/statementAdd'>Add Income Statement</Link> |
            <Link to='/employee/statement'>Income Statement</Link> |
            <Link to='/employee/transactionAdd'>Add in Transaction History</Link> |
            <Link to='/employee/transaction'>Transaction History</Link> |
            <Link to='/employee/advertisement'>Send Advertisement</Link> |
            <Link to='/employee/advertisement/list'>Advertisement List</Link> |
            <Link to='/employee/promo'>Send Promo</Link> |
            <Link to='/employee/promo/list'>Promo List</Link> |
            <Link to='/employee/Review'>Review</Link> |
            <Link to='/employee/support'>Support</Link> |
            <Link to='/employee/guideline'>Guideline</Link> |
            <Link to='/employee/faq'>FAQ</Link> |
            <Link to='/employee/faq/list'>FAQ List</Link> |
            <Link to='/employee/profile'>Profile</Link> |
            <Link to='/login'>Logout</Link>
        </div>
    );
}

export default EmployeeNavbar;