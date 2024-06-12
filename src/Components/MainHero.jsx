import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef} from "react";
import { Cloudinary } from '@cloudinary/url-gen'; // Importing from cloudinary
import { AdvancedImage } from '@cloudinary/react';
import { responsive } from '@cloudinary/react'

const MainHero = ({
  taglineJSX = "",
  taglineText = "",
  paragraph = "",
  image = "",
}) => {
  const topRef = useRef();
  
  useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth" });
        
  }, []);

  const cld = new Cloudinary({cloud:{
    cloudName:'dgn53hdci'   // cloud name
  }})

  const publicId = image.match(/\/v\d+\/(.+)\.\w+$/)[1];

  const cloudinaryImg = cld.image(publicId).format('webp').delivery('q_auto')

  return (
    <>
      <section className="main-home-container" id="main-home-container">
        <div className="background-svg"></div>
        <div ref={topRef}></div>
        {/* Tagline and Paragraph */}
        {/* Content Container starts */}
        <div className="content-container-wrapper">
          <div className="content-container fade-in">
            {/* Hero Section content Starts */}
            <div className="hero-section-content" id="box">
              <h1 className="tagline slide-left">
                {taglineJSX}
                {taglineText}
              </h1>
              <p className="paragraph slide-left">{paragraph}</p>
              <div className="btn-div" style={{marginTop:"1.5rem",marginBottom:"2.5rem"}}>
              <Link to="/contact" className="custom-button slide-left" >
                Contact
              </Link>
              </div>

            </div>
            {/* Hero Section content Ends */}

            <div className="hero-section-image" id="box" fetchpriority="high">
              {/* Hero Section Image Starts */}
              <div className="hero-image">
               
                
               <AdvancedImage
                    // src={cloudinaryImg.toURL()}
                    cldImg={cloudinaryImg}
                    plugins={[responsive({steps: [480, 768, 1024,1200]})]}
                    fetchpriority="high"
                    alt="Cyber-Image"
                    className="svg-image slide-right"
                    width={612}
                    height={408}
                  />

              </div>
            </div>
            {/* Hero Section Image ends */}
          </div>
        </div>
        {/* Content Container Ends */}
      </section>
    </>
  );
};


MainHero.propTypes = {
  taglineJSX: PropTypes.node,
  taglineText: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  scrollToTop:PropTypes.bool
};
export default MainHero;
