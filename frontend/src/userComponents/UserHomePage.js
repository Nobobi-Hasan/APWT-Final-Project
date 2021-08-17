import {Link} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css'; 
const UserHomePage = ()=>{
    return(
                <>

                    <div class="container">
                        <input placeholder="Search Hotel" class="js-search" type="text"></input>
                        <i class="fa fa-search"></i>
                    </div>

                    <a class="btn btn-primary btn-icon-up-download">Download</a>
                    <a class="btn btn-primary btn-icon-up-booked">Booked</a>

                    
                    
                    

                </>
            );
        }

export default UserHomePage;