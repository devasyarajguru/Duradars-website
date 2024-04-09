import PropTypes from "prop-types";
import "../CSS/Home.css";
import "../CSS/Services.css";
import { Fade } from "react-reveal";
import { MdSecurity } from "react-icons/md";
import MainHero from "./MainHero";
import Why from "./Why";
import ContactSec from "./ContactSec";


const Services = ({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage }) => {
 
  const serviceDetails = [
    {
      icon: <MdSecurity />,
      heading: "Web PenTesting",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      icon: <MdSecurity />,
      heading: "Application PenTesting",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      icon: <MdSecurity />,
      heading: "Network Security",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      icon: <MdSecurity />,
      heading: "Cloud Security",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      icon: <MdSecurity />,
      heading: "WebDev with Security",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
    {
      icon: <MdSecurity />,
      heading: "Source Code Review",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
    },
  ];

  return (
    <>
      {/* MainHero Content Starts*/}
      {MainHero({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage})}
      {/* MainHero Content Ends*/}

      {/* Responsive Container Starts*/}
      <Fade bottom distance="30%" duration={2500}>
        <section id="responsive">
          <h2>Our Services</h2>
          <div className="row">
            {serviceDetails.map((service, index) => (
              <div key={index} className="column">
                <div className="card">
                  <div className="icon-wrapper">{service.icon}</div>
                  <h3 id="heading">{service.heading}</h3>
                  <p className="card-para">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Fade>
      {/* Responsive Container Ends*/}

      <div className="mainSec-div">
        <div style={{ marginBottom: "50px", marginTop: "50px" }}>
          <Why />
        </div>

        <div style={{ marginTop: "50px" }}>
          <ContactSec />
        </div>
      </div>

    </>
  );
};

Services.defaultProps = {
  taglineJSX: null,
  taglineText: "",
  paragraph: "",
  image: "",
  smallImage:"",
  mediumImage:"",
  largeImage:""
};

Services.propTypes = {
  taglineJSX: PropTypes.node,
  taglineText: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  smallImage: PropTypes.string.isRequired,
  mediumImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default Services;
