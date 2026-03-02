import React from "react";
import logo from '../../assets/logo.png'
import "./LoginPage.css"
function LoginPage(){

    return(
        <div className="login-container">
            <div className="left-container">
                Here comes some animations
            </div>
            <div className="right-container">
                <img className="logo" src={logo} alt="Logo on the login page" />
                <input name="Email" placeholder="Enter your email" />
                <input name="Password" placeholder="Enter your password" />
                <span>Do not have an account? Create One</span>
                <span>Forget Password?</span>
            </div>
        </div>
    )

}
export default LoginPage;