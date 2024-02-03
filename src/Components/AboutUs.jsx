import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import '../CSS/Home.css'
import '../CSS/About.css'
import { Fade } from "react-reveal";
const AboutUs = ({taglineJSX, taglineText , paragraph , image}) =>
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
       // Main About Us Container
       <>
        <section className='main-home-container'>
         {/* Tagline and Paragraph */}
            {/* Content Container starts */}
            <div className='content-container-wrapper'>
                <div className="content-container fade-in">
                  
                    {/*Hero Section content Starts */}
                    <div className="hero-section-content">
                    <h2 className="tagline slide-left"> {taglineJSX}{taglineText}</h2>
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

      </section>
      
      {/* Main About Us Container Ends */}
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