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
      <li><Link to="/" >Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/process">Process</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
