import React from 'react'
import { useState } from 'react'
import {signInWithEmailAndPassword} from '../../../node_modules/firebase/auth'
import { Auth } from '../firebase/config'
import './signin.css'
import { useNavigate } from 'react-router-dom'
function Signin() {

  const [email ,setEmail] = useState()
  const [password ,setPassword] = useState()
  const navigate = useNavigate()
  const handleSignIn= async(e)=>{
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        Auth,
        email,
        password
      );
      const user = userCredentials.user;
      if(user){
        alert('welcome')
        navigate('/home')
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
    
  }
  return (

        <div className='main'>
        <div className="fade_bottom">
        
            </div>
        <div className='transparent-layer'></div>
        <div className='navbar-in'>
        <img className='logo-in' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix-Logo" />
        </div>
        <div className="sign">

        <div className="sign-in">
            <h1>Sign In</h1>
            <input className='inp' type="email" placeholder='Enter Email Address' required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className='inp' type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required  />
            <button onClick={handleSignIn}  className='btn-3'>Sign In</button>
       </div>  
        </div>
    </div>
  )
}

export default Signin