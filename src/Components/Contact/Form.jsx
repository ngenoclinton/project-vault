import React, {useRef, useState,useEffect} from 'react';
import AOS from 'aos';

// emailjs
import emailjs from '@emailjs/browser';
 // AOS
 import 'aos/dist/aos.css';
         
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Form.css';


const Form = () =>{

  const form = useRef();
  const formRef = useRef(null);

  const [revealForm, setRevealForm] = useState(false);

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
        <div className={`form-container ${revealForm ? "reveal reveal-from-right" : ""}`} ref={formRef} > 
            <span className='dark-blue-text form-title-text'>Jump-start Your Projects</span>       
            <form ref={form}  onSubmit={sendEmail}>
            <div className='input-1'>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" placeholder='Your Name' required/>
            </div>            
            <div className='input-2'>
            <label for="email">Email:</label>
            <input type="email" id="email" name="user_email" placeholder='Your work email' required/>
            </div>
            <div className='textarea'>
            <label for="message">Message:</label>
            <textarea id="message" name="message" placeholder='What can we do for you?' required></textarea>
            </div>
            
            <button type="submit" className='form-btn'>Hit me up</button>
            </form>
     </div>
    )
}

export default Form;