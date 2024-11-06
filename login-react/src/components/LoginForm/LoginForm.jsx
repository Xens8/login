import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdFlipCameraAndroid } from "react-icons/md";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
          <h1>RouterOs</h1>
          <div className="input-box">
            <input type="text" placeholder='username'  required/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="text" placeholder='PASSWORD'  required/>
            <FaLock className='icon'/>
          </div>

          <div className="input-box">
            <input type="text" placeholder='IP'  required/>
            <MdFlipCameraAndroid className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me </label>
            <a href="/forgot-password" role="button">Forgot password</a>
          </div>

          <button type='submit'>Login</button>

          <div className='registrer-link'>
          <p>No tienes cuenta? <a href="/register" role="button">Regístrate</a></p>
          </div>
      </form>
    </div>
  )
}

export default LoginForm ;