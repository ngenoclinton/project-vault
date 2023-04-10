import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './About.css'

const About = () =>{
    const titleRef = useRef(null);
    const aboutRef = useRef(null);
    const [isHidden, setIsHidden] = useState(true);


  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            setIsHidden(false);
            observer.unobserve(titleRef.current);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }
      );  
      observer.observe(titleRef.current);  
      return () => {
        observer.disconnect();
      };      
    }, []);
// 
useEffect(() => {
  const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setIsHidden(false);
          observer.unobserve(aboutRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      }
    );  
    observer.observe(aboutRef.current);  
    return () => {
      observer.disconnect();
    };      
  }, []);

// 

   // AOS
      // Initialize AOS with the default configuration
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        delay: 100,
        once: true
      });
  /**********/ 
  // useEffect(() => {
  //   const about = slideInLeftRef.current;

  //   const slideInOption = {
  //     threshold: 0.8, // Triggers the paragraph animation when it is 50% visible
  //   };

  //   const slideInObserver = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         // Add a CSS class to the paragraph to apply the sliding animation
  //         slideInLeft.classList.add('slide-in-animation');
  //         // Stop observing the paragraph once the animation has been triggered
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, slideInOption);

  //   slideInObserver.observe(slideInLeft);

  //   // Clean up function to remove the Intersection Observer when the component unmounts
  //   return () => {
  //     slideInObserver.unobserve(slideInLeft);
  //   };
  // }, []);
    /**********/ 

    return (
    <section id="about" className='about ' >
    <div className="containe">
      <h2 ref={titleRef}  className={`section-title ${isHidden ? 'hidden':'show'}`}>About me</h2>
      <div  className={`about-wrapper `}>
          <div ref={aboutRef} className={`about-wrapper__info  ${isHidden ? 'hidden':'show'}`}>
            <p className="about-wrapper__info-text">
            I'm Clinton, a passionate front-end web developer freelancer, I take pride in creating visually appealing and user-friendly websites and web apps that engage and convert users. With a strong foundation in HTML, CSS, JavaScript and front-end frameworks, I have the ability to bring designs to life and create seamless user experiences. With a keen eye for aesthetics and a passion for delivering seamless user experiences
            </p>
            <p className="about-wrapper__info-text">
            I write standards based code that is semantic, accessible, search-engine friendly, easy to maintain, cross browser compatible, and performant. I am also skilled in building systems that implement business logic and interact with server-side technology via APIs and tools such as React and Redux, as well as testing code.
            </p>
            <p className="about-wrapper__info-text">I have a special interest working on websites that have seamless transitions and require high-level performance to maintain a smooth and appealing website. I can quickly and efficiently join your team using continuous-integration methods and tools such as Git.</p>
            <ul class="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Github</li>
            <li>Vercel</li>
            </ul>
          </div>
      </div>
    </div>
  </section>
    )
}

export default About; 