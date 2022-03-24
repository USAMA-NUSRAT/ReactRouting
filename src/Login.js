
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import Signup from "./Signup";
import './Login.css';
function Login(){
  let navigate= useNavigate();
  const[usererror ,setusermessage]=useState(" ");
  const [passerror , setpasserror]=useState(" ");
  let user="";
  let pass="";
  let flag=false;
    const usernamehandler=(e)=>{
    user= e.target.value;
  }
  const passwordhandler=(e)=>{
    pass=e.target.value;
  }
 const submithandler=(e)=>{
e.preventDefault();
console.log(" submit function called")
if(user.length<8){
    setusermessage("user name should be more than 6 character");
    flag=false;
   }
   if(user.length>15){
       setusermessage("user name should be less than 15 character");
       flag=false;
      }
    if(pass.length<8){
      setpasserror("password should be at least 8 character");
      flag=false;
    }
    if(user.length>=8 && user.length<=15 && pass.length>8){
      setusermessage("");
      flag=true;
      navigate('/Profile');
    }
    console.log(flag);
      return flag;
     
}
const  Handler=()=>{
  navigate('/Signup');
}
  return (
    <div className="contain">
     <div className='login'>Login</div>
     <form onSubmit={submithandler}>
     <div className='username'>
       <label>Username</label>
       <input type="text" onChange={usernamehandler}></input>
       </div> 
       <div className='error'>{usererror}</div>
       <div className='passwrd'>
       <label>Password</label>
       <input type="password" onChange={passwordhandler}></input>
       <div className='error'>{passerror}</div>
       </div> 
       <button value  ="Submit" >Let's Go!</button>
       <div className="signup">Or</div>
       <button  className="signup" value  ="Submit" onClick={Handler}>Sign Up</button>
       </form>
    </div>
  );
}
export default Login;