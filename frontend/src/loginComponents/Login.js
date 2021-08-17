import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../adminComponents/Admin.css';

const Login = ({callback}) => {

    //const { id: eid } = useParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    // ALogin Calling function
    const loginCall = async (lData) => { 

        console.log(lData);

        const axios = require('axios').default;

        const type = await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/project-login',
            //data: JSON.stringify(newUser)
            data:lData,
        });

        const check = type.data;       
        return check;

    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const check = await loginCall({ username: username, password: password });
        // callback({ id: check.id});
        callback({id:check});

        console.log(check);
        console.log(check.type);


        if(check.type=='admin')
            history.push('/admin/home');
        else if(check=='emp')
            history.push('/employee');
        else if(check=='user')
            history.push('/user');
        else if(check=='car')
            history.push('/car');
        else if(check=='flight')
            history.push('/flight');
        else if(check=='hotel')
            history.push('/hotel');
       
    };

    
    return (

        <div className ="login-form">

            <h1>Login</h1>
            <br/>

            <form onSubmit={onSubmit}>

                <i class="fa fa-user icon"></i>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder = "Username" />
                <br/>
                <p> </p>
                <br/>

                <br/>

                <i class="fa fa-unlock-alt icon"></i>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder = "Password" />
                <br/>
                <p> </p>
                <br/>
                <br/>
                
                <input type="submit" value="Login" id="submit" />
                <br/>
                <p>.</p>

                <a href="#" title="" class="anchor">Not yet registered?</a>

            </form>
            
        </div>
    );
};

export default Login;