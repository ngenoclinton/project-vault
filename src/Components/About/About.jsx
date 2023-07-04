import React, { useRef, useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'

import image from './images/myImage1.jpg';

import { DarkModeContext } from '../../contexts/modeContext/DarkModeContext';
const About = () =>{
    const titleRef = useRef(null);
    const aboutRef = useRef(null);
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({top: 10, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
    const [isHidden, setIsHidden] = useState(true);

  const {darkMode} = useContext(DarkModeContext);

    return (
    <section id="about" className={`${darkMode ? '' : 'about'}`} >
    <div className={`max-w-2xl md:max-w-4xl px-10 xs:px-14  text-primaryWhite flex flex-col justify-center ${darkMode ? '':'container'} `}>
    
      <div className="flex items-center space-x-2 text-[17px] xs:text-lg">
        <span className={`text-teal-300 font-semibold ${darkMode ? '' : 'text-[#1d2859]'}`}>01. </span>
        <h2 className={`text-center text-Grey4 font-semibold text-xl xs:text-2xl ${darkMode ? '' : 'text-Grey8 '}`}>About me</h2>
        <span className={`h-[1px] w-40 xs:w-56 sm:w-72 md:w-[330px] bg-slate-400 bg-opacity-30 flex justify-center ${darkMode ? '' : 'bg-Grey6'}`}></span>
      </div>
      
      <div className={`flex flex-col space-y-10 gap-10 space-x-10 md:flex-row text-sm xs:text-base text-Grey4 leading-8 sm:leading-7 mt-8 md:mt-0 ${darkMode ? '':'text-primaryWhite xs:text-[15px]'}`}>
          <div className={`md:mt-8 ${darkMode? '' : 'about-wrapper__info'}}`}>
            <p className="">
            I'm Clinton, a skilled front-end web developer freelancer. I specialize in creating user-friendly websites and web apps that engage and convert users. Proficient in HTML, CSS, JavaScript, front-end frameworks- React, Redux, and API integration. I bring designs to life and deliver seamless user experiences. With a strong focus on functionality and user engagement, my goal is to create exceptional web experiences.
            </p>
            <p className="">I have a keen interest in developing websites with smooth transitions and exceptional performance. I can seamlessly join your team, using efficient continuous integration methods and tools like Git.</p>
            <p className="">Here are a few technologies I’ve been working with recently:</p>
            <ul className="skills-list">
            <li>HTML/CSS</li>
            <li>Node.js</li>        
            <li>JavaScript (ES6+)</li>
            <li>TypeScript(..learning)</li>
            <li>React</li>
            <li>Github</li>  
            <li>TailwindCss</li>           
            <li>Vercel</li>                              
            </ul>
          </div>
          <div className="relative flex items-center justify-center md:items-start md:justify-normal">
            <div className="h-64 w-64 border-[2px] border-teal-300 rounded-md transform 
            translate-x-3 translate-y-3 shadow"></div>
            <img src={image} alt='image-here' className='h-64 w-64 rounded absolute object-cover object-top '/>
          </div>
      </div>
    </div>
  </section>
    )
}

export default About; 