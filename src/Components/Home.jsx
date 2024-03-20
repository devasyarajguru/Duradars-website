import PropTypes from "prop-types";
import AboutHome from './AboutSec';
import ServiceSec from './ServiceSec';
import ContactSec from './ContactSec';
import Why from './Why';
// import { Link } from 'react-router-dom';
import '../CSS/Home.css'
import MainHero from "./MainHero";


const Home = ({taglineJSX, taglineText , paragraph , image}) =>
{
    return(
      <>
        {/* MainHero Content Starts*/}

        {MainHero({ taglineJSX, taglineText, paragraph, image })}
          
          {/* MainHero Content Ends*/}

      <div className="mainSec-div">

        <div style={{marginBottom:"50px", marginTop:"50px"}}>
          <AboutHome />
        </div>

        <div style={{marginBottom:"50px", marginTop:"50px"}}>
          <ServiceSec />
        </div>

        <div style={{marginBottom:"50px", marginTop:"50px"}}>
          <Why />
        </div>
        
        <div style={{marginTop:"50px"}}>
          <ContactSec />
        </div>

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