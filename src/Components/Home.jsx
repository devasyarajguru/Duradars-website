import { useState, useEffect } from 'react';
import CyberImage from "../assets/cyber-image.jpg"
import PropTypes from 'prop-types'; 
import '../CSS/Home.css'
import '../App.css'
const Home = (props) =>
{
  Home.propTypes =
  {
    animateCircle:PropTypes.bool.isRequired
  }
  const [showContent, setShowContent] = useState(false);

  useEffect(() =>
  {
    if (props.animateCircle) {
      // If the clip-path animation is completed, show the content
      setShowContent(true);
  }
  },[props.animateCircle])
    
    return(
        // Home Container
        <div className={`home-container ${props.animateCircle ? 'animate-circle' : ''}`}>
        <div className={`company-name-container ${props.animateCircle ? 'show' : 'hide'}`}> {/* Company name container*/}
          <h1 className={`company-name ${props.animateCircle ? 'animate-text' : ''}`}>DURADARS</h1>

         {/* Tagline and Paragraph */}
         {showContent && (
                <div className="content-container fade-in">
                    <h2 className="tagline slide-left"><span className='span-head'>Securing</span> your peace of mind, one click 👆 at a time</h2>
                    <p className="paragraph slide-left">Your paragraph goes here. Add some meaningful content.</p>
                    <button className="custom-button slide-left">Contact Us</button>

                    <div className='hero-image'>
                    <img src={CyberImage} alt="Cyber-Image" className="svg-image slide-right"/>
                    </div>
                </div>
            )}

        </div>
      </div>
      )}

export default Home;