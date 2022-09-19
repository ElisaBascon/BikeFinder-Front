import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AllReviews from '../components/AllReviews';
import Reviews from './reviews/Reviews';

export default function Home() {
  const {isLoggedIn, user} = useContext(AuthContext);


  return (
      <div className='grid-container'>
        <div className='item-1'>
          {user && <p className='Toast'>Hi {user.username}</p> }
          {!isLoggedIn && <p className='Toast'>Sing Up or Login to find your perfect Gravel</p>}
          {!isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/login">Login</NavLink></p>}
          {!isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/signup">Sign up</NavLink></p>}
          {isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/newreview">ADD NEW REVIEW</NavLink></p>}
          {isLoggedIn && <p>SEE MY BIKES</p>}
          {/* {isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/reviews">SEE ALL REVIEWS</NavLink></p>} */}
        </div>

        <div className='item-2'>
          {isLoggedIn && <p className='centered-item'><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/bikes">FIND YOUR PERFECT BIKE</NavLink></p>}
        </div>

        <div className='item-3'>
          <div class="marquee">
            <div>
              <span> · Take a look at the reviews · Find valuable information · Solve all your doubts · </span>
              <span> · Take a look at the reviews · Find valuable information · Solve all your doubts · </span>
              <Reviews />
            </div>
          </div>
        </div>

      </div>

  )
}
