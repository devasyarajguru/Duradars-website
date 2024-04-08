import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import CyberImage from "./assets/images/cyber-image.webp";
import Spinner from "./Components/Spinner";
// import {Cloudinary} from "@cloudinary/url-gen";
// import {AdvancedImage} from '@cloudinary/react';
// import {fill} from "@cloudinary/url-gen/actions/resize";
// import { IKImage } from 'imagekitio-react';

const Home = lazy(() => import( "./Components/Home")) ;
const Contact = lazy(() => import("./Components/Contact"));
const Services = lazy(() => import("./Components/Services"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
const Career = lazy(() => import("./Components/Career"));
const Process = lazy(() => import("./Components/Process"));
// import ServiceSec from './Components/ServiceSec';

const App = () => {

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dfsgzn6lk'
  //   }
  // });

  // const myImage = cld.image('docs/models'); 

  // myImage.resize(fill().width(250).height(250));

  // const urlEndpoint = 'https://ik.imagekit.io/rfvwiripg/';

  const siteProps = {
    HomeSec: {
      taglineJSX: <span className="span-head">Securing</span>,
      taglineText: " your peace of mind, one click 👆 at a time",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
      // image: new IKImage({ urlEndpoint, path: "default-image.jpg" }).toString()
    },

    AboutSec: {
      taglineJSX: <span className="span-head">Empowering Security2</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
    },

    ServiceSec: {
      taglineJSX: <span className="span-head">Empowering Security3</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
    },

    ProcessSec: {
      taglineJSX: <span className="span-head">Empowering Security4</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
    },

    CareerSec: {
      taglineJSX: <span className="span-head">Empowering Security5</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
    },

    ContactSec: {
      taglineJSX: <span className="span-head">Empowering Security6</span>,
      taglineText: " in a Connected World 🌐",
      paragraph: "Your paragraph goes here. Add some meaningful content.",
      image: CyberImage,
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
