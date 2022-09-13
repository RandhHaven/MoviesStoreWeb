import React from 'react'
import './Register.css'
import avatar from '../resources/images/avatar.png'

export const Register = () => {
    return (
      <>
        <div className='register-body'>
          <div className='register-box'>
            <div>
              <div className="register-imgs">
                <div className="container-image">
                  <img src={avatar} alt="profile" className="register-profile"/>
                </div>
              </div>
              <div>
                <h1>Register Page</h1>
                <div>
                  <label className='register-email' alt='email' Text="hola" />
                  <input className="register-input-text" type="text" placeholder='user name'/>
                </div>
                <div className="register-pass-div">
                  <label value="hola" >hola</label>
                  <input className="register-input-text" type="password" placeholder='password'/>
                </div>
                <div className="register-pass-div">
                  <label className='register-pass' alt='email' />
                  <input className="register-input-text" type="password" placeholder='repeat password'/>
                </div>
                <div className='row'>
                  <button className="register-button" type="submit" name="submit">Register</button>
                  <button className="register-button" type="cancel" name="cancel">Cancel</button>
                </div>
               
              </div>
            </div>            
          </div>
        </div>
      </>
    )
  }