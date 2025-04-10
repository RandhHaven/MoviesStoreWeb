import './Login.css'
import emailsrc from '../resources/images/email.jpg'
import passwordsrc from '../resources/images/pass.png'
import avatar from '../resources/images/avatar.png'
import React, { useState } from 'react';
import HomeSite from '../home/HomeSite';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here, such as making an API call to validate the credentials
    // For simplicity, we'll just check the username and password locally
    if (username === 'admin' && password === 'password') {

      setIsLoggedIn(true);
    } else {
      handleLogout();
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <HomeSite />
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <div className='login-body'>
        <div className='login-box'>
          <div>
            <div className="login-imgs">
              <div className="container-image">
                <img src={avatar} alt="profile" className="login-profile"/>
              </div>
            </div>
            <div>
              <p className='login-tittle'> Movies Store </p>
              <div>
                <img className='login-email' src={emailsrc} alt='email' />
                <input className="login-input-text" type="text" value={username} onChange={handleUsernameChange} placeholder='user name'/>
              </div>
              <div className="login-pass-div">
                <img className='login-pass' src={passwordsrc} alt='email' />
                <input className="login-input-text" type="password" value={password} onChange={handlePasswordChange} placeholder='password'/>
              </div>
              <div className="login-button">
                <button type="submit" name="submit">Login</button>
              </div>
              <div>
                <p className="login-link">
                  <a href="#">Forgot password ?</a>
                </p>
                <p className="login-link">
                  <a href="#">Sign Up</a>
                </p>
              </div> 
            </div>
          </div>            
        </div>
      </div>
    </form>
  )
}