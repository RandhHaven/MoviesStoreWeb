import React from 'react'
import './Login.css'
import email from '../resources/images/email.png'
import avatar from '../resources/images/avatar.png'
export const Login = () => {
  return (
    <>
      <div>
        <h1>Login Page</h1>
          <img src={avatar} alt='avatar' />
          <div>
            <img src={email} alt='email' />
            <input type="text" placeholder='user name'/>
          </div>
          <div>
            
            <input type="password" placeholder='password'/>
          </div>
        </div>
        <button className='btn-login'>
          Login
        </button>
        <div>
          <p>
            <a href="#"> Forgot password</a>
          </p>
          <p>
            <a href="#"> Sign up </a>
          </p>
        </div>   
    </>
  )
}