import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import notify from "../../assets/notificationIcon.png"
import profile from "../../assets/Profile.png"
function Navbar(){

    return(
        <div className="nav-container">
            <div className="nav-left">
                <img  className="logo-image" src={logo} alt = "temporary logo of the website"/>
                <h3> Smart Library</h3>
                <img className="notification-image" src = {notify} />
            </div>

            <div className="nav-right">
                <img  className = "profile-image" src={profile} />


            </div>
        </div>
    )

}

export default Navbar;