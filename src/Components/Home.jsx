// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import '../CSS/Home.css'
import '../App.css'
const Home = (props) =>
{
  Home.propTypes =
  {
    animateCircle:PropTypes.bool.isRequired
  }
    // Animate circle state variable
    
    return(
        // Home Container
        <div className={`home-container ${props.animateCircle ? 'animate-circle' : ''}`}>
        <div className="company-name-container"> {/* Company name container*/}
          <h1 className={`company-name ${props.animateCircle ? 'animate-text' : ''}`}>DURADARS</h1>
        </div>
      </div>
      )}

export default Home;