import Fade from 'react-reveal/Fade';
import '../CSS/AboutHome.css'
import About1 from "../assets/about1.jpg"
import About2 from "../assets/about2.jpg"
import About3 from "../assets/about3.jpg"
import { Link } from 'react-router-dom';

const AboutHome = () => {

    return (
      <Fade bottom distance="30%"  duration={2500}>
        {/* About Us Container */}
      <div className="about-us-container">
        {/* Image Stack Container */}
      <div className="image-stack">
        <img src={About1} alt="Image 1" className='about1-image'/>
        <img src={About2} alt="Image 2" className='about2-image'/>
      </div>
        {/* Image Stack Container ends*/}
      <img src={About3} alt="Image 3" className="side-image" />

      {/* About Us Content */}
      <div className="about-us-content">
        <h2>About Us</h2>
        <p className='about-us-first'>Provides <span className='span-head'>Best Approach</span> To Security</p>
        <p className='about-us-second'>
          We are dedicated to providing top-notch cybersecurity solutions to ensure the safety and tranquility of our clients.
          Our team of experts is committed to delivering excellence in every aspect of cybersecurity.
        </p>
        <Link to="/aboutus" className="learn-more-button">Learn More</Link>
      </div>
      {/* About Us Content Ends*/}

    </div>
        {/* About Us Container ends*/}

    </Fade>
    );
  };
  
  export default AboutHome;