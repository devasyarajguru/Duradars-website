// Footer.jsx
import { Link } from 'react-router-dom';
import Logo2 from "../assets/image2.png"
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
        <img src={Logo2} alt="Company Logo" className="logo"/>
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
