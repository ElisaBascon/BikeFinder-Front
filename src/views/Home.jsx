import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Reviews from './reviews/Reviews';

export default function Home() {
  const {isLoggedIn, user} = useContext(AuthContext);


  return (
      <div className='grid-container'>
        <div className='item-1'>

          <div className='LogIn-SignUp' >
            {!isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/login">Login</NavLink></p>}
            {!isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/signup">Sing Up</NavLink></p>}
          </div>

          {!isLoggedIn && <div class="textcirc">
            <svg x="0px" y="0px"
              viewBox="0 0 100 100" fill="transparent">
            <path id="circt" d="M50,93C26.25,93,7,73.75,7,50S26.25,7,50,7s43,19.25,43,43c0,23.58-18.98,42.73-42.49,43
              "/>
            <text><textPath href="#circt" startOffset="0%">
            <tspan class="white">Sing Up or Login to find your perfect Gravel
            </tspan></textPath>
            </text>
            </svg>
          </div>}
          
          <div>
            {user && <p className='Toast'>Hi {user.username}</p> }
            {isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to={`/favorites`}>FAVORITE BIKES</NavLink></p>}
            {isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/newreview">NEW REVIEW</NavLink></p>}
            {isLoggedIn && <p><NavLink className={(element) => element.isActive ? 'selected' : ''} to={`/reviews/mine`}>MY REVIEWS</NavLink></p>}
          </div>

        </div>

        <div className='item-2'>
          {isLoggedIn && <button className='Find-Bikes'><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/bikes">FIND YOUR <br></br>PERFECT BIKE</NavLink></button>}
        </div>

        <div className='item-3'>
          {isLoggedIn && <div class="wrapper">
              <div class="mover">
              ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS
              </div>
              <div class="mover">
              ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS    
              </div>
              <div class="mover">
              ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS  
              </div>
              <div class="mover">
              ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS          
              </div>
            </div>}
            {isLoggedIn && <Reviews/>}
        </div>

      </div>

  )
}
