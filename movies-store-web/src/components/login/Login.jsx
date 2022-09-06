import React from 'react'
import './Login.css'
import email from '../resources/images/email.jpg'
import password from '../resources/images/pass.png'
import avatar from '../resources/images/avatar.png'
export const Login = () => {
  return (
    <>
      <div className='login-body'>
        <div className='login-box'>
          <div>
            <div className="login-imgs">
              <div className="container-image">
                <img src={avatar} alt="profile" className="login-profile"/>
              </div>
            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img className='login-email' src={email} alt='email' />
                <input className="login-input-text" type="text" placeholder='user name'/>
              </div>
              <div className="login-pass-div">
                <img className='login-pass' src={password} alt='email' />
                <input className="login-input-text" type="password" placeholder='password'/>
              </div>
              <div className="login-button">
                <button>Login</button>
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
    </>
  )
}