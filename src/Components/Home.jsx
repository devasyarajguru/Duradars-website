import PropTypes from "prop-types";
import AboutHome from './AboutSec';
import ServiceSec from './ServiceSec';
import Why from './Why';
// import { Link } from 'react-router-dom';
import '../CSS/Home.css'
import MainHero from "./MainHero";
import UseForm from "./UseFrom";


const Home = ({taglineJSX, taglineText , paragraph , image, smallImage , mediumImage , largeImage}) =>
{
    return(
      <>
        {/* MainHero Content Starts*/}

        {MainHero({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage})}
          
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
          <UseForm />
        </div>

      </div>
      </>
      )}

      Home.defaultProps = {
        taglineJSX: null,
        taglineText: "",
        paragraph: "",
        image: "",
        smallImage:"",
        mediumImage:"",
        largeImage:""
      };
      
      Home.propTypes = {
        taglineJSX: PropTypes.node,
        taglineText: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        smallImage: PropTypes.string.isRequired,
        mediumImage: PropTypes.string.isRequired,
        largeImage: PropTypes.string.isRequired,
      };

export default Home;