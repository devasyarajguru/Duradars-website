import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import './App.css'
export default function App()
{
  return(
    <div>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
    </div>
  )
}