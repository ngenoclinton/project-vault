import React, {useState, useEffect, useContext } from "react";

import {HashLink as Link} from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
import { useLocation } from 'react-router-dom';

import {FaFacebook, FaTwitter, FaPinterest, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';
import Navigation from "../Navigation/Navigation";

import  './Home.css';
import { DarkModeContext } from "../../contexts/modeContext/DarkModeContext";

const Home = ({isHidden}) => {    
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
const {darkMode, toggleDarkMode} =useContext(DarkModeContext);
    return (
        <div id="home" className="home-container bg-green md:h-fit h-fit w-full md:max-h-auto">           
            <section className={`max-w-3xl px-14 xl:ml-32 md:max-w-4xl mt-28`}>
                
                 <div className="hero-text lx:ml-8 mx:ml-8">
                  <div className={`text-sm md:text-lg md:mb-4 ${darkMode ? 'text-teal-400' : 'text-black'} `}>
                    <h1>Hi, my name is</h1>
                  </div>
                  <div className={`text-Grey5 xs:text-3xl sm:text-[40px]  lg:text-6xl font-semibold sm:mb-4 my-4`}>
                   <h2 className={`${darkMode?"":"big-heading text-color-main text-[#232d5a]"}`}>Clinton Ngeno.</h2>
                  </div>
                  <div className={`font-semibold text-2xl -mt-4 xs:-mt-3 sm:mt-0 xs:text-3xl sm:my-2 sm:text-[40px] lg:text-6xl lg:my-4 ${darkMode?'text-Grey3':'text-[#272341]'}`}>
                    <h3 >I build things for the web.</h3>
                  </div> 
                  <p  className={` text-sm sm:text-[17px] mt-6 mb-14 rounded-xl leading-7 sm:max-w-md md:max-w-[500px]  lg:max-w-[525px] ${darkMode ? 'text-Grey3' : 'hero-btn load-hidden'}`}>
                  I'm a front-end developer specializing in creating exceptional digital experiences through clean, efficient coding. With a focus on user-friendly interfaces, I deliver accessible, high-performance websites. Let's bring your ideas to life! 
                  </p>    
                  <Link smooth to="#projects" className={`text-sm py-3 px-3 xs:text-xs md:text-sm xs:px-7 border-[1px] border-teal-400 mt-3 md:mt-4 rounded-md w-[80%] xs:w-full ${darkMode? 'text-teal-400' : 'bg-teal-400 text-primaryWhite'}`}>Check out my projects !</Link>               
                 </div>                      
            </section>
           
        </div>
    )
}

export default Home;