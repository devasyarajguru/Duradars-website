import Fade from 'react-reveal/Fade';
import '../CSS/AboutSec.css'
import { Link } from 'react-router-dom';
import About1 from "../assets/about1.jpg"
import About2 from "../assets/about2.jpg"
import About3 from "../assets/about3.jpg"

const AboutSec = () => {

  const AboutSecDetails =
  {
      title:'About Us',
      paragraph:"We are dedicated to providing top-notch cybersecurity solutions to ensure the safety and tranquility of our clients. Our team of experts is committed to delivering excellence in every aspect of cybersecurity.",
      image1:About1,
      image2:About2,
      image3:About3,
  }

    return (
      <Fade bottom distance="30%"  duration={2500}>
        {/* About Us Container */}
      <div className="about-us-container">
        {/* Image Stack Container */}
      <div className="image-stack">
        <img src={AboutSecDetails.image1} alt="Image 1" loading="lazy" className='about1-image'/>
        <img src={AboutSecDetails.image2} alt="Image 2" loading="lazy" className='about2-image'/>
      </div>
        {/* Image Stack Container ends*/}
      <img src={AboutSecDetails.image3} alt="Image 3" loading="lazy" className="side-image" />

      {/* About Us Content */}
      <div className="about-us-content">
        <h2>{AboutSecDetails.title}</h2>
        <p className='about-us-first'>Provides <span className='span-head'>Best Approach</span> To Security</p>
        <p className='about-us-second'>
          {AboutSecDetails.paragraph}
        </p>
        <Link to="/aboutus#main-home-container" className="learn-more-button">Learn More</Link>
      </div>
      {/* About Us Content Ends*/}

    </div>
        {/* About Us Container ends*/}

    </Fade>
    );
  };
  
  export default AboutSec;