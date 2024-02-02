// Why.jsx
import '../CSS/Why.css';
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";
import { Fade } from 'react-reveal';

const Why = () => {
  const WhyDetails = 
  {
    mainTitle:"Why Choose Us?",
    items:
    [
      {
        title:"24/7 Support",
        icon:<MdOutlineSupportAgent className='support'/>,
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ducimus, velit qui asperiores culpa, totam voluptas ipsum minima magnam, mollitia odio ad ea expedita nobis dolorem illum aliquam fugiat!"
      },
      {
        title:"Customized Solutions",
        icon: <AiOutlineSolution  className='support'/>,
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ducimus, velit qui asperiores culpa, totam voluptas ipsum minima magnam, mollitia odio ad ea expedita nobis dolorem illum aliquam fugiat!"
      },
      {
        title:"Experience and Expertise",
        icon:<GrUserExpert className='support'/>,
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ducimus, velit qui asperiores culpa, totam voluptas ipsum minima magnam, mollitia odio ad ea expedita nobis dolorem illum aliquam fugiat!"
      },
      {
        title:"Proactive Approach",
        icon:<BsPersonWorkspace  className='support'/>,
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ducimus, velit qui asperiores culpa, totam voluptas ipsum minima magnam, mollitia odio ad ea expedita nobis dolorem illum aliquam fugiat!"
      },
    ]
  }
  return (
    <Fade bottom distance="30%"  duration={2500}>
      {/* Why Container */}
    <section className="why-container">
      <h2>{WhyDetails.mainTitle}</h2>
        {/* Why Grid Starts*/}
      <div className="why-grid">
        {/* Items */}
          {WhyDetails.items.map((detail) =>
          (
            <div className="why-item" key={detail.title}>
            {detail.icon}
            <p className='why-first'>
              {detail.title}
            </p>
            <p className="why-second">{detail.paragraph}</p>
        </div>
          ))}
        {/* Items */}

      </div>
        {/* Why Grid Ends*/}

    </section>
      {/* Why Container Ends*/}

    </Fade>
  );
};

export default Why;
