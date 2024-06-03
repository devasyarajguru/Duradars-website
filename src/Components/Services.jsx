import PropTypes from "prop-types";
import "../CSS/Home.css";
import "../CSS/Services.css";
import { Fade } from "react-reveal";
import { MdSecurity } from "react-icons/md";
import MainHero from "./MainHero";
import { Suspense, lazy } from "react";
import Spinner from "./Spinner";

const Why = lazy(() => import("./Why"));
const UseForm = lazy(() => import("./UseForm"));

const Services = ({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage }) => {
 
  const serviceDetails = [
    {
      icon: <MdSecurity />,
      heading: "Web PenTesting",
      description:
        "Protect your web applications with our comprehensive penetration testing services. Our expert team identifies and mitigates vulnerabilities, ensuring the security of your online assets.",
    },
    {
      icon: <MdSecurity />,
      heading: "Application PenTesting",
      description:
        "Identify and address security weaknesses in your applications with our penetration testing services. We help fortify your software against cyber threats, safeguarding your data and reputation.",
    },
    {
      icon: <MdSecurity />,
      heading: "Network Security",
      description:
        "Secure your network infrastructure with proactive monitoring and threat detection. Our solutions protect against unauthorized access and data breaches, keeping your systems resilient.",
    },
    {
      icon: <MdSecurity />,
      heading: "Cloud Security",
      description:
        "Ensure the security of your cloud environment with our comprehensive solutions. From access controls to compliance assessments, we help you navigate cloud security challenges.",
    },
    {
      icon: <MdSecurity />,
      heading: "WebDev with Security",
      description:
        "Integrate security best practices into your web development process. Our team collaborates to build secure, resilient web applications from the ground up.",
    },
    {
      icon: <MdSecurity />,
      heading: "Source Code Review",
      description:
        "Ensure the integrity of your software applications with our thorough code reviews. Our analysts identify and remediate potential security risks in your codebase.",
    },
  ];

  return (
    <>
      {/* MainHero Content Starts*/}
      <MainHero
        taglineJSX={taglineJSX}
        taglineText={taglineText}
        paragraph={paragraph}
        image={image}
        smallImage={smallImage}
        mediumImage={mediumImage}
        largeImage={largeImage}
      />
      {/* MainHero Content Ends*/}

      {/* Responsive Container Starts*/}
      <Fade bottom distance="20%" duration={1000}>
        <section id="responsive" >
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
          <Suspense fallback={<Spinner />}>
            <Why />
          </Suspense>
        </div>

        <div style={{ marginTop: "50px" }}>
          <Suspense fallback={<Spinner />}>
            <UseForm />
          </Suspense>
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
