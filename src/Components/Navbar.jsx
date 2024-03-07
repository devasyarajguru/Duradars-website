// Navbar.js
import Logo2 from "../assets/image2.png"
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo-container'>
      <Link to="/">
          <img src={Logo2} alt="Logo2" className="logo"/>
      </Link>
        </div>
      <ul className="nav-list">
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
