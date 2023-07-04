import React, {useRef, useState, useEffect, useContext} from 'react';
import {HashLink as Link} from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

import './Contact.style.css';
import Form from './Form';
import { DarkModeContext } from '../../contexts/modeContext/DarkModeContext';

const ContactMe = ()=>{   
  const slideInParagraphRef = useRef(null);
  const fadeInHeaderRef = useRef(null);

  const {darkMode} =useContext(DarkModeContext);
         // Initialize AOS with the default configuration
         AOS.init({
           duration: 1000,
           easing: 'ease-in-out',
           // delay: 100,
           once: true
         });
          /************intersection observer***/  
          
  useEffect(() => {
    const slideInParagraph = slideInParagraphRef.current;

    const slideInOptions = {
      threshold: 1, // Triggers the paragraph animation when it is 50% visible
    };

    const slideInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a CSS class to the paragraph to apply the sliding animation
          slideInParagraph.classList.add('slide-in-animation');
          // Stop observing the paragraph once the animation has been triggered
          observer.unobserve(entry.target);
        }
      });
    }, slideInOptions);

    slideInObserver.observe(slideInParagraph);

    // Clean up function to remove the Intersection Observer when the component unmounts
    return () => {
      slideInObserver.unobserve(slideInParagraph);
    };
  }, []);

  useEffect(() => {
    const fadeInHeader = fadeInHeaderRef.current;

    const fadeInOptions = {
      threshold: 0.5, // Triggers the header fade-in animation when it is 50% visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set the header opacity to 1 when it enters the viewport
          fadeInHeader.style.opacity = '1';
          // Stop observing the header once the animation has been triggered
          observer.unobserve(entry.target);
        }
      });
    }, fadeInOptions);

    fadeInObserver.observe(fadeInHeader);

    // Clean up function to remove the Intersection Observer when the component unmounts
    return () => {
      fadeInObserver.unobserve(fadeInHeader);
    };
  }, []);

        /***************component ***/  
    return (
   <div id="contact" className='border-Grey3 border-opacity-10 border-b-[1px]'>
      <section className={`mb-12 md:mb-20 ${darkMode ? 'mx-auto max-w-3xl':"contact"}`}>
        <div className={`container space-y-5 ${darkMode ? 'mx-auto' :""}`}>
          <h2 className={`section-title fade-in text-center text-4xl font-bold ${darkMode ? 'text-Grey4' : 'text-primaryWhite text-3xl'}`} ref={fadeInHeaderRef}>Give me your Idea:</h2>
          <p ref={slideInParagraphRef} className={`text-center xs:text-[17px] leading-7 max-w-xl items-center justify-center mx-auto text-[15px] ${darkMode ? 'text-Grey3' : 'text-primaryWhite'}`}>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!</p>
          <div  className="contact-wrapper">            
          </div>
          <Form  data-aos='fade-left'/>
        </div>
      </section>
    </div>
    )
}

export default ContactMe;