import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className='Logo'><img width="250px" src='https://res.cloudinary.com/ds0q8dpvh/image/upload/v1664016869/bikeFinder/Logo_anovv9.png' alt="logo"></img></div>
        <div>
          <ul>
            <li><button className='unstyle' onClick={() => navigate(-1)}><span className="material-symbols-outlined">arrow_back</span></button></li>
            <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/"><img src='https://res.cloudinary.com/ds0q8dpvh/image/upload/v1664016506/bikeFinder/Home_pz3d8n.png' alt='home'></img></NavLink></li>
            {/* {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/login">Login</NavLink></li>}
            {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/signup">Sign up</NavLink></li>} */}
            {isLoggedIn && <li><button className='unstyle' onClick={() => logOutUser()}><span className="material-symbols-outlined">logout</span></button></li>}
          </ul>
        </div>
      </nav>
    </div>
  )
}
