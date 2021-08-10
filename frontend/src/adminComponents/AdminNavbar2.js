import {Link} from 'react-router-dom';

const AdminNavbar = ()=>{
    return(
        <>
            {/* <!--header menu start--> */}
			<div className="header">
				<div className="header-menu">
					<div className="title">Admin <span>Panel</span></div>
					<div className="sidebar-btn">
					</div>
					<ul>
						{/* <li>{{date("l jS \of F")}}</li> */}
						<li><Link to='/admin/profile'>Profile</Link></li>
						<li><Link to='/login'>Logout</Link></li>
					</ul>
				</div>
			</div>
			{/* <!--header menu end--> */}

			{/* <!--sidebar start--> */}
			<div className="sidebar">
				<div className="sidebar-menu">
					<center className="profile">
                        <img src="{{asset('upload')}}/{{session('image')}}" height="50px" width="50px" />
                        {/* <p>{{session('uname')}}</p> */}
						
						
                    </center>
					<br></br>

					<li className="item">
                        <Link className="menu-btn" to='/admin'>Dashboard</Link>
					</li>

					<li className="item" id="admin">
						<a href="#admin" className="menu-btn">
							<i className="fa fa-briefcase"></i><span>Admin<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
							
                            <Link to='/admin/add-admin'>Add Admin</Link>
							<Link to='/admin/all-admins'>Admin List</Link>
						</div>
					</li>

					<li className="item" id="user">
						<a href="#user" className="menu-btn">
							<i className="fa fa-users"></i><span>User<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/all-users'>User List</Link>
							<Link to='/admin/active-users'>Active User List</Link>
						</div>
					</li>

					<li className="item" id="emp">
						<a href="#emp" className="menu-btn">
							<i className="fa fa-briefcase"></i><span>Employee<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/add-employee'>Add Employee</Link>
                            <Link to='/admin/all-employees'>Employee List</Link>
							<Link to='/admin/active-employees'>Active Employee List</Link>
						</div>
					</li>

					<li className="item" id="hotel">
						<a href="#hotel" className="menu-btn">
							<i className="fa fa-bed"></i><span>Hotel<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/hotels-pending'>Hotel Approval</Link>
							<Link to='/admin/all-hotels'>All Hotels</Link>
							<Link to='/admin/hotel-bookings'>Hotel Bookings</Link>
						</div>
					</li>

					<li className="item" id="transport">
						<a href="#transport" className="menu-btn">
							<i className="fa fa-car"></i><span>Transport<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
							<Link to='/admin/transports-pending'>Transport Approval</Link>
							<Link to='/admin/all-cars'>All Car Companies</Link>
							<Link to='/admin/all-flight'>All Flight Companies</Link>
							<Link to='/admin/car-bookings'>Car Bookings</Link>
							<Link to='/admin/flight-bookings'>Flight Bookings</Link>
						</div>
					</li>

					<li className="item" id="package">
						<a href="#package" className="menu-btn">
							<i className="fa fa-gift"></i><span>Packages<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/package-pending'>Package Approval</Link>
							<Link to='/admin/all-packages'>All Packages</Link>
							<Link to='/admin/package-bookings'>Package Bookings</Link>
							<Link to='/admin/package-status'>Package Status</Link>
						</div>
					</li>

					<li className="item" id="place">
						<a href="#place" className="menu-btn">
							<i className="fa fa-globe"></i><span>Places<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/place-pending'>Place Approval</Link>
							<Link to='/admin/all-places'>All Places</Link>
						</div>
					</li>

					<li className="item" id="accounts">
						<a href="#accounts" className="menu-btn">
							<i className="fa fa-credit-card"></i><span>Accounts<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/admin/income-statement'>Income Statement</Link>
							<Link to='/admin/transaction-history'>Transaction History</Link>
							<Link to='/admin/pending-salary'>Salary Approval</Link>
						</div>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/admin/support'>Support</Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/admin/policy'>Policies</Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/admin/guidelines'>Guidelines</Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/admin/about'>About Us</Link>
					</li>

				</div>
			</div>
			{/* <!--sidebar end--></div> */}
        </>
    );
}

export default AdminNavbar;