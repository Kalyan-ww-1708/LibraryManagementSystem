import { useState } from "react";
import "./AdminRegister.css";
import logo from "./logoImage.png";

function AdminRegister(){
    const [adminName,setAdminName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async ()=>{
        try{
            const res = await axios.post(" http://localhost:7033/api/admin/register",
                {
                    AdminName:adminName,
                    Email:email,
                    Password :password
                }
            )
            
            // console.log(adminName);
            // console.log(email);
            // console.log(password);
            console.log(res.data);
        }catch (error) {
      console.error(error);
    }
    }
    return(
        <div className="admin-container">
            <div className="left-container">
                <div class="stars"></div>
                <div class="shooting-star"></div>
                <div class="shooting-star"></div>
                <div class="shooting-star"></div>
                <div class="shooting-star"></div>
                <div class="shooting-star"></div>
            </div>
            <div className="right-container">
                <img src={logo} alt="Logo image"></img>
                <span>Smart Library</span>
                <input name="AdminName" type="text" placeholder=" Admin Name " onChange={(e) => setAdminName(e.target.value)}/>
                <input name="Email" type="text" placeholder=" Email " onChange={(e) => setEmail(e.target.value)}/>
                <input name="PhoneNumber" type="text" placeholder=" Phone Number " onChange={(e) => setPassword(e.target.value)}/>
                {/* <input name="Password" type="password" placeholder=" Password "/> */}
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                <span>Don't Have an Account ? Create One</span>
                <span>Forget your Password?</span>
            </div>
        </div>
    )
}

export default AdminRegister;