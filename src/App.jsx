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
import Process from './Components/Process';

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
         Empowering Security2
        </span>
      ),
        taglineText: " in a Connected World 🌐",
        paragraph:"Your paragraph goes here. Add some meaningful content.",
        image:CyberImage
    },

    ServiceSec:{
      taglineJSX: (
        <span className='span-head'>
         Empowering Security3
        </span>
      ),
        taglineText: " in a Connected World 🌐",
        paragraph:"Your paragraph goes here. Add some meaningful content.",
        image:CyberImage
    },

    ProcessSec:{
      taglineJSX: (
        <span className='span-head'>
         Empowering Security4
        </span>
      ),
        taglineText: " in a Connected World 🌐",
        paragraph:"Your paragraph goes here. Add some meaningful content.",
        image:CyberImage
    },
   
    CareerSec:{
      taglineJSX: (
        <span className='span-head'>
         Empowering Security5
        </span>
      ),
        taglineText: " in a Connected World 🌐",
        paragraph:"Your paragraph goes here. Add some meaningful content.",
        image:CyberImage
    },

    ContactSec:{
      taglineJSX: (
        <span className='span-head'>
         Empowering Security6
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
        <Route path="/contact" element={<Contact {...siteProps.CareerSec}/>} />
        <Route path="/services" element={<Services {...siteProps.ServiceSec}/>} />
        <Route path="/aboutus" element={<AboutUs {...siteProps.AboutSec}/>} />
        <Route path="/career" element={<Career {...siteProps.CareerSec}/>} />
        <Route path="/process" element={<Process {...siteProps.ProcessSec}/>} />
        {/* <Route path="/aboutus" element={<ServiceSec />} /> */}
      </Routes>
      <Footer />

    </div>
  )
}

export default App