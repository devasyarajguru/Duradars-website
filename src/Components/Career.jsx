import PropTypes from "prop-types";
import '../CSS/Home.css'
// import '../CSS/Career.css'
// import { Fade } from "react-reveal";
import MainHero from "./MainHero";

const Career = ({ taglineJSX, taglineText, paragraph, image }) =>
{
    
    return(
       <>
          {/* MainHero Content Starts*/}
          {MainHero({ taglineJSX, taglineText, paragraph, image })}
          {/* MainHero Content Ends*/}       
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