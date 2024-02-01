// Why.jsx
import '../CSS/Why.css';
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";

const Why = () => {
  return (
    <div className="why-container">
      <h2>Why Choose Us?</h2>

      <div className="why-grid">
        <div className="why-item">
        <MdOutlineSupportAgent className='support'/>
          <p className='why-first'>
            24/7 Support
          </p>
          <p className="why-second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ducimus, velit qui asperiores culpa, totam voluptas ipsum minima magnam, mollitia odio ad ea expedita nobis dolorem illum aliquam fugiat!</p>
        </div>

        <div className="why-item">
        <AiOutlineSolution  className='support'/>
          <p className='why-first'>
          Customized Solutions
          </p>
          <p className="why-second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ducimus, velit qui asperiores culpa, totam voluptas ipsum minima magnam, mollitia odio ad ea expedita nobis dolorem illum aliquam fugiat!</p>
        </div>

        <div className="why-item">
        <GrUserExpert className='support'/>
          <p className='why-first'>
          Experience and Expertise
          </p>
          <p className="why-second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ducimus, velit qui asperiores culpa, totam voluptas ipsum minima magnam, mollitia odio ad ea expedita nobis dolorem illum aliquam fugiat!</p>
        </div>

        <div className="why-item">
        <BsPersonWorkspace  className='support'/>
          <p className='why-first'>
          Proactive Approach
          </p>
          <p className="why-second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero ducimus, velit qui asperiores culpa, totam voluptas ipsum minima magnam, mollitia odio ad ea expedita nobis dolorem illum aliquam fugiat!</p>
        </div>

      </div>
    </div>
  );
};

export default Why;
