import Fade from 'react-reveal/Fade';
import '../CSS/AboutSec.css'
import { Link } from 'react-router-dom';
import { SmallAbout1, MediumAbout1, LargeAbout1, SmallAbout2, MediumAbout2, LargeAbout2, SmallAbout3 , MediumAbout3 , LargeAbout3 } from '../scripts/export';

const AboutSec = () => {

  const AboutSecDetails =
  {
      title:'About Us',
      paragraph:"We are dedicated to providing top-notch cybersecurity solutions to ensure the safety and tranquility of our clients."
  }

    return (
      <Fade bottom distance="30%"  duration={2500}>
        {/* About Us Container */}
      <div className="about-us-container">
        {/* Image Stack Container */}
      <div className="image-stack">
        <picture>
          < source srcSet={`${SmallAbout1} 300w, ${MediumAbout1} 600w, ${LargeAbout1} 1200w`}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"/>
        <img
            src={SmallAbout1}
            alt="About Image 1"
            loading="lazy"
            className='about1-image'
            width={300}
            height={200}
        />
        </picture>
        
        <picture>
          <source  srcSet={`${SmallAbout2} 300w, ${MediumAbout2} 600w, ${LargeAbout2} 1200w`}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"/>
          <img
            src={SmallAbout2}
            alt="About Image 2"
            loading="lazy"
            className='about2-image'
            width={300}
            height={200}
          />
        </picture>
       
      </div>
        {/* Image Stack Container ends*/}
        <picture>
          <source
            srcSet={`${SmallAbout3} 300w, ${MediumAbout3} 600w, ${LargeAbout3} 1200w`}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"/>
        <img
            src={SmallAbout3}
            alt="About Image 3"
            loading="lazy"
            className="side-image"
            width={300}
            height={200}
          />
        </picture>
      

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