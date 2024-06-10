import PropTypes from "prop-types";
import '../CSS/Home.css'
import '../CSS/Career.css'
// import { Fade } from "react-reveal";
import MainHero from "./MainHero";
import { Link } from "react-router-dom";

const Career = ({taglineJSX, taglineText , paragraph , image, smallImage , mediumImage , largeImage}) =>
{

  const message = "There are currently no open positions available"    
    return(
       <>
          {/* MainHero Content Starts*/}
          {MainHero({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage})}
          {/* MainHero Content Ends*/}     

          <div className="no-openings-message" style={{marginTop:"-5px"}}>
                <p>{message}</p>
                <Link to="/">
                <button className="custom-button">Home</button>
                </Link>
          </div> 
            
        </>
      )}

      Career.defaultProps = {
        taglineJSX: null,
        taglineText: "",
        paragraph: "",
        image: "",
        smallImage:"",
        mediumImage:"",
        largeImage:""
      };
      
      Career.propTypes = {
        taglineJSX: PropTypes.node,
        taglineText: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        smallImage: PropTypes.string.isRequired,
        mediumImage: PropTypes.string.isRequired,
        largeImage: PropTypes.string.isRequired,
      };

export default Career;