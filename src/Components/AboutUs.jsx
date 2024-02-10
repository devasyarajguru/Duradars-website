import PropTypes from "prop-types";
import '../CSS/Home.css'
import '../CSS/About.css'
import { Fade } from "react-reveal";
import MainHero from "./MainHero";
import AboutSec from "./AboutSec";
import ContactSec from "./ContactSec";
import Why from "./Why";

const AboutUs = ({ taglineJSX, taglineText, paragraph, image }) =>
{
    const sectionDetails = [
        {
          imgSrc: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg',
          heading: 'Our Mission',
          subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.',
        },
        {
          imgSrc: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg',
          heading: 'Our Vision',
          subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.',
        },
      ];

    return(
       <>
          {/* MainHero Content Starts*/}

          {MainHero({ taglineJSX, taglineText, paragraph, image })}
          
          {/* MainHero Content Ends*/}

        <div>
          <AboutSec />
        </div>
        {/* Responsive Container Starts*/}
        <div className="responsive-container-block bigContainer">
      {sectionDetails.map((section, index) => (
        <Fade key={index} bottom distance="30%" duration={2500}>
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

       <div style={{marginBottom:"350px", marginTop:"50px"}}>
          <Why />
        </div>

        <div style={{ marginTop:"50px"}}>
          <ContactSec />
        </div>

       </div>
        </>
      )}

      AboutUs.defaultProps = {
        taglineJSX: null,
        taglineText: "",
        paragraph: "",
        image: "",
      };
      
      AboutUs.propTypes = {
        taglineJSX: PropTypes.node,
        taglineText: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      };

export default AboutUs;