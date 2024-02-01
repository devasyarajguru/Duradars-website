// ServiceHome.jsx
import '../CSS/ServiceHome.css';
import Fade from 'react-reveal/Fade';
import Service1 from "../assets/service1.png"
import Service2 from "../assets/service2.png"
import Service3 from "../assets/service3.jpg"
import Service4 from "../assets/service4.jpg"
import Service5 from "../assets/service5.jpg"
import Service6 from "../assets/service6.jpg"
import { Link } from 'react-router-dom';


const ServiceHome = () => {
  return (
    //Problem to be solved 
    <Fade bottom distance="30%"  duration={1500}>
    {/*  <Fade bottom distance="30%"  duration={2500}> */}
    <div className="service-home-container">
      <h2 className="section-title">Our Services</h2>
      <div className="service-grid">
        {/* Service 1 */}
        <div className="service-item">
          <Link to="/aboutus"><img src={Service1} alt="Service 1" /></Link>
          <h2>Website Pen Testing</h2>
          <Link to="/aboutus" className="learn-more-button">Learn More</Link>
        </div>

        {/* Service 2 */}
        <div className="service-item">
          <Link to="/aboutus"><img src={Service2} alt="Service 2" /></Link>
          <h2>Application Pen Testing</h2>
          <Link to="/aboutus" className="learn-more-button">Learn More</Link>
        </div>

        {/* Service 3 */}
        <div className="service-item">
          <Link to="/aboutus"><img src={Service3} alt="Service 3" /></Link>
          <h2>Network Pen Testing</h2>
          <Link to="/aboutus" className="learn-more-button">Learn More</Link>
        </div>

        {/* Service 4 */}
        <div className="service-item">
          <Link to="/aboutus"><img src={Service4} alt="Service 4" /></Link>
          <h2>Cloud Security</h2>
          <Link to="/aboutus" className="learn-more-button">Learn More</Link>
        </div>

        {/* Service 5 */}
        <div className="service-item">
          <Link to="/aboutus"><img src={Service5} alt="Service 5" /></Link>
          <h2>Web-Dev with security</h2>
           <Link to="/aboutus" className="learn-more-button">Learn More</Link>
        </div>

        {/* Service 6 */}
        <div className="service-item">
          <Link to="/aboutus"><img src={Service6} alt="Service 6" /></Link>
          <h2>Source code Review</h2>
           <Link to="/aboutus" className="learn-more-button">Learn More</Link>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default ServiceHome;
