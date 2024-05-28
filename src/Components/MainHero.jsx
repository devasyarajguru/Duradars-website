// Helper function for rendering the main home container
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Cloudinary } from '@cloudinary/url-gen'; // Importing from cloudinary
import { AdvancedImage } from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";

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

  const cloudinaryImg = cld.image(publicId).format('webp').delivery('q_auto')
 
  const smallImg = cld.image(publicId).format('webp').delivery('q_auto').resize(scale().width(600).height(400));
  const mediumImg = cld.image(publicId).format('webp').delivery('q_auto').resize(scale().width(1000).height(667));
  const largeImg = cld.image(publicId).format('webp').delivery('q_auto').resize(scale().width(1200).height(800));

  // console.log(smallImg.toURL())
  // console.log(mediumImg.toURL())
  // console.log(largeImg.toURL())

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
                  // media="(max-width: 600px)"
                  srcSet={smallImg.toURL()}
                  sizes="(max-width: 600px) 90vw"
                />
                 <source
                    // media="(max-width: 768px)"
                    srcSet={mediumImg.toURL()}
                    sizes="(max-width: 768px) 80vw"
                  />
                  <source
                    // media="(max-width: 1200px)"
                    srcSet={largeImg.toURL()}
                    sizes="(max-width: 1200px) 70vw"
                  />
                
               <AdvancedImage
                    // src={cloudinaryImg.toURL()}
                    cldImg={cloudinaryImg}
                    fetchpriority="high"
                    alt="Cyber-Image"
                    className="svg-image slide-right"
                    width={612}
                    height={408}
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
