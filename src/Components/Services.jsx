import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import '../CSS/Home.css'
import '../CSS/Services.css'
import { Fade } from "react-reveal";

const Services = ({taglineJSX, taglineText , paragraph , image}) =>
{
    // const services = [
    //     {
    //       title: 'Web Application',
    //       icon: 'fas fa-layer-group',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    //     },
    //     {
    //       title: 'Highly customizable',
    //       icon: 'far fa-chart-bar',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    //     },
    //     {
    //       title: 'Responsive design',
    //       icon: 'fas fa-database',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    //     },
    //     {
    //       title: 'Service & Plugins',
    //       icon: 'fas fa-cogs',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    //     },
    //     {
    //       title: 'Optimized for speed',
    //       icon: 'fas fa-chart-pie',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    //     },
    //     {
    //       title: 'Dedicated support',
    //       icon: 'fas fa-thumbs-up',
    //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    //     },
    //   ];

    return(
        // Main About Us Container
       <>
       <section className='main-home-container'>
        {/* Tagline and Paragraph */}
           {/* Content Container starts */}
           <div className='content-container-wrapper'>
               <div className="content-container fade-in">
                 
                   {/*Hero Section content Starts */}
                   <div className="hero-section-content">
                   <h2 className="tagline slide-left"> {taglineJSX}{taglineText}</h2>
                   <p className="paragraph slide-left">{paragraph}</p>
                   <Link to="/contact">
                     <button className="custom-button slide-left">Contact Us</button>
                   </Link>
                   </div>
                   {/*Hero Section content Ends */}

                   <div className="hero-section-image">
                   {/*Hero Section Image Starts */}
                     <div className='hero-image'>
                       <img src={image} alt="Cyber-Image" className="svg-image slide-right"/>
                     </div>
                   </div>
                   {/* Hero Section Image ends */}
                   </div>
               </div>
           {/* Content Container Ends */}
       
       {/* Responsive Container Starts*/}
       <Fade bottom distance="30%" duration={1500}>
       
    <section id="responsive">
 
 <div className="row">
   <div className="column">
     <div className="card">
       <div className="icon-wrapper">
         <i className="fas fa-hammer"></i>
       </div>
       <h3>Service Heading</h3>
       <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
         consequatur necessitatibus eaque.
       </p>
     </div>
   </div>
   <div className="column">
     <div className="card">
       <div className="icon-wrapper">
         <i className="fas fa-brush"></i>
       </div>
       <h3>Service Heading</h3>
       <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
         consequatur necessitatibus eaque.
       </p>
     </div>
   </div>
   <div className="column">
     <div className="card">
       <div className="icon-wrapper">
         <i className="fas fa-wrench"></i>
       </div>
       <h3>Service Heading</h3>
       <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
         consequatur necessitatibus eaque.
       </p>
     </div>
   </div>
   <div className="column">
     <div className="card">
       <div className="icon-wrapper">
         <i className="fas fa-truck-pickup"></i>
       </div>
       <h3>Service Heading</h3>
       <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
         consequatur necessitatibus eaque.
       </p>
     </div>
   </div>
   <div className="column">
     <div className="card">
       <div className="icon-wrapper">
         <i className="fas fa-broom"></i>
       </div>
       <h3>Service Heading</h3>
       <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
         consequatur necessitatibus eaque.
       </p>
     </div>
   </div>
   <div className="column">
     <div className="card">
       <div className="icon-wrapper">
         <i className="fas fa-plug"></i>
       </div>
       <h3>Service Heading</h3>
       <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
         consequatur necessitatibus eaque.
       </p>
     </div>
   </div>
 </div>
</section>


    </Fade>
       {/* Responsive Container Ends*/}

     </section>
     {/* Main About Us Container Ends */}
     </>
    )
}

Services.defaultProps = {
    taglineJSX: null,
    taglineText: "",
    paragraph: "",
    image: "",
  };
  
  Services.propTypes = {
    taglineJSX: PropTypes.node,
    taglineText: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default Services;