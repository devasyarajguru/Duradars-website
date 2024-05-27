// Helper function for rendering the main home container
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
// import { Helmet } from "react-helmet";
// import LazyCritical from './LazyCritical'

import { Cloudinary } from '@cloudinary/url-gen'; // Importing from cloudinary
// import { scale } from '@cloudinary/url-gen/actions/resize';
// import { quality, autoBest } from '@cloudinary/url-gen/actions/delivery';
// import { format, auto } from '@cloudinary/url-gen/actions/delivery';
import { AdvancedImage } from '@cloudinary/react';

const MainHero = ({
  taglineJSX,
  taglineText,
  paragraph,
  image,
}) => {
  const topRef = useRef();
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const cld = new Cloudinary({cloud:{
    cloudName:'dgn53hdci'   // cloud name
  }})

  const publicId = image.match(/\/v\d+\/(.+)\.\w+$/)[1];

  const cloudinaryImg = cld.image(publicId)


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
            <div className="hero-section-content" id="box" fetchpriority="high">
              <h1 className="tagline slide-left">
                {taglineJSX}
                {taglineText}
              </h1>
              <p className="paragraph slide-left">{paragraph}</p>
              {/* <Link to="/contact">
                <button className="custom-button slide-left" style={{fontSize:"24px" , width: '200px', height: '50px', padding: '10px 20px'}}>Contact</button>
              </Link> */}
              <div className="btn-div" style={{marginTop:"1.5rem"}}>
              <Link to="/contact" className="custom-button slide-left" >
                Contact
              </Link>
              </div>

            </div>
            {/* Hero Section content Ends */}

            <div className="hero-section-image" id="box">
              {/* Hero Section Image Starts */}
              <div className="hero-image">
                <picture>
                  <source
                    media="(max-width: 600px)"
                    sizes="90vw"
                  />
                  <source
                    media="(max-width: 768px)"
                    sizes="80vw"
                  />
                  <source
                    media="(max-width: 1200px)"
                    sizes="70vw"
                  />
                  <AdvancedImage
                    cldImg={cloudinaryImg}
                    alt="Cyber-Image"
                    className="svg-image slide-right"
                  />
                </picture>

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
MainHero.defaultProps = {
  taglineJSX: null,
  taglineText: "",
  paragraph: "",
  image: "",
  smallImage: "",
  mediumImage: "",
  largeImage: "",
};

MainHero.propTypes = {
  taglineJSX: PropTypes.node,
  taglineText: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  mediumImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};
export default MainHero;
