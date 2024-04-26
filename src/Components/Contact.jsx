import MainHero from "./MainHero";
import '../CSS/Contact.css';
import PropTypes from "prop-types";
import UseForm from "./UseFrom";

function Contact({taglineJSX, taglineText , paragraph , image, smallImage , mediumImage , largeImage}) {
   
  return (
<>
    {/* MainHero Content Starts*/}

    {MainHero({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage})}
          
    {/* MainHero Content Ends*/}
     
   <UseForm />
    </>
  );
}

Contact.defaultProps = {
    taglineJSX: null,
    taglineText: "",
    paragraph: "",
    image: "",
    smallImage:"",
    mediumImage:"",
    largeImage:""
  };
  
  Contact.propTypes = {
    taglineJSX: PropTypes.node,
    taglineText: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    smallImage: PropTypes.string.isRequired,
    mediumImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

export default Contact;