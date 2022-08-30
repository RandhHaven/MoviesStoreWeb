import React from 'react'
//import './components/login/Login.css'
//import email from './resources/images/email'
//import favi from './favicon.svg'
export const Login = () => {
  return (
    <>
      <div>
        <h1>Login Page</h1>
          <div>
            <input type="text" placeholder='user name'/>
          </div>
          <div>
            
            <input type="password" placeholder='password'/>
          </div>
        </div>
        <button>
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