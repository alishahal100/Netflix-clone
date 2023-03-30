import React from 'react'
import NavBar from '../navBar/NavBar'
import './Getstarted.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Getstarted() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
const [signupEmail, setSignupEmail] = useState("");

  return (
    
    <div className='main'>
        <div className="fade_bottom">
        
            </div>
        <div className='transparent-layer'></div>
        <div className='navbar1'>
        <img className='logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix-Logo" />
        
         <select className="language-dropdown" >
        
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
           </select>
        <button onClick={()=>{
          navigate('/signin')
        }}  className='btn-1-in'>Sign In</button>       
    </div>
    <div className="content1-get">
            <h1 className='head1'>Unlimited movies, TV shows and more.</h1>
            <h4 className='head4'>Watch anywhere. Cancel anytime.</h4>
            <h3 className='head3'>Ready to watch? Enter your email to create or restart your membership.</h3>

        </div>
        <div className="input-1">
          <form  className='form-get'>

         <input className='inp1' type="email" placeholder='Enter Email Address' value={email}
        onChange={(e)=>{
          setEmail(e.target.value);
          setSignupEmail(e.target.value);
        }} />

        <button onClick={()=>{
          navigate(`/signup?email=${encodeURIComponent(signupEmail)}`);
        }} className='btn-get'>Get Started </button>

          </form>
        </div>
    </div>
  )
}

export default Getstarted