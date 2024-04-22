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
        paragraph:"Our team is available round the clock to provide you with immediate support and assistance. You can rely on us to address your concerns and resolve any issues promptly."
      },
      {
        title:"Customized Solutions",
        icon: <AiOutlineSolution  className='support'/>,
        paragraph:"We understand that every business is unique, which is why we offer customized solutions tailored to your specific needs. Our team works closely with you to develop strategies that align with your goals and objectives."
      },
      {
        title:"Experience and Expertise",
        icon:<GrUserExpert className='support'/>,
        paragraph:"With years of experience and deep expertise in the field of cybersecurity, our team brings valuable insights and knowledge to the table. Trust us to deliver solutions that are effective, efficient, and reliable."
      },
      {
        title:"Proactive Approach",
        icon:<BsPersonWorkspace  className='support'/>,
        paragraph:"We take a proactive approach to cybersecurity, anticipating potential threats and vulnerabilities before they can impact your business. Our proactive measures ensure that your digital assets are always protected and secure."
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
