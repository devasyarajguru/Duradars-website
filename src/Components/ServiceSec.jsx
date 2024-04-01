// ServiceSec.jsx
import '../CSS/ServiceSec.css';
import '../App.css'
import Fade from 'react-reveal/Fade';
import Service1 from "../assets/service1.webp"
import Service2 from "../assets/service2.webp"
import Service3 from "../assets/service3.webp"
import Service4 from "../assets/service4.webp"
import Service5 from "../assets/service5.webp"
import Service6 from "../assets/service6.webp"
import { Link } from 'react-router-dom';

const ServiceSec = () => {
  const SecDetail =
  {
    title:"Our Services",
    button:"Learn More",
    detail:
    [
      {
        service:"Website Pen Testing",
        img:Service1,
      },
      {
        service:"Application Pen Testing",
        img:Service2,
      },
      {
        service:"Network Pen Testing",
        img:Service3,
      },
      {
        service:"Cloud Security",
        img:Service4,
      },
      {
        service:"Web-Dev with security",
        img:Service5,
      },
      {
        service:"Source Code Review",
        img:Service6,

      },

    ]
  }
  return (
    <Fade bottom distance="30%" duration={2500}>
    {/*  <Fade bottom distance="30%"  duration={2500}> */}
    <section className="service-home-container">
      <h2 className="section-title">{SecDetail.title}</h2>
      <div className="service-grid">
        {/* Service 1 */}
       
          {SecDetail.detail.map((service) =>(
            <div className="service-item" key={service.service}>
              <Link to="/services"><img src={service.img} alt="Services" loading="lazy" style={{width:"350px" , height:"200px"}}/></Link>
                  <h2>{service.service}</h2>
              <Link to="/services#main-home-container" className="learn-more-button">{SecDetail.button}</Link>
            </div>
          ))}
      </div>
    </section>
    </Fade>
  );
};

export default ServiceSec;
