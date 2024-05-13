// Helper function for rendering the main home container
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
// import { Helmet } from "react-helmet";
// import LazyCritical from './LazyCritical'

const MainHero = ({
  taglineJSX,
  taglineText,
  paragraph,
  image,
  smallImage,
  mediumImage,
  largeImage,
}) => {
  const topRef = useRef();
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
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
            <div className="hero-section-content">
              <h1 className="tagline slide-left">
                {taglineJSX}
                {taglineText}
              </h1>
              <p className="paragraph slide-left">{paragraph}</p>
              {/* <Link to="/contact">
                <button className="custom-button slide-left" style={{fontSize:"24px" , width: '200px', height: '50px', padding: '10px 20px'}}>Contact</button>
              </Link> */}
              <div style={{marginTop:"1.5rem"}}>
              <Link to="/contact" className="custom-button slide-left" >
                Contact
              </Link>
              </div>

            </div>
            {/* Hero Section content Ends */}

            <div className="hero-section-image">
              {/* Hero Section Image Starts */}
              <div className="hero-image">
                <picture>
                  <source
                    srcSet={`${smallImage} 300w, ${mediumImage} 600w, ${largeImage} 1200w`}
                    sizes="(max-width: 480px) 81vw, (max-width: 768px) 70vw, 60vw"
                  />
                  <img
                    fetchpriority="high"
                    src={image}
                    alt="Cyber-Image"
                    className="svg-image slide-right"
                    width={1200}
                    height={675}
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
