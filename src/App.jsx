import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Career from './Components/Career';
// import ServiceSec from './Components/ServiceSec';
import Footer from './Components/Footer';
import './App.css'
import CyberImage from "./assets/cyber-image.jpg"

const App = () =>
{
  const siteProps =
  {
    HomeSec:{
      taglineJSX: (
        <span className='span-head'>
          Securing
        </span>
      ),
        taglineText: " your peace of mind, one click 👆 at a time",
        paragraph:"Your paragraph goes here. Add some meaningful content.",
        image:CyberImage
    },

    AboutSec:{
      taglineJSX: (
        <span className='span-head'>
         Empowering Security
        </span>
      ),
        taglineText: " in a Connected World 🌐",
        paragraph:"Your paragraph goes here. Add some meaningful content.",
        image:CyberImage
    },

    ServiceSec:{
      taglineJSX: (
        <span className='span-head'>
         Empowering Security
        </span>
      ),
        taglineText: " in a Connected World 🌐",
        paragraph:"Your paragraph goes here. Add some meaningful content.",
        image:CyberImage
    }

   
  }

  return(
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home {...siteProps.HomeSec}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services {...siteProps.ServiceSec}/>} />
        <Route path="/aboutus" element={<AboutUs {...siteProps.AboutSec}/>} />
        <Route path="/career" element={<Career />} />
        {/* <Route path="/aboutus" element={<ServiceSec />} /> */}
      </Routes>
      <Footer />

    </div>
  )
}

export default App