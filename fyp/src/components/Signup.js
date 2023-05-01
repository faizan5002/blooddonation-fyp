
import React,{useState} from 'react'
import signin from "../images/signupff.png"
import axios from "axios";

const Signup = () => {
    const[user, setUser]= useState({
        name:"",
        email:"",
        password:"",
        retypePassword:"",
        phone:""
    })
  
    const handleChange = e =>{
        const {name, value} = e.target
        console.log(name, value)
        setUser({
          ...user,
          [name]:value
        })
      }
      const register =()=>{
        const{name, email, password,retypePassword,phone}= user
        if(name && email && phone && password && (password === retypePassword)){
          
         axios.post("http://localhost:9002/signup",user)
         .then(res=>alert(res.data.message))
        }else{
          alert("Invalid Input")
        }
      
      }


  return (
    

    <>

  <div id="box-bg">
  <div id="login-box">

  <div className="left">
    {console.log("User",user)}
    <h1 className='signupH1'>Sign Up</h1>
    
    <input type="text" name="name" value={user.name} placeholder="Username" onChange={handleChange}/>
    <input type="text" name="email" value={user.email} placeholder="E-mail" onChange={handleChange} />
    <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
    <input type="password" name="retypePassword"value={user.retypePassword} placeholder="Retype password" onChange={handleChange}/>
    <input type="text" name="phone" value={user.phone} placeholder="Phone" onChange={handleChange}/>
  
    <input type="submit" name="signup_submit" onClick={register} value="Register" />
  </div>

  <div class="verticle-line">
   </div>
  
  <div class="right">
    <img className='img1' src={signin} alt="" />
    </div>
  </div>
  </div>

    </>
  )
}

export default Signup
