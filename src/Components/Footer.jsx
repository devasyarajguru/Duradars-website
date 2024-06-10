// Footer.jsx
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen'; // Importing from cloudinary
import { AdvancedImage } from "@cloudinary/react";
import { responsive } from '@cloudinary/react'

import '../CSS/Footer.css'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";

const Footer = () => {
  const publicId = "Duradars/image2_x5o4hd"

  const cld = new Cloudinary({cloud:{
    cloudName:'dgn53hdci'   // cloud name
  }})

  const cloudinaryLogo = cld.image(publicId).format('webp').delivery('q_auto')
  return (
    <>
    {/* Footer Container */}
       <div className="footer-container">

    <div className="logo-container">
    <picture>
          {/* <source srcSet={`${SmallCyber} 300w, ${MediumCyber} 600w, ${LargeCyber} 1200w`}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"/> */}
         <AdvancedImage 
              cldImg={cloudinaryLogo}
              plugins={[responsive({steps: [480, 768, 1024,1200]})]}
              fetchpriority="high"
              alt="Logo"
              className="logo"
              width={500}
              height={187}
            />
        </picture>
        <p>At Duradars, we are dedicated to empowering businesses with robust cybersecurity solutions tailored to their unique needs. With a focus on innovation, reliability, and customer satisfaction, we strive to exceed expectations and deliver peace of mind in an ever-evolving digital landscape. </p>
    </div>

      <div className="footer-nav">
      <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/process">Process</Link>
          <Link to="/career">Career</Link>
        {/* Add more links as needed */}
      </div>

      <div className="contact-info">
        <p><MdEmail className='footer-icons'/> duradars@gmail.com</p>
        <p><FaPhone className='footer-icons'/> +91 9601130211</p>
        <p><FaAddressCard className='footer-icons'/> Remote</p>

        <div className='cta'>
          <Link to="/contact">
            <button className="footer-btn">Contact Us</button>
          </Link>
        </div>

      </div>

      </div>
      
      <div className="copyright">
        <p>&copy; 2024 Duradars. All rights reserved.</p>
      </div>
    {/* Footer Container ends*/}


    </>
  );
};

export default Footer;
