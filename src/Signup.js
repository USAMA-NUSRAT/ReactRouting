import React from 'react'
import Login from './Login'
import {useNavigate} from "react-router-dom";
import './Signup.css'
function Signup() {
  const navigate=useNavigate();
  const Handler=()=>{
    navigate('/')
  }
  return (
    <div className='main'>
        <div id='Signup' >Sign up</div>
        <form>
        <input type="text"  placeholder="First Name" id='fname'></input>
        <input type="text" placeholder="Last Name" id='lname'></input>
        <input type="text" placeholder="Father Name" id="fathername" ></input>
        <input type='password' placeholder="Enter Password"></input>
        <input type="password" placeholder="Enter Confirm password "></input>
        
        <br/>
         <button onClick={Handler}>Sign up</button>
         </form>
        </div>
  )
}

export default Signup