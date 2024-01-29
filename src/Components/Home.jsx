import { useState, useEffect } from 'react';
import '../CSS/Home.css'
const Home = () =>
{
    // Animate circle state variable
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
        // Home Container
        <div className={`home-container ${animateCircle ? 'animate-circle' : ''}`}>
        <div className="company-name-container"> {/* Company name container*/}
          <h1 className={`company-name ${animateCircle ? 'animate-text' : ''}`}>DURADARS</h1>
        </div>
      </div>
      )}

export default Home;