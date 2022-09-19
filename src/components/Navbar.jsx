import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className='Logo'><img width="250px" src='./images/Logo.png' alt="logo"></img></div>
        <div>
          <ul>
            <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/">Home</NavLink></li>
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/login">Login</NavLink></li>}
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/signup">Sign up</NavLink></li>}
            <li><button onClick={() => navigate(-1)}>Go back</button></li>
            {isLoggedIn && <li><button onClick={() => logOutUser()}>Log out</button></li>}
          </ul>
        </div>
      </nav>
    </div>
  )
}
