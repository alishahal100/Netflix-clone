import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './signup.css';
import { Auth, firestore } from '../firebase/config';
import { collection, setDoc, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const semail = searchParams.get('email');

  const [email, setEmail] = useState(semail || '');
  console.log('email:', email);
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('creating user with email:', email);
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const userRef = collection(firestore, 'users');
      const newUser = {
        id: user.uid,
        email: email,
        password: password,
      };
      await setDoc(doc(userRef, user.uid), newUser);
      console.log('User details added to Firestore!');
    } catch (error) {
      console.error(error);
    }
    navigate('/signin');
  };

  return (
    <div  className='main-sup'>
      <div>

      
      <div className='navbar-sup'>
        <img
          className='logo-sup'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='Netflix-logo'
        />
      <button onClick={()=>{navigate('/signin')}} className='btn-2-sup'>Sign IN</button>
      </div>
      <div className='content-sup'>
        <div>

        <h1>Create Password To Start Your Membership</h1>
        <h3>
          Just a few more steps and you're done! <br />
          We hate paperwork, too.
        </h3>
        </div>
     
      <div className="form-in">

      <form className='form-sup'>
        <input
          type='email'
          className='inp-sup'
          placeholder={semail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <input
          type='password'
          className='inp-sup'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn-sup' onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Signup;

