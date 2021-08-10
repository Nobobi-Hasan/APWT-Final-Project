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
						<li><Link to='/employee/profile'>Profile</Link></li>
						<li><Link to='/login'>Logout</Link></li>
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
                        <Link className="menu-btn" to='/employee'>Dashboard</Link>
					</li>

                    <li className="item">
                        <Link className="menu-btn" to='/employee/userlist'>Users</Link>
					</li>

					<li className="item" id="package">
						<a href="#package" className="menu-btn">
                        <i className="fa fa-briefcase"></i><span>Package<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/packageAdd'>Package Add</Link>
							<Link to='/employee/package'>Manage Package</Link>
						</div>
					</li>

					<li className="item" id="place">
						<a href="#place" className="menu-btn">
							<i className="fa fa-globe"></i><span>Places<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/placeAdd'>Place Add</Link>
							<Link to='/employee/place'>Manage Place</Link>
						</div>
					</li>

                    <li className="item" id="gallery">
						<a href="#gallery" className="menu-btn">
							<i className="fa fa-globe"></i><span>Gallery<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/gallery'>Add Image</Link>
							<Link to='/employee/galleryManage'>Manage Gallery</Link>
						</div>
					</li>

                    <li className="item" id="salary">
						<a href="#salary" className="menu-btn">
							<i className="fa fa-globe"></i><span>Salary<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/salary'>Generate Salary</Link>
							<Link to='/employee/salary/list'>Salary List</Link>
						</div>
					</li>

                    <li className="item" id="account">
						<a href="#account" className="menu-btn">
							<i className="fa fa-globe"></i><span>Account<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/statementAdd'>Add Income Statement</Link>
							<Link to='/employee/statement'>Income Statement</Link>
                            <Link to='/employee/transactionAdd'>Add Transaction</Link>
                            <Link to='/employee/transaction'>Transaction History</Link>
						</div>
					</li>

                    <li className="item" id="ads">
						<a href="#ads" className="menu-btn">
							<i className="fa fa-globe"></i><span>Advertisement<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/advertisement'>Send Ads</Link>
							<Link to='/employee/advertisement/list'>Manage Ads</Link>
						</div>
					</li>

                    <li className="item" id="promo">
						<a href="#promo" className="menu-btn">
							<i className="fa fa-globe"></i><span>Promos<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/promo'>Send Promo</Link>
							<Link to='/employee/promo/list'>Manage Promo</Link>
						</div>
					</li>

                    <li className="item">
                        <Link className="menu-btn" to='/employee/review'>Review</Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/employee/support'>Support</Link>
					</li>

					<li className="item">
                        <Link className="menu-btn" to='/employee/guideline'>Guidelines</Link>
					</li>
                    <li className="item" id="faq">
						<a href="#faq" className="menu-btn">
							<i className="fa fa-globe"></i><span>FAQ<i className="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div className="sub-menu">
                            <Link to='/employee/faq'>Add in FAQ</Link>
							<Link to='/employee/faq/list'>Manage FAQ</Link>
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