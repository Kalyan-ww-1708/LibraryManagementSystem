// import React, { useState } from "react";
// import axios from "axios";
// import logo from "../../assets/logo.png"
// import styles from  "./AdminRegister.module.css"
// function AdminRegister(){
//     const [adminName,setAdminName] = useState("")
//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
//     const [confirmPassword,setConfirmPassword] = useState("")

//     const  handleClick = async()=>{
//         try{
//             if(password !== confirmPassword){
//                 alert("Passwords don't match")
//                 return;
//             }
//             const res = await axios.post(" https://localhost:7033/api/admin/register",{

//             AdminName : adminName,
//             Email :email,
//             password : password 
//             })
//             console.log(res.data)
//             alert("Login Sucessful")
//         }
//          catch(error){
//             console.log(error)
//         }
        

//     }
//     return(
//         <div className={styles.adminContainer}>
//              <div className={styles.leftContainer}>
//                 <div className={styles.starts}></div>
//                 <div className={styles.shootingStar}></div>
//                 <div className={styles.shootingStar}></div>
//                 <div className={styles.shootingStar}></div>
//                 <div className={styles.shootingStar}></div>
//                 <div className={styles.shootingStar}></div>
//             </div>
//             <div className={styles.rightContainer}>
//                 <img src={logo} alt="Here is the logo" />
//                 <span> Library Management</span>
//                 <input className={styles.inputCln} type="text" placeholder=" Admin Name" value={adminName} onChange={(e)=> setAdminName(e.target.value)}/>
//                 <input className={styles.inputCln} type="Email" placeholder=" Email " value={email} onChange = {(e)=> setEmail(e.target.value)}/>
//                 <input className={styles.inputCln} type="Password" placeholder="Passoword"  value={password} onChange = {(e)=> setPassword(e.target.value)}/>
//                 <input className={styles.inputCln} type="Password" placeholder="Confirm Password"  value={confirmPassword} onChange = {(e)=> setConfirmPassword(e.target.value)}/>
//                 <button className={styles.submitBtn} onClick={handleClick}>Submit</button>
//                 <span>Already have an Accountt?Sign In</span>
//             </div>
//         </div>
//     )

// }
// export default AdminRegister;





import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import styles from "./scrap.module.css";

function AdminRegister() {
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      const res = await axios.post(
        "https://localhost:7033/api/admin/register",
        {
          AdminName: adminName,
          Email: email,
          Password: password,
        }
      );

      console.log(res.data);
      alert("Registration Successful");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className={styles.adminContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.stars}></div>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar}></div>
      </div>
      <div className={styles.rightContainer}>
        <img src={logo} alt="logo" />
        <span className={styles.title}>Library Management</span>

        <input className={styles.inputCln} type="text" placeholder="Admin Name"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />

        <input className={styles.inputCln} type="email" placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input className={styles.inputCln} type="password" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className={styles.inputCln} type="password" placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className={styles.submitBtn} onClick={handleClick}> Register </button>

        <span className={styles.footerText}>Already have an account? Sign In</span>
      </div>
    </div>
  );
}

export default AdminRegister;