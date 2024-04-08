// Navbar.js
// import Logo2 from "../assets/images/image2.webp"
import {LargeCyber , MediumCyber , SmallCyber } from '../scripts/export';
import Logo2 from "../assets/images/image2.webp"
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="navbar">
      <div className='logo-container'>
      <Link to="/">
          <img  
            src={Logo2}
            srcSet={`${SmallCyber} 300w, ${MediumCyber} 600w, ${LargeCyber} 1200w`}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"
            alt="Logo"
            className="logo"/>
      </Link>
        </div>

      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
      <li><Link to="/" >Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/process">Process</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* Render hamburger icon based on isOpen state */}
    </ul>
    
    </nav>
  );
}

export default Navbar;
