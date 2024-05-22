import PropTypes from "prop-types";
import '../CSS/Home.css'
import '../CSS/About.css'
import { Fade } from "react-reveal";
import MainHero from "./MainHero";
// import AboutSec from "./AboutSec";
import Why from "./Why";
import UseForm from "./UseFrom";

const AboutUs = ({ taglineJSX, taglineText, paragraph, image , smallImage , mediumImage , largeImage}) =>
{
    const sectionDetails = [
        {
          imgSrc: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg',
          heading: 'Our Mission',
          subHeading: 'Our Commitment to Excellence',
          description: 'At Duradars, our mission is clear: to empower individuals and businesses with innovative cybersecurity solutions. We are committed to excellence in everything we do, ensuring our clients can navigate the digital landscape with confidence and peace of mind.',
        },
        {
          imgSrc: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg',
          heading: 'Our Vision',
          subHeading: 'Leading the Way Towards a Secure Tomorrow',
          description: 'Our vision at Duradars is ambitious yet straightforward: to shape the future of cybersecurity. We strive to lead the way towards a secure tomorrow by setting new standards of excellence and innovation in the industry. With a focus on collaboration, integrity, and cutting-edge technology, we aim to create a safer digital world for all.',
        },
      ];

    return(
       <>
          {/* MainHero Content Starts*/}

          {MainHero({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage})}
          
          {/* MainHero Content Ends*/}

        {/* <div>
          <AboutSec />
        </div> */}
        {/* Responsive Container Starts*/}
        <div className="responsive-container-block bigContainer" style={{ marginTop: "70px"}}>
      {sectionDetails.map((section, index) => (
        <Fade key={index} bottom distance="20%" duration={1000}>
          <div className={`responsive-container-block Container ${index === 1 ? 'bottomContainer' : ''}`}>
            <img className="mainImg" src={section.imgSrc} alt={`Section ${index + 1}`} />
            <div className="allText aboveText">
              <p className="text-blk headingText">{section.heading}</p>
              <p className="text-blk subHeadingText">{section.subHeading}</p>
              <p className="text-blk description">{section.description}</p>
            </div>
          </div>
        </Fade>
      ))}
    </div>
        {/* Responsive Container */}
        <div className="mainSec-div">

       <div style={{marginTop:"50px"}}>
          <Why />
        </div>

        <div style={{ marginTop:"50px"}}>
          <UseForm />
        </div>

       </div>
        </>
      )}

      AboutUs.defaultProps = {
        taglineJSX: null,
        taglineText: "",
        paragraph: "",
        image: "",
        smallImage:"",
        mediumImage:"",
        largeImage:""
      };
      
      AboutUs.propTypes = {
        taglineJSX: PropTypes.node,
        taglineText: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        smallImage: PropTypes.string.isRequired,
        mediumImage: PropTypes.string.isRequired,
        largeImage: PropTypes.string.isRequired,
      };

export default AboutUs;