import React, {useRef, useState,useEffect, useContext} from 'react';
import AOS from 'aos';

// emailjs
import emailjs from '@emailjs/browser';
 // AOS
 import 'aos/dist/aos.css';
         
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Form.css';

import { DarkModeContext } from '../../contexts/modeContext/DarkModeContext';

const Form = () =>{

  const form = useRef();
  const formRef = useRef(null);

  const [revealForm, setRevealForm] = useState(false);
  const {darkMode} =useContext(DarkModeContext);

 // Initialize AOS with the default configuration
 AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    delay: 100,
    once: true
  });
  /**********************************************/ 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealForm(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.3,
      }
    );
    observer.observe(formRef.current);
  
    return () => {
      observer.unobserve(formRef.current);
    };
  }, [formRef]);
  /*************************emailJs helper function**/ 
  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_oiqct4m', 'template_4dxip8q', e.target, 'nMwHBHLEEsky5blhI')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
        console.log('FAILED...', error.text);

      });
  
    e.target.reset();
  }
  /************************component*********/ 
    return (
        <div className={`form-container  max-w-3xl w-full mx-auto ${revealForm ? "reveal reveal-from-right" : ""} ${darkMode&&'mx-auto'}`} ref={formRef} > 
            <span className='dark-blue-text form-title-text text-[#2C7A7B]'>Jump-start Your Projects</span>       
            <form ref={form}  onSubmit={sendEmail}>
            <div className='input-1'>
            <label htmlFor="name" className='text-[#2C7A7B]'>Name:</label>
            <input type="text" id="name" name="user_name" placeholder='Your Name' required/>
            </div>            
            <div className='input-2'>
            <label htmlFor="email" className='text-[#2C7A7B]'>Email:</label>
            <input type="email" id="email" name="user_email" placeholder='Your work email' required/>
            </div>
            <div className='textarea'>
            <label htmlFor="message" className='text-[#2C7A7B]'>Message:</label>
            <textarea id="message" name="message" placeholder='What can we do for you?' required></textarea>
            </div>
            
            <div className="mt-6 w-full flex justify-center">
          <button
            type="submit"
            className={`w-full sm:w-auto py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              darkMode ? "bg-teal-600 hover:bg-teal-700" : "bg-[#2C7A7B] hover:bg-[#234E52]"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}
          >
            Send Message
          </button>
        </div>
            </form>
     </div>
    )
}

export default Form;