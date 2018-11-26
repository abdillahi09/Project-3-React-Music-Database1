import React from 'react';
// import React, {Components} from 'react-dom';
// import { Link}  from 'react-router-dom';


//Components
import Banner from '../components/banner';
// import Home from '../components/home';

const Login = (props) => {
    return (
    <div>
        <Banner/>
        <form action="/action_page.php">
            <div className="imgcontainer">
                <img src="" alt="" className="avatar"></img>
            </div>

            <div className="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required></input>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required></input>
                    
                <button type="submit">Login</button>
            </div>

            <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="www.google.com">password?</a></span>
            </div>
        </form>
    </div>
    )
}

export default Login;