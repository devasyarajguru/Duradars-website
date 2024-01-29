// Navbar.js
import Logo2 from "../assets/image2.png"


import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';


import PropTypes from 'prop-types'; 
import { useEffect } from 'react';

const Navbar = (props) => {
  Navbar.propTypes =
  {
    animateCircle:PropTypes.bool.isRequired
  }

  useEffect(() =>
  {
    if(props.animateCircle)
    {
      document.querySelector('.navbar').classList.add('show-navbar')
    }
  },[props.animateCircle])
  return (
    <nav className={`navbar ${props.animateCircle ? 'show-navbar' : ""}`}>
      <div className='logo-container'>
          <img src={Logo2} alt="Logo1" className="logo"/>
        </div>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
