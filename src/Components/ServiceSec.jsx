// ServiceSec.jsx
import '../CSS/ServiceSec.css';
import '../App.css'
import Fade from 'react-reveal/Fade';
import Service1 from "../assets/service1.png"
import Service2 from "../assets/service2.png"
import Service3 from "../assets/service3.jpg"
import Service4 from "../assets/service4.jpg"
import Service5 from "../assets/service5.jpg"
import Service6 from "../assets/service6.jpg"
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
    
    //Problem to be solved 
    <Fade bottom distance="30%"  duration={1500}>
    {/*  <Fade bottom distance="30%"  duration={2500}> */}
    <section className="service-home-container">
      <h2 className="section-title">{SecDetail.title}</h2>
      <div className="service-grid">
        {/* Service 1 */}
       
          {SecDetail.detail.map((service) =>(
            <div className="service-item" key={service.service}>
              <Link to="/aboutus"><img src={service.img} alt="Services" /></Link>
                  <h2>{service.service}</h2>
              <Link to="/aboutus" className="learn-more-button">{SecDetail.button}</Link>
            </div>
          ))}
          

       
      </div>
    </section>
    </Fade>
  );
};

export default ServiceSec;
