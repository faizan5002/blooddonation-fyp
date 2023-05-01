import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginf from '../images/loginf.png';
import axios from 'axios';

const Signin = ({ setUser }) => {
  const navigate = useNavigate();
  const [user, setUserState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post('http://localhost:9002/signin', user).then((res) => {
      alert(res.data.message);
      setUser(res.data.user);
      console.log('setUser:', setUser);
      console.log('Navigate:', navigate);
      navigate('/userprofile');
    });
  };
  return (
    <>
      <div id='box-bg2'>
        <div id='login-box2'>
          <div className='left2'>
            <h1 className='signinH2'>Login</h1>
            <br />

            <input type='text' name='email' value={user.email} placeholder='E-mail' onChange={handleChange} />
            <input type='password' name='password' value={user.password} placeholder='Password' onChange={handleChange} />

            <input type='submit' name='signup_submit' value='Login' onClick={login} />
            <button type='submit' className='frgt-pass'> Forgot Password</button>
          </div>

          <div class='verticle-line2'></div>

          <div class='right2'>
            <img className='img2' src={loginf} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
