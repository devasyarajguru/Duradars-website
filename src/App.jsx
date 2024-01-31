import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Career from './Components/Career';
import './App.css'
import { useState, useEffect } from 'react';
import AboutHome from './Components/AboutHome';
const App = () =>
{

  const[animateCircle,setAnimateCircle] = useState(false)

    useEffect(() =>
    {
        // TimeOut for 
        const timeoutId = setTimeout(() =>
        {
            setAnimateCircle(true);
        },1000);

        return () => clearTimeout(timeoutId)
    },[])

  return(
    <div>
      <Navbar animateCircle={animateCircle} />
      <Routes>
        <Route path="/" element={<Home animateCircle={animateCircle} setAnimateCircle={setAnimateCircle}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/aboutus" element={<AboutHome />} />
      </Routes>
    </div>
  )
}

export default App