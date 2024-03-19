// Navbar.js
import Logo2 from "../assets/image2.png"
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
          <img src={Logo2} alt="Logo2" className="logo"/>
      </Link>
        </div>
        {/* Render hamburger icon based on isOpen state */}
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
      <li><Link to="/#main-home-container">Home</Link></li>
        <li><Link to="/services#main-home-container">Services</Link></li>
        <li><Link to="/aboutus#main-home-container">About Us</Link></li>
        <li><Link to="/process#main-home-container">Process</Link></li>
        <li><Link to="/career#main-home-container">Career</Link></li>
        <li><Link to="/contact#main-home-container">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
