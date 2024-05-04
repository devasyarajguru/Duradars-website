// Helper function for rendering the main home container
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <link
          rel="preload"
          href="../assets/images/cyber-image.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/cyber-image-small.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/cyber-image-medium.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/cyber-image-large.webp"
          as="image"
        />

        <link
          rel="preload"
          href="../assets/images/resized_images/hero2-small.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero2-medium.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero2-large.webp"
          as="image"
        />

        <link
          rel="preload"
          href="../assets/images/resized_images/hero3-small.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero3-medium.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero3-large.webp"
          as="image"
        />

        <link
          rel="preload"
          href="../assets/images/resized_images/hero4-small.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero4-medium.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero4-large.webp"
          as="image"
        />

        <link
          rel="preload"
          href="../assets/images/resized_images/hero5-small.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero5-medium.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero5-large.webp"
          as="image"
        />

        <link
          rel="preload"
          href="../assets/images/resized_images/hero6-small.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero6-medium.webp"
          as="image"
        />
        <link
          rel="preload"
          href="../assets/images/resized_images/hero6-large.webp"
          as="image"
        />

        <link 
          rel="stylesheet" 
          href="../CSS/Home.css" 
        />  

        {/* Increase priority for fonts to load fonts right after the first render  */}
      {/* <link rel="preload"
      as="style"
      fetchpriority="high" 
      onLoad="this.onload=null;this.rel='stylesheet'"
      href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap'/> */}
      
      </Helmet>

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
              <Link to="/contact">
                <button className="custom-button slide-left">Contact</button>
              </Link>
            </div>
            {/* Hero Section content Ends */}

            <div className="hero-section-image">
              {/* Hero Section Image Starts */}
              <div className="hero-image">
                <picture>
                  <source
                    srcSet={`${smallImage} 300w, ${mediumImage} 600w, ${largeImage} 1200w`}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 70vw, 60vw"
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
