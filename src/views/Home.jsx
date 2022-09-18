import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export default function Home() {
  const {isLoggedIn, user} = useContext(AuthContext);


  return (
    <div>
     {/* <h1>BikeFinder</h1> */}
        {user && <p>Hello {user.username}</p> }
        {!isLoggedIn && <h4>Sing Up or Login to find your perfect Gravel</h4>}
        {isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/newreview">Add new Review</NavLink></p>}
        {isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/reviews">See all Reviews</NavLink></p>}
        {isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/bikes">Find your Perfect Bike</NavLink></p>}
    </div>
  )
}
