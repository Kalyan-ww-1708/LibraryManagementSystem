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
                <span> Smart Library</span>
                <img className="notification-image" src = {notify} alt="Notification button" onClick={()=>alert("Notification button is clicked")} />
            </div>

            <div className="nav-right">
                <img  className = "profile-image" src={profile} />


            </div>
        </div>
    )

}

export default Navbar;