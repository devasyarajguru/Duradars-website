import PropTypes from "prop-types";
import AboutHome from './AboutSec';
import ServiceSec from './ServiceSec';
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