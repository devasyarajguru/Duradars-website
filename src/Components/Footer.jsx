// Footer.jsx
import { Link } from 'react-router-dom';
import {LargeCyber , MediumCyber , SmallCyber } from '../scripts/export';
import Logo2 from "../assets/images/image2.webp"

import '../CSS/Footer.css'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    {/* Footer Container */}
       <div className="footer-container">

    <div className="logo-container">
    <picture>
          <source srcSet={`${SmallCyber} 300w, ${MediumCyber} 600w, ${LargeCyber} 1200w`}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"/>
        <img  
            src={Logo2}
            alt="Logo"
            className="logo"
            loading="lazy"
            width={500}
            height={187}
            />
        </picture>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laudantium accusantium! Voluptatem corrupti, quisquam numquam quo totam est, vel earum vitae delectus, sit possimus molestias! Dicta odit totam in nobis.</p>
    </div>

      <div className="footer-nav">
      <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/process">Process</Link>
          <Link to="/career">Career</Link>
        {/* Add more links as needed */}
      </div>

      <div className="contact-info">
        <p><MdEmail className='footer-icons'/> contact@example.com</p>
        <p><FaPhone className='footer-icons'/> +123 456 7890</p>
        <p><FaAddressCard className='footer-icons'/> 123 Main Street, City</p>

        <div className='cta'>
          <Link to="/contact">
            <button className="footer-btn">Contact Us</button>
          </Link>
        </div>

      </div>

      </div>
      
      <div className="copyright">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    {/* Footer Container ends*/}


    </>
  );
};

export default Footer;
