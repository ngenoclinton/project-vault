import React, {useRef, useState, useEffect} from 'react';
import {HashLink as Link} from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

import './Contact.style.css';
import Form from './Form';

const ContactMe = ()=>{   
  const slideInParagraphRef = useRef(null);
  const fadeInHeaderRef = useRef(null);
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
   <div id="contact">
      <section className="contact">
        <div className="container">
          <h2 className="section-title fade-in" ref={fadeInHeaderRef}>Contact</h2>
          
          <div  className="contact-wrapper">
            <p className="contact-wrapper__text slide-in" ref={slideInParagraphRef}>Ready to move faster? Let's connect to help you and your team.</p>
          </div>
          <Form  data-aos='fade-left'/>
        </div>
      </section>
    </div>
    )
}

export default ContactMe;