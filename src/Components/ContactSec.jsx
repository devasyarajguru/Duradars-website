import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import '../CSS/Contact.css';

const ContactSec = ({ formData, handleChange, handleSubmit, errors }) => {
  return (
    <>
    {/* Contact main Container starts */}
    <Fade bottom distance="30%"  duration={1500}>

    <div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
  <h2 className="contact-heading">Contact Us</h2>
    <form action='https://formspree.io/f/xvoekwrz' method="POST" onSubmit={handleSubmit}>
      <div className="formbold-mb-5">
        <label htmlFor="name" className="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="formbold-form-input"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="formbold-mb-5">
        <label htmlFor="email" className="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="formbold-form-input"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="formbold-mb-5">
        <label htmlFor="message" className="formbold-form-label"> Message </label>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Type your message"
          className="formbold-form-input"
          value={formData.message}
          onChange={handleChange}
        />
       {errors.message && <span className="error">{errors.message}</span>}
      </div>

      <div>
        <button className="formbold-btn" type="submit" >Submit</button>
      </div>
    </form>
  </div>
    </div>
    </Fade>
    {/* Contact main Container starts */}
    </>
  );

};

ContactSec.propTypes = {
    formData: PropTypes.object.isRequired, // Object containing form data
    handleChange: PropTypes.func.isRequired, // Function to handle input change
    handleSubmit: PropTypes.func.isRequired, // Function to handle form submission
    errors: PropTypes.object.isRequired, // Object containing form validation errors
  };

  ContactSec.defaultProps = {
    formData:{},
    handleChange:() => {},
    handleSubmit:() => {},
    errors:{},
  };

export default ContactSec;
