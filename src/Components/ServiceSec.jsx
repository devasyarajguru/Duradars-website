// ServiceSec.jsx
import '../CSS/ServiceSec.css';
import '../App.css'
import Fade from 'react-reveal/Fade';
import Service1 from "../assets/images/service1.webp"
import Service2 from "../assets/images/service2.webp"
import Service3 from "../assets/images/service3.webp"
import Service4 from "../assets/images/service4.webp"
import Service5 from "../assets/images/service5.webp"
import Service6 from "../assets/images/service6.webp"

import SmallService1 from "../assets/images/resized_images/service1-small.webp";
import MediumService1 from "../assets/images/resized_images/service1-medium.webp";
import LargeService1 from "../assets/images/resized_images/service1-large.webp";
import SmallService2 from "../assets/images/resized_images/service2-small.webp";
import MediumService2 from "../assets/images/resized_images/service2-medium.webp";
import LargeService2 from "../assets/images/resized_images/service2-large.webp";
import SmallService3 from "../assets/images/resized_images/service3-small.webp";
import MediumService3 from "../assets/images/resized_images/service3-medium.webp";
import LargeService3 from "../assets/images/resized_images/service3-large.webp";
import SmallService4 from "../assets/images/resized_images/service4-small.webp";
import MediumService4 from "../assets/images/resized_images/service4-medium.webp";
import LargeService4 from "../assets/images/resized_images/service4-large.webp";
import SmallService5 from "../assets/images/resized_images/service5-small.webp";
import MediumService5 from "../assets/images/resized_images/service5-medium.webp";
import LargeService5 from "../assets/images/resized_images/service5-large.webp";
import SmallService6 from "../assets/images/resized_images/service6-small.webp";
import MediumService6 from "../assets/images/resized_images/service6-medium.webp";
import LargeService6 from "../assets/images/resized_images/service6-large.webp";
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
        smallImg:SmallService1,
        mediumImg: MediumService1,
        largeImg: LargeService1
      },
      {
        service:"Application Pen Testing",
        img:Service2,
        smallImg:SmallService2,
        mediumImg: MediumService2,
        largeImg: LargeService2
      },
      {
        service:"Network Pen Testing",
        img:Service3,
        smallImg:SmallService3,
        mediumImg: MediumService3,
        largeImg: LargeService3

      },
      {
        service:"Cloud Security",
        img:Service4,
        smallImg:SmallService4,
        mediumImg: MediumService4,
        largeImg: LargeService4
      },
      {
        service:"Web-Dev with security",
        img:Service5,
        smallImg:SmallService5,
        mediumImg: MediumService5,
        largeImg: LargeService5
      },
      {
        service:"Source Code Review",
        img:Service6,
        smallImg:SmallService6,
        mediumImg: MediumService6,
        largeImg: LargeService6
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
              <Link to="/services">

                <img src={service.img} alt="Services" loading="lazy" style={{width:"350px" , height:"200px"}}
                srcSet={`${service.smallImg} 300w, ${service.mediumImg} 600w, ${service.largeImg} 1200w`}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"
                />
                </Link>
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
