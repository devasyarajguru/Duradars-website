import PropTypes from "prop-types";
// import WorkProcess from "../assets/work.png"
import '../CSS/Process.css'
import MainHero from "./MainHero";
import Why from "./Why";
import { Fade } from "react-reveal";
import ContactSec from "./ContactSec";
import ProcessImage from "../assets/images/process1.webp"
import ProcessImage2 from "../assets/images/process2.webp"
import ProcessImage3 from "../assets/images/process3.webp"
import ProcessImage4 from "../assets/images/process4.webp"
import { SmallProcess1 , SmallProcess2 , SmallProcess3 , SmallProcess4 , MediumProcess1 , MediumProcess2 , MediumProcess3 , MediumProcess4 , LargeProcess1 , LargeProcess2 , LargeProcess3 , LargeProcess4 } from '../scripts/export';



const Process = ({taglineJSX, taglineText , paragraph , image, smallImage , mediumImage , largeImage}) =>
{
      const processes = [
        {
          order:1,
          heading: 'Process 1',
          Mainparagraph: 'Lorem ipsum for process 1.',
          photoSrc: ProcessImage,
          smallImg:SmallProcess1,
          mediumImg:MediumProcess1,
          largeImg:LargeProcess1
        },
        {
          order:2,
          heading: 'Process 2',
          Mainparagraph: 'Lorem ipsum for process 2.',
          photoSrc: ProcessImage2,
          smallImg:SmallProcess2,
          mediumImg:MediumProcess2,
          largeImg:LargeProcess2
        },
        {
          order:1,
          heading: 'Process 3',
          Mainparagraph: 'Lorem ipsum for process 2.',
          photoSrc: ProcessImage3,
          smallImg:SmallProcess3,
          mediumImg:MediumProcess3,
          largeImg:LargeProcess3
        },
        {
          order:2,
          heading: 'Process 4',
          Mainparagraph: 'Lorem ipsum for process 2.',
          photoSrc: ProcessImage4,
          smallImg:SmallProcess4,
          mediumImg:MediumProcess4,
          largeImg:LargeProcess4
        },
        
      ];

  
    return(
       <>

         {/* MainHero Content Starts*/}
         {MainHero({ taglineJSX, taglineText, paragraph, image, smallImage , mediumImage , largeImage})}
         {/* MainHero Content Ends*/}

        {/* Main Process container starts */}
        
          {processes.map((process,index) =>(
            <Fade key={index} bottom distance="30%" duration={2500}>
            <section className={`process-container ${process.order !== 2 ? 'reverse' : ''}`}>
            <div className="image-div">
              <picture>
                <source srcSet={`${process.smallImg} 300w, ${process.mediumImg} 600w, ${process.largeImg} 1200w`}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw"/>
              <img src={process.photoSrc} alt={`Process ${process.order}`} className="process-image"
              loading="lazy"
              width={1200}
              height={675}
              />
              </picture>
              
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
          <Why/>
        </div>

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
    smallImage:"",
    mediumImage:"",
    largeImage:""
  };
  
  Process.propTypes = {
    taglineJSX: PropTypes.node,
    taglineText: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    smallImage: PropTypes.string.isRequired,
    mediumImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

export default Process;