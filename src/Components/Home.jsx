import PropTypes from "prop-types";
import AboutHome from './AboutSec';
import ServiceSec from './ServiceSec';
import Why from './Why';
import { Link } from 'react-router-dom';
import '../CSS/Home.css'
const Home = ({taglineJSX, taglineText , paragraph , image}) =>
{
    
    return(
       // Main Home Container
       <>
        <section className='main-home-container'>
         {/* Tagline and Paragraph */}
            {/* Content Container starts */}
            <div className='content-container-wrapper'>
                <div className="content-container fade-in">
                  
                    {/*Hero Section content Starts */}
                    <div className="hero-section-content">
                    <h2 className="tagline slide-left"> {taglineJSX}
                {taglineText}</h2>
                    <p className="paragraph slide-left">{paragraph}</p>
                    <Link to="/contact">
                      <button className="custom-button slide-left">Contact Us</button>
                    </Link>
                    </div>
                    {/*Hero Section content Ends */}

                    <div className="hero-section-image">
                    {/*Hero Section Image Starts */}
                      <div className='hero-image'>
                        <img src={image} alt="Cyber-Image" className="svg-image slide-right"/>
                      </div>
                    </div>
                    {/* Hero Section Image ends */}
                    </div>
                </div>
            {/* Content Container Ends */}
      </section>
      {/* Main Home Container Ends */}

      <div>
          <AboutHome />
          <ServiceSec />
          <Why />
        </div>
      </>
      )}

      Home.defaultProps = {
        taglineJSX: null,
        taglineText: "",
        paragraph: "",
        image: "",
      };
      
      Home.propTypes = {
        taglineJSX: PropTypes.node,
        taglineText: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      };

export default Home;