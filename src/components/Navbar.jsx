import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className='Logo'><img width="250px" src='./images/Logo.png' alt="logo"></img></div>
        <div>
          <ul>
            <li><button className='unstyle' onClick={() => navigate(-1)}><span class="material-symbols-outlined">arrow_back</span></button></li>
            <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/"><img src='/images/Home.png' alt='home'></img></NavLink></li>
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/login">Login</NavLink></li>}
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/signup">Sign up</NavLink></li>}
            {isLoggedIn && <li><button className='unstyle' onClick={() => logOutUser()}><span class="material-symbols-outlined">logout</span></button></li>}
          </ul>
        </div>
      </nav>
    </div>
  )
}
