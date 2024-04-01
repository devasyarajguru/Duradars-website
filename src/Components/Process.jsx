import PropTypes from "prop-types";
// import WorkProcess from "../assets/work.png"
import '../CSS/Process.css'
import MainHero from "./MainHero";
import ProcessImage from "../assets/process1.webp"
import ProcessImage2 from "../assets/process2.webp"
import ProcessImage3 from "../assets/process3.webp"
import ProcessImage4 from "../assets/process4.webp"
import { Fade } from "react-reveal";
import ContactSec from "./ContactSec";


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
          photoSrc: ProcessImage2,
        },
        {
          order:1,
          heading: 'Process 3',
          Mainparagraph: 'Lorem ipsum for process 2.',
          photoSrc: ProcessImage3,
        },
        {
          order:2,
          heading: 'Process 4',
          Mainparagraph: 'Lorem ipsum for process 2.',
          photoSrc: ProcessImage4,
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
            <section className={`process-container ${process.order !== 2 ? 'reverse' : ''}`}>
            <div className="image-div">
              <img src={process.photoSrc} alt={`Process ${process.order}`} className="process-image"/>
            </div>
            <div className="text-content">
              <h3 className="text-heading">{process.heading}</h3>
              <p>{paragraph}</p>
            </div>
          </section>
          </Fade>
          ))}
      
        {/* Main Process container Ends */}

        <div style={{marginTop:"150px"}}>
          <ContactSec />
        </div>
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