import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export default function Home() {
  const {isLoggedIn, user} = useContext(AuthContext);


  return (
    <div>
    <h1>Home</h1>
    {user && <p>Hello {user.username}</p> }
    {isLoggedIn && <NavLink className={(element) => element.isActive ? 'selected' : ''} to="/create">Add new Review</NavLink>}

    </div>
  )
}
