import './AdminPP.css';

const AdminPrivacy = ({list})=>{

    return(
        <>   

            <ul>
				<li><a href="#"><i class="fa fa-pencil-square-o"></i></a></li>
			</ul>

			<br/>

			<br/>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: list.policy }} />
            </div>

        </>
    );
}

export default AdminPrivacy;

