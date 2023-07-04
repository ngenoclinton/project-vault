import React, { useRef, useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { projects } from './project.Json';
import './Projects.css';
import { DarkModeContext } from '../../contexts/modeContext/DarkModeContext';

const Projects = () =>{

   const {darkMode} = useContext(DarkModeContext)
        
    return(
     <section id='projects' className={`h-fit mb-45 lg:mb-64 z-100 ${darkMode ? '' : 'projects'}`} >
      <div className='max-w-4xl xl:max-w-5xl justify-center mx-5 sm:mx-0 '>
            <div className="flex items-center space-x-1 sm:space-x-2 md:max-w-2xl lg:max-w-5xl sm:max-w-xl justify-center sm:justify-normal">
                <span className='text-teal-300 font-semibold'>02. </span>
                <h2 className={`project-header text-center text-Grey4 font-semibold sx:text-lg text-xl sm:text-2xl ${darkMode?'':'text-slate-900'}`}>Some things I have built</h2>
                <span className="h-[1px]  w-16 xs:w-52 sm:w-70 md:w-[330px] bg-slate-400 bg-opacity-30 flex justify-center"></span>
            </div> 

            {projects.map((project, index)=>{
              let projectClass = '';
              let fleex = '';
              let position ='';
              let header = '';
              let description = '';
              let buttons = ''
              let image = ''
              if (project.title === 'Swift-Cart e-commerce') {
                projectClass = '';
                fleex = 'flex flex-col lg:flex-row-reverse';
                position= 'absolute lg:w-1/2 flex flex-col items-right  lg:justify-end z-40';
                header = 'lg:text-right lg:flex lg:items-left lg:justify-end';
                description='lg:text-right';
                buttons='lg:flex lg:justify-end';
                
              } else if (project.title === 'WeatherSense') {
                projectClass = '';
                fleex = 'flex flex-col lg:flex-row  lg:top-80';
                position= 'absolute lg:w-1/2 flex flex-col lg:items-right lg:justify-end z-40';
                image='lg:absolute relative lg:justify-end lg:items-right lg:right-0 z-20 lg:float-right lg:-top-80';
              } else if (project.title === 'portfolio website') {
                projectClass = '';
                fleex = 'flex flex-row-reverse my-16 lg:mt-0 lg:top-80 ';
                position= 'absolute lg:w-1/2 flex flex-col lg:items-right lg:justify-end z-40';
                header = 'lg:text-right lg:flex items-left justify-end';
                description='lg:text-right';
                buttons='lg:flex lg:justify-end';
              }
            return (              
              <div  key={index} className={`mt-14 ${projectClass}`}>
                <div className="project-wrapper relative">
                  <div className={`${fleex} relative h-fit mx-12 lx:-space-x-6 lg:mx-0 mb-16 sx:mb-12 lg:mb-24`}>
                      <div className={`space-y-6 sx:space-y-6 sm:space-y-10 lg:space-y-7 lg:mx-0 ${position} bg-slate-950 bg-opacity-90 lg:bg-transparent lg:bg-opacity-100 ${!darkMode&&'project-wrapper__text'} top-0 left-0 right-0 bottom-0 lg:top-auto lg:left-auto lg:right-auto lg:bottom-auto py-10 px-3 xs:px-5 sm:py-20 lg:py-0 sm:px-10 lg:px- h-full`}>
                          <h3 className={`title text-xl sm:text-2xl text-Grey8 ${header} ${darkMode ? '': 'project-title'}`}>{project.title}</h3>
                          <div>
                          <p className={`text-sm sm:text-[15px] leading-7 md:leading-normal text-Grey4 lg:bg-slate-950 lg:p-7 ${description} lg:rounded-lg ${darkMode ? '' : 'mb-4 description'}`}>
                          {project.description}
                          </p>
                          </div>
                          <div className={`flex ${buttons} space-x-3`}>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="project-btn rounded-sm"
                            href={project.link}
                            >
                            View
                            </a>
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="project-btn rounded-sm"
                            href={project.github}
                            >
                            Git Hub
                            </a>
                            
                          </div>
                      </div>                      
                      <div className={` project-wrapper__image ${image} relative`} >
                          <a rel="noreferrer" href={project.link} target="_blank">
                          <div
                              data-tilt
                              data-tilt-max="4"
                              data-tilt-glare="true"
                              data-tilt-max-glare="0.5"
                              className="thumbnail md:rounded js-tilt h-fit"
                          >
                              <img
                              alt="Project Image"
                              className="w-[60%] img-fluid"
                              src={project.image}
                              />
                          </div>
                          </a>
                      </div>                      
                  </div> 
                </div>
              </div>      
            )
          })}  
      </div>  
    </section>        
        )
    }


export default Projects;