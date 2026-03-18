import React from "react";
import logo from "../../assets/logo.png"
import styles from "./AdminLogin.module.css"


function AdminLogin(){
    return(
        <div className={styles.adminContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.wave}></div>
                 <div className={styles.wave}></div>
                  <div className={styles.wave}></div>
            </div>
            <div className={styles.rightContainer}>
                <img src={logo} alt="admin logo" />
                <input className={styles.InputCln} placeholder="Email or Admin name" type="text" />
                <input className={styles.InputCln} placeholder="Password" type="text" />
                <button className={styles.submitBtn} >Log In</button>
            </div>
        </div>
    )
}
export default AdminLogin;
