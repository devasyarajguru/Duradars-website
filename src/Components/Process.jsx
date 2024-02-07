import PropTypes from "prop-types";
// import WorkProcess from "../assets/work.png"
import '../CSS/Process.css'
import MainHero from "./MainHero";
import ProcessImage from "../assets/service1.png"
import { Fade } from "react-reveal";


const Process = ({taglineJSX , taglineText , paragraph , image }) =>
{
      const processes = [
        {
          order:1,
          heading: 'Process 1',
          Mainparagraph: 'Lorem ipsum for process 1.',
          photoSrc: ProcessImage,
        },
        {
          order:2,
          heading: 'Process 2',
          Mainparagraph: 'Lorem ipsum for process 2.',
          photoSrc: ProcessImage,
        },
        {
          order:1,
          heading: 'Process 2',
          Mainparagraph: 'Lorem ipsum for process 2.',
          photoSrc: ProcessImage,
        },
        {
          order:2,
          heading: 'Process 2',
          Mainparagraph: 'Lorem ipsum for process 2.',
          photoSrc: ProcessImage,
        },
      ];

    return(
       <>
         {/* MainHero Content Starts*/}
         {MainHero({ taglineJSX, taglineText, paragraph, image })}
         {/* MainHero Content Ends*/}

        {/* Main Process container starts */}
        
          {processes.map((process,index) =>(
            <Fade key={index} bottom distance="30%" duration={2500}>
            <section className={`process-container ${process.order === 2 ? 'reverse' : ''}`}>
            <div className="image-div">
              <img src={process.photoSrc} alt={`Process ${process.order}`} className="process-image" />
            </div>
            <div className="text-content">
              <h3 className="text-heading">{process.heading}</h3>
              <p>{paragraph}</p>
            </div>
          </section>
          </Fade>
          ))}
      
        {/* Main Process container Ends */}
     </>
    )
}

Process.defaultProps = {
    taglineJSX: null,
    taglineText: "",
    paragraph: "",
    image: "",
  };
  
  Process.propTypes = {
    taglineJSX: PropTypes.node,
    taglineText: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default Process;