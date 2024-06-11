import { Suspense, lazy } from "react";
import '../CSS/Home.css'
import PropTypes from "prop-types";
import MainHero from "./MainHero";
import Spinner from './Spinner';

const AboutHome = lazy(() => import('./AboutSec'));
const ServiceSec = lazy(() => import('./ServiceSec'));
const Why = lazy(() => import('./Why'));
const UseForm = lazy(() => import('./UseForm'));


const Home = ({taglineJSX= null,
  taglineText= "",
  paragraph= "",
  image= "",
}) =>
{
    return(
      <>
        {/* MainHero Content Starts*/}

        {/* {MainHero({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage})} */}

        <MainHero
        taglineJSX={taglineJSX}
        taglineText={taglineText}
        paragraph={paragraph}
        image={image}
      />
          
          {/* MainHero Content Ends*/}

          <div className="mainSec-div">
      <div style={{ marginBottom: "50px", marginTop: "150px" }}>
        <Suspense fallback={<Spinner />}>
          <AboutHome />
        </Suspense>
      </div>
      <div style={{ marginBottom: "50px", marginTop: "50px" }}>
        <Suspense fallback={<Spinner />}>
          <ServiceSec />
        </Suspense>
      </div>
      <div style={{ marginBottom: "50px", marginTop: "50px" }}>
        <Suspense fallback={<Spinner />}>
          <Why />
        </Suspense>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Suspense fallback={<Spinner />}>
          <UseForm />
        </Suspense>
      </div>
    </div>
      </>
      )}
 
      Home.propTypes = {
        taglineJSX: PropTypes.node,
        taglineText: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      };

export default Home;