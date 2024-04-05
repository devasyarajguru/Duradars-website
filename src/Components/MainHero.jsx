// Helper function for rendering the main home container
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { useEffect,useRef } from 'react';

const MainHero = ({ taglineJSX, taglineText, paragraph, image }) =>{
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({behavior: "smooth"});
  }, []);
  return(
    <section className='main-home-container' id='main-home-container'>
      <div ref={topRef}></div>
      {/* Tagline and Paragraph */}
      {/* Content Container starts */}
      <div className='content-container-wrapper'>
        <div className="content-container fade-in">
          {/* Hero Section content Starts */}
          <div className="hero-section-content">
            <h2 className="tagline slide-left">{taglineJSX}{taglineText}</h2>
            <p className="paragraph slide-left">{paragraph}</p>
            <Link to="/contact">
              <button className="custom-button slide-left">Contact Us</button>
            </Link>
          </div>
          {/* Hero Section content Ends */}
  
          <div className="hero-section-image">
            {/* Hero Section Image Starts */}
            <div className='hero-image'>
              <img src={image} alt="Cyber-Image" className="svg-image slide-right"/>
            </div>
          </div>
          {/* Hero Section Image ends */}
        </div>
      </div>
      {/* Content Container Ends */}
    </section>
  )
}
  MainHero.defaultProps = {
    taglineJSX: null,
    taglineText: "",
    paragraph: "",
    image: "",
  };
  
  MainHero.propTypes = {
    taglineJSX: PropTypes.node,
    taglineText: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
 export default MainHero;
  