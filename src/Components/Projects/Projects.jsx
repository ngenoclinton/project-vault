import React, { useRef, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { projects } from './project.Json';

import './Projects.css';

const Projects = () =>{
    const slideInLeftRef = useRef(null);
    const slideInRightRef = useRef(null);
    const fadeInHeaderRef = useRef(null);

    // AOS
      // Initialize AOS with the default configuration
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        // delay: 100,
        once: true
      });
         /************intersection observer***/  
        //   useEffect(() => {
        //     const fadeInHeader = fadeInHeaderRef.current;
        
        //     const fadeInOptions = {
        //       threshold: 0.5, // Triggers the header fade-in animation when it is 50% visible
        //     };
        
        //     const fadeInObserver = new IntersectionObserver((entries, observer) => {
        //       entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //           // Set the header opacity to 1 when it enters the viewport
        //           fadeInHeader.style.opacity = '1';
        //           // Stop observing the header once the animation has been triggered
        //           observer.unobserve(entry.target);
        //         }
        //       });
        //     }, fadeInOptions);
        
        //     fadeInObserver.observe(fadeInHeader);
        
        //     // Clean up function to remove the Intersection Observer when the component unmounts
        //     return () => {
        //       fadeInObserver.unobserve(fadeInHeader);
        //     };
        //   }, []);
        /************Left Fade in *******/   

        /************Right**********/   
        useEffect(() => {
            const slideInRight = slideInRightRef.current;
        
            const slideInOption = {
              threshold: 0.8, // Triggers the paragraph animation when it is 50% visible
            };
        
            const slideInObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  // Add a CSS class to the paragraph to apply the sliding animation
                  slideInRight.classList.add('slide-in-animation');
                  // Stop observing the paragraph once the animation has been triggered
                  observer.unobserve(entry.target);
                }
              });
            }, slideInOption);
        
            slideInObserver.observe(slideInRight);
        
            // Clean up function to remove the Intersection Observer when the component unmounts
            return () => {
              slideInObserver.unobserve(slideInRight);
            };
          }, []);
        /**********component******/ 
    return(
        
     <div id='about' className='projects'>
        <h2 class={`section-title dark-blue-text`}>Projects</h2>        
        {projects.map((project)=>{
            return (
     <section id="projects">
        <div class="container">
         <div class="project-wrapper">
            <div class="row">
                <div class="project-wrapper__text ">
                    <h3 class="project-title">{project.title}</h3>
                    <div>
                    <p className="mb-4 description">
                    {project.description}
                    </p>
                    </div>
                    <a
                    rel="noreferrer"
                    target="_blank"
                    className="project-btn"
                    href={project.link}
                    >
                    See Live
                    </a>
                    <a
                    rel="noreferrer"
                    target="_blank"
                    className=" sl--btn"
                    href={project.github}
                    >
                    Source Code
                    </a>
                </div>
                <div >
                <div class="project-wrapper__image " ref={slideInRightRef}>
                    <a rel="noreferrer" href={project.link} target="_blank">
                    <div
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        class="thumbnail rounded js-tilt"
                    >
                        <img
                        alt="Project Image"
                        className="img-fluid"
                        src={project.image}
                        />
                    </div>
                    </a>
                </div>
                </div>
            </div> 
            </div>
        </div>       
      </section>        
            )
        })}  
        {/* <Linkt target='_blank' to='/works'> <button className='more-projects-btn' >View More Projects</button></Linkt> */}
     </div>         
        )
    }


export default Projects;