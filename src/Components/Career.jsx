import PropTypes from "prop-types";
import '../CSS/Home.css'
import '../CSS/Career.css'
// import { Fade } from "react-reveal";
import MainHero from "./MainHero";
import { Link } from "react-router-dom";

const Career = ({ taglineJSX, taglineText, paragraph, image }) =>
{

  const message = "There are currently no open positions available"    
    return(
       <>
          {/* MainHero Content Starts*/}
          {MainHero({ taglineJSX, taglineText, paragraph, image })}
          {/* MainHero Content Ends*/}     

          <div className="no-openings-message">
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
      };
      
      Career.propTypes = {
        taglineJSX: PropTypes.node,
        taglineText: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      };

export default Career;