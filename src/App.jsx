import "./App.css";
// import { Helmet } from 'react-helmet';
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
// import CyberImage from "./assets/images/my-hero1.webp";
// import hero2 from "./assets/images/my-hero2.webp";
// import hero3 from "./assets/images/my-hero3.webp";
// import hero4 from "./assets/images/my-hero4.webp";
// import hero5 from "./assets/images/my-hero5.webp";
// import hero6 from "./assets/images/my-hero6.webp";
import Spinner from "./Components/Spinner";
// import { SmallHero , MediumHero , LargeHero , SmallHero2 , SmallHero3 , SmallHero4 , SmallHero5 , SmallHero6 , MediumHero2 , MediumHero3 , MediumHero4 , MediumHero5 , MediumHero6 , LargeHero2 , LargeHero3 , LargeHero4 , LargeHero5 , LargeHero6} from './scripts/export';

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
      paragraph: "Welcome to Duradars, your trusted partner in cybersecurity. Explore our services and empower your online presence with confidence.",
      image: "https://res.cloudinary.com/dgn53hdci/image/upload/v1716460494/end-hero1_ocxlos.jpg",
      // smallImage:SmallHero4,
      // mediumImage:MediumHero4,
      // largeImage:LargeHero4
    },

    AboutSec: {
      taglineJSX: <span className="span-head">Empowering Security</span>,
      taglineText: " in a Connected World",
      paragraph: "At Duradars, we empower businesses and individuals to navigate the digital landscape securely. Trust us to safeguard your digital journey.",
      image: "https://res.cloudinary.com/dgn53hdci/image/upload/v1716460494/end-hero2_u84ieo.jpg",
      // smallImage:SmallHero2,
      // mediumImage:MediumHero2,
      // largeImage:LargeHero2
    },

    ServiceSec: {
      taglineJSX: <span className="span-head">Comprehensive Security</span>,
      taglineText: " Solutions for Every Need",
      paragraph: "Duradars offers a wide range of security services tailored to meet your needs. Explore our services and take the first step towards a secure future.",
      image: "https://res.cloudinary.com/dgn53hdci/image/upload/v1716460493/end-hero3_you2je.jpg",
      // smallImage:SmallHero3,
      // mediumImage:MediumHero3,
      // largeImage:LargeHero3
    },

    ProcessSec: {
      taglineJSX: <span className="span-head">Streamlined Security</span>,
      taglineText: " Processes for  Protection",
      paragraph: "Our approach to cybersecurity is built on robust processes and methodologies. Discover our process and experience peace of mind.",
      image: "https://res.cloudinary.com/dgn53hdci/image/upload/v1716460493/end-hero4_sp1lyu.jpg",
      // smallImage:SmallHero,
      // mediumImage:MediumHero,
      // largeImage:LargeHero
    },

    CareerSec: {
      taglineJSX: <span className="span-head">Join Our Team</span>,
      taglineText: " and Shape the Future of Cybersecurity",
      paragraph: "Looking for an exciting career opportunity in cybersecurity? Join our dynamic team and work on cutting-edge projects that challenge and inspire you.",
      image: "https://res.cloudinary.com/dgn53hdci/image/upload/v1716460494/end-hero5_jrv7la.jpg",
      // smallImage:SmallHero5,
      // mediumImage:MediumHero5,
      // largeImage:LargeHero5
    },

    ContactSec: {
      taglineJSX: <span className="span-head">Get in Touch</span>,
      taglineText: " and Secure Your Future Today",
      paragraph: "Contact Duradars today and let us help you safeguard your digital assets. Reach out to us and secure your future with Duradars.",
      image:"https://res.cloudinary.com/dgn53hdci/image/upload/v1716460494/end-hero6_kycf1f.jpg",
      // smallImage:SmallHero6,
      // mediumImage:MediumHero6,
      // largeImage:LargeHero6
    },
  };

  return (
    <>
    {/* <Helmet>
      <link rel="preload" href={CyberImage} as='image'/>
      <link rel="preload" href={SmallHero} as='image'/>
      <link rel="preload" href={MediumHero} as='image'/>
      <link rel="preload" href={LargeHero} as='image'/>
    </Helmet> */}
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
    </>
  );
};

export default App;
