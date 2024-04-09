import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import CyberImage from "./assets/images/cyber-image.webp";
import Spinner from "./Components/Spinner";
import { SmallHero , MediumHero , LargeHero } from './scripts/export';


const Home = lazy(() => import( "./Components/Home")) ;
const Contact = lazy(() => import("./Components/Contact"));
const Services = lazy(() => import("./Components/Services"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
const Career = lazy(() => import("./Components/Career"));
const Process = lazy(() => import("./Components/Process"));
// import ServiceSec from './Components/ServiceSec';

const App = () => {

  const siteProps = {
    HomeSec: {
      taglineJSX: <span className="span-head">Securing</span>,
      taglineText: " your peace of mind, one click 👆 at a time",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
      smallImage:SmallHero,
      mediumImage:MediumHero,
      largeImage:LargeHero
    },

    AboutSec: {
      taglineJSX: <span className="span-head">Empowering Security2</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
      smallImage:SmallHero,
      mediumImage:MediumHero,
      largeImage:LargeHero
    },

    ServiceSec: {
      taglineJSX: <span className="span-head">Empowering Security3</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
      smallImage:SmallHero,
      mediumImage:MediumHero,
      largeImage:LargeHero
    },

    ProcessSec: {
      taglineJSX: <span className="span-head">Empowering Security4</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
      smallImage:SmallHero,
      mediumImage:MediumHero,
      largeImage:LargeHero
    },

    CareerSec: {
      taglineJSX: <span className="span-head">Empowering Security5</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
      smallImage:SmallHero,
      mediumImage:MediumHero,
      largeImage:LargeHero
    },

    ContactSec: {
      taglineJSX: <span className="span-head">Empowering Security6</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
      smallImage:SmallHero,
      mediumImage:MediumHero,
      largeImage:LargeHero
    },
  };

  return (
    <div id="main">
      <Navbar />
      <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home {...siteProps.HomeSec}/>}/>
          <Route
            path="/contact"
            element={<Contact {...siteProps.ContactSec} />}
          />
          <Route
            path="/services"
            element={<Services {...siteProps.ServiceSec} />}
          />
          <Route
            path="/aboutus"
            element={<AboutUs {...siteProps.AboutSec} />}
          />
          <Route path="/career" element={<Career {...siteProps.CareerSec} />} />
          <Route
            path="/process"
            element={<Process {...siteProps.ProcessSec} />}
          />
          <Route path="*" element={<NotFound />} />
        {/* <Route path="/aboutus" element={<ServiceSec />} /> */}
      </Routes>
      <Footer />
      </Suspense>
    </div>
  );
};

export default App;
