import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Reviews from './reviews/Reviews';

export default function Home() {
  const {isLoggedIn, user} = useContext(AuthContext);

  return (
      <div className='grid-container'>
        <div className='item-1'>

          {!isLoggedIn && <p><Link to="/login">Login</Link></p>}
          {!isLoggedIn && <span className='login-signup-link'>⚡</span>}
          {!isLoggedIn && <p className='login-signup-link' ><Link to="/signup">Sign Up</Link></p>}

        {!isLoggedIn && <div className="textcirc">
          <svg x="0px" y="0px"
              viewBox="0 0 100 100" fill="transparent">
          <path id="circt" d="M50,93C26.25,93,7,73.75,7,50S26.25,7,50,7s43,19.25,43,43c0,23.58-18.98,42.73-42.49,43
              "/>
          <text><textPath href="#circt" startOffset="0%">
          <tspan className="white">Sign Up or Login to find your perfect Gravel
          </tspan></textPath>
          </text>
          </svg>
        </div>}

        <div>
          {user && <p className='Toast'>Hi {user.username}</p> }
          {isLoggedIn && <p><Link className={(element) => element.isActive ? 'selected' : ''} to={`/favorites`}>FAVORITE BIKES</Link></p>}
          {isLoggedIn && <p><Link className={(element) => element.isActive ? 'selected' : ''} to="/newreview">NEW REVIEW</Link></p>}
          {isLoggedIn && <p><Link className={(element) => element.isActive ? 'selected' : ''} to={`/reviews/mine`}>MY REVIEWS</Link></p>}
        </div>

        </div>

        <div className='item-2'>
          {isLoggedIn && <button className='Find-Bikes'><Link className={(element) => element.isActive ? 'selected' : ''} to="/bikes">FIND YOUR <br></br>PERFECT BIKE</Link></button>}
        </div>

        <div className='item-3'>
          {isLoggedIn && <div className="wrapper">
              <div className="mover">
              ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS
              </div>
              <div className="mover">
              ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS    
              </div>
              <div className="mover">
              ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS  
              </div>
              <div className="mover">
              ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS ツ SEE ALL REVIEWS          
              </div>
            </div>}
            {isLoggedIn && <Reviews/>}
            {!isLoggedIn && <div className="wrapper">
              <div className="mover-1">
              ☞Start here your Gravel Adventure and share it☜
              </div>
              <div className="mover">
              ☞Start here your Gravel Adventure and share it☜
              </div>
              <div className="mover-1">
              ☞Start here your Gravel Adventure and share it☜
              </div>
              <div className="mover">
              ☞Start here your Gravel Adventure and share it☜    
              </div>
            </div>}
            {!isLoggedIn && <div className='container-reviews-nologin'>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091012/bikeFinder/1_ws9awb.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091013/bikeFinder/2_kwzeul.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091013/bikeFinder/3_nvh5mi.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091013/bikeFinder/4_oickma.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091013/bikeFinder/5_sxv2cb.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091013/bikeFinder/6_wriwcz.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091014/bikeFinder/7_t6ulyt.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091013/bikeFinder/8_o20m2u.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091013/bikeFinder/9_mcb49t.jpg" alt="imagenportada"/>
              <img src="https://res.cloudinary.com/ds0q8dpvh/image/upload/v1666091014/bikeFinder/10_jygndc.jpg" alt="imagenportada"/>
            </div>}
        </div>

      </div>

  )
}
