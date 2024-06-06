// ServiceSec.jsx
import '../CSS/ServiceSec.css';
import '../App.css'
import Fade from 'react-reveal/Fade';
import { Service1, Service2, Service3, Service4, Service5, Service6 } from '../scripts/export';
import { SmallService1, SmallService2,SmallService3,SmallService4,SmallService5,SmallService6, MediumService1,  MediumService2, MediumService3, MediumService4, MediumService5, MediumService6,LargeService1, LargeService2,LargeService3, LargeService4, LargeService5, LargeService6 } from '../scripts/export';


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
    <Fade  bottom distance="20%" duration={1000}>
    {/*  <Fade bottom distance="30%"  duration={2500}> */}
    <section className="service-home-container">
      <h2 className="section-title">{SecDetail.title}</h2>
      <div className="service-grid">
        {/* Service 1 */}
       
          {SecDetail.detail.map((service) =>(
            <div className="service-item" key={service.service}>
              <Link to="/services">
                <picture>
                  <source srcSet={`${service.smallImg} 300w, ${service.mediumImg} 600w, ${service.largeImg} 1200w`}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 60vw"/>
                <img fetchpriority="low" src={service.img} alt="Services" loading="lazy" style={{width:"350px" , height:"200px"}}
                />
                </picture>
                </Link>
                  <h2>{service.service}</h2>
              <Link to="/services" className="custom-button2">Learn More</Link>
            </div>
          ))}
      </div>
    </section>
    </Fade>
  );
};

export default ServiceSec;
