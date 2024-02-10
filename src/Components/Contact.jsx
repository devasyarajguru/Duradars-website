import MainHero from "./MainHero";
import PropTypes from "prop-types";
import '../CSS/Contact.css';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import ContactSec from "./ContactSec";
import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact({ taglineJSX, taglineText, paragraph, image }) {
  const [state, formSubmit] = useForm("xvoekwrz");
 
  const [formData,setFormData] =  useState({
    name:"",
    email:"",
    message:""
  })

  const [errors,setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
  {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    //Perfom Validation
    const errors = validateForm(formData);
    if(Object.keys(errors).length > 0)
    {
      setErrors(errors);
      return; // Exit early if there are errors
    }

    //If validation passes , submit the form 

    try
    {
      await formSubmit(formData);
      setErrors({});
      // alert("Your Response has been submitted! Thank You!");
      setSubmitted(true)
      // Optionally, reset form data after successful submission
      setFormData({
        name:"",
        email:"",
        message:""
      });
      toast.success('Your Response has been submitted! Thank You!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        })
    }

    catch (error)
    {
      console.error("Form submission failed", error)
    }
  }

  const validateForm = (data) =>
  {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else if (data.name.length > 25) {
      errors.name = 'Name must be less than 25 characters';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  }

  const isValidEmail = (email) =>
  {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
   
  return (
<>
    {/* MainHero Content Starts*/}

    {MainHero({ taglineJSX, taglineText, paragraph, image })}
          
    {/* MainHero Content Ends*/}
     
    <ContactSec
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        state={state}
      />

{submitted && (
        <ToastContainer /> 
      )}
    </>
  );
}

Contact.defaultProps = {
    taglineJSX: null,
    taglineText: "",
    paragraph: "",
    image: "",
  };
  
  Contact.propTypes = {
    taglineJSX: PropTypes.node,
    taglineText: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default Contact;