// Navbar.js
// import { LargeCyber, MediumCyber, SmallCyber } from "../scripts/export";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import { useState } from "react";
import { Cloudinary } from '@cloudinary/url-gen'; // Importing from cloudinary
import { AdvancedImage } from "@cloudinary/react";
import { responsive } from '@cloudinary/react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () =>
    {
      setIsOpen(false);
    }

  const publicId = "Duradars/image2_x5o4hd"

  const cld = new Cloudinary({cloud:{
    cloudName:'dgn53hdci'   // cloud name
  }})

  const cloudinaryLogo = cld.image(publicId).format('webp').delivery('q_auto')

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <picture>
            {/* <source
              srcSet={`${SmallCyber} 300w, ${MediumCyber} 600w, ${LargeCyber} 1200w`}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"
            /> */}
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
        </Link>
      </div>

      <div
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-list ${isOpen ? "active" : ""}`}>
      <li>
          <Link to="/" onClick={handleCloseMenu}>Home</Link>
        </li>
        <li>
          <Link to="/services" onClick={handleCloseMenu}>Services</Link>
        </li>
        <li>
          <Link to="/aboutus" onClick={handleCloseMenu}>About Us</Link>
        </li>
        <li>
          <Link to="/process" onClick={handleCloseMenu}>Process</Link>
        </li>
        <li>
          <Link to="/career" onClick={handleCloseMenu}>Career</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>
        </li>
        {/* Render hamburger icon based on isOpen state */}
      </ul>
    </nav>
  );
};

export default Navbar;
