import {Link} from 'react-router-dom';

const EmployeeNavbar = ()=>{
    return(
        <div>
            <>
            {/* <!--header menu start--> */}
			<div className="header">
				<div className="header-menu">
					<div className="title">Employee <span>Dashboard</span></div>
					<div className="sidebar-btn">
					</div>
					<ul>
					<li><Link to='/employee/profile'><i class="fa fa-user-circle"></i></Link></li>
						<li><Link to='/login'><i class="fa fa-sign-out" aria-hidden="true"></i></Link></li>
					</ul>
				</div>
			</div>
			{/* <!--header menu end--> */}

			{/* <!--sidebar start--> */}
			<div className="sidebar">
				<div className="sidebar-menu">
					<center className="profile">
                        <img src="{{asset('upload/emp.png')}}" height="50px" width="50px" alt= ""/>
                        {/* <p>{{session('uname')}}</p> */}
						
						
                    </center>
					<br></br>

					<li className="item">
                        <Link className="menu-btn" to='/employee'><i class="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></Link>
					</li>

                    <li className="item">
                        <Link className="menu-btn" to='/employee/userlist'><i class="fa fa-user" aria-hidden="true"></i><span>Users</span></Link>
					</li>

					<li className="item" id="package">
						<a href="#package" className="menu-btn">
                        <i className="fa fa-briefcase"></i><span>Package<i class="fa fa-chevron-down drop-down" aria-hidden="true"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/packageAdd'><i class="fa fa-puzzle-piece"></i><span>Add Package</span></Link>
							<Link to='/employee/package'><i class="fa fa-list"></i><span>Manage Package</span></Link>
						</div>
					</li>

					<li className="item" id="place">
						<a href="#place" className="menu-btn">
							<i className="fa fa-globe"></i><span>Places<i className="fa fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/placeAdd'><i class="fa fa-puzzle-piece"></i><span>Add Place</span></Link>
							<Link to='/employee/place'><i class="fa fa-list"></i><span>Manage Place</span></Link>
						</div>
					</li>

                    <li className="item" id="gallery">
						<a href="#gallery" className="menu-btn">
							<i className="fa fa-camera"></i><span>Gallery<i className="fa fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/gallery'><i className="fa fa-plus"></i><span>Add Image</span></Link>
							<Link to='/employee/gallery/manage'><i className="fa fa-image"></i><span>Manage Gallery</span></Link>
						</div>
					</li>

                    <li className="item" id="salary">
						<a href="#salary" className="menu-btn">
							<i className="fa fa-bank"></i><span>Salary<i className="fa fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/salary'><i className="fa fa-plus"></i><span>Generate Salary</span></Link>
							<Link to='/employee/salary/list'><i className="fa fa-list"></i><span>Salary List</span></Link>
						</div>
					</li>

                    <li className="item" id="account">
						<a href="#account" className="menu-btn">
							<i className="fa fa-credit-card"></i><span>Account<i className="fa fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/statementAdd'><i className="fa fa-plus"></i><span>Add Income Statement</span></Link>
							<Link to='/employee/statement'><i className="fa fa-usd"></i><span>Income Statement</span></Link>
                            <Link to='/employee/transactionAdd'><i className="fa fa-plus"></i><span>Add Transaction</span></Link>
                            <Link to='/employee/transaction'><i className="fa fa-money"></i><span>Transaction History</span></Link>
						</div>
					</li>

                    <li className="item" id="ads">
						<a href="#ads" className="menu-btn">
							<i className="fa fa-tv"></i><span>Advertisement<i className="fa fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/advertisement'><i className="fa fa-paper-plane"></i><span>Send Ads</span></Link>
							<Link to='/employee/advertisement/list'><i className="fa fa-list"></i><span>Manage Ads</span></Link>
						</div>
					</li>

                    <li className="item" id="promo">
						<a href="#promo" className="menu-btn">
							<i className="fa fa-envelope-open"></i><span>Promos<i className="fa fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/promo'><i className="fa fa-paper-plane"></i><span>Send Promo</span></Link>
							<Link to='/employee/promo/list'><i className="fa fa-list"></i><span>Manage Promo</span></Link>
						</div>
					</li>

                    <li className="item">
                        <Link className="menu-btn" to='/employee/review'><i className="fa fa-star"></i><span>Review</span></Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/employee/support'><i className="fa fa-envelope"></i><span>Support</span></Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/employee/guideline'><i className="fa fa-book"></i><span>Guidelines</span></Link>
					</li>
                    <li className="item" id="faq">
						<a href="#faq" className="menu-btn">
							<i className="fa fa-question"></i><span>FAQ<i className="fa fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/faq'><i className="fa fa-puzzle-piece"></i><span>Add in FAQ</span></Link>
							<Link to='/employee/faq/list'><i className="fa fa-list"></i><span>Manage FAQ</span></Link>
						</div>
					</li>

				</div>
			</div>
			{/* <!--sidebar end--></div> */}
        </>
        </div>
    );
}

export default EmployeeNavbar;