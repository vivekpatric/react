import React,{useState} from "react"; 
import fb from "../images/fb.svg"
import google from "../images/google.svg"
import Abstraction from "../images/Abstraction.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";



const FormValidation = () => {
    // let [name, setName] = useState("")
    // let [email, setEmail] = useState("")
    // let [password, setPassword] = useState("")
    // let [confirmPassword, setConfirmPassword] = useState("")
    let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    console.log("user", user)

    function validateForm(event){
        event.preventDefault()
        if(user.name.length < 3 || user.name.length > 30){
            setSuccess("")
           return  setError("Name should be min 3 char and max 30 char")
            
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("")
            return setError("Email should contain @ and .")
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("")
            return setError("Password should be min 8 char and max 15 char")
        }
        else if(user.password !== user.confirmPassword){
            setSuccess("")
            return setError("Password and Confirm Password should be same")
        }

        setSuccess("Successfully Created!")
        setError("")

    }

    return(
        
        <div className="cont">
            <div className="img-div">
            <img src={Abstraction} alt="Abstraction's Pic" />
            </div>
            <div className="cont2">
            <div className="top">
            <h1>Create Account</h1>
            <button className="btn1"><img src={google} alt="google's Pic" /> Signup With Google</button>
            <button className="btn1"><img src={fb} alt="fb's Pic" /> Signup With Facebook</button>
            
            <h2 className="or">--OR--</h2>
            </div>
           
           <div className="form">
           <form onSubmit={validateForm}>
                <input type="text" placeholder="Full Name" 
                    onChange={(event)=>setUser({...user, name: event.target.value})}
                />
                <input type="email" placeholder="Email Address" 
                    onChange={(event)=>setUser({...user, email: event.target.value})}
                />
                <div className="password-input">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    onChange={(event) =>
      setUser({ ...user, password: event.target.value })
    }
  />
  <FontAwesomeIcon
    icon={showPassword ? faEyeSlash : faEye}
    className="password-toggle"
    onClick={() => setShowPassword(!showPassword)}
  />
</div>

<div className="password-input">
  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm Password"
    onChange={(event) =>
      setUser({ ...user, confirmPassword: event.target.value })
    }
  />
  <FontAwesomeIcon
    icon={showConfirmPassword ? faEyeSlash : faEye}
    className="password-toggle"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
  />
</div>


                <button className="btn2" type="Submit" >Create Account</button>
            </form>
             {
                error && <h4 className="error-text">Error: {error}</h4>
            }
            {
                success && <h4 className="success-text">{success}</h4>
            }
           </div>
           
           
            </div>
            
        </div>
    )

}

export default FormValidation;