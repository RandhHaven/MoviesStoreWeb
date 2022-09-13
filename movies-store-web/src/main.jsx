import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './components/login/Login'
import { Register } from './components/register/Register'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
)
