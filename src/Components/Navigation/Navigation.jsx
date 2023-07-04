import React,{Fragment, useEffect, useState} from 'react';
import { useContext } from 'react';
import {Outlet } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

import './Navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import Resume from './resume/ClintonNgenoResume.pdf';
import resume from './resume.pdf'
import {FaTwitter, FaLinkedin, FaGithub, FaTimes} from 'react-icons/fa';
import {BsFillDiscFill} from "react-icons/bs";
import {BsFillMoonStarsFill} from 'react-icons/bs';
// context import 
import { DarkModeContext } from '../../contexts/modeContext/DarkModeContext';
import { projects } from '../Projects/project.Json';


function Navigation() {
    const [isHidden, setIsHidden] = useState(true);  
    // 
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const darkModeToggle =()=>{
        toggleDarkMode();
        setIsHidden(!isHidden);
    }
    return(
        <Fragment >         
         <div  className= {`fixed top-0 left-0 w-full pt-9 pb-4 px-9 z-50 shadow-sm bg-slate-900 ${darkMode? '' : 'bg-veryLightGray'}`}>
            <div className={`sticky flex max-w-6xl mx-auto justify-between  ${darkMode ? 'text-white' : ''}`}>
                <Link smooth to="#home" className={`flex items-center space-x-1 justify-start ${darkMode?'text-white':'text-rgb(35, 45, 90, .9); '}`}>
                    <BsFillDiscFill className={`text-2xl bg-gradient-to-r from-teal-400 to-blue-950 rounded-full ${darkMode?'':'icon'}`}/>
                    <span className={`flex items-center text-transparent bg-gradient-to-r from-teal-400 via-[#64ffda] to-blue-950 bg-clip-text  mt-1 ${darkMode?'':'logo-name text-transparent bg-gradient-to-r from-[#1d2859] to-[#02aab0] bg-clip-text'}`}>Clint.Dev</span>
                </Link>

                <div className={`hidden md:flex lg:flex ${darkMode ? 'text-white' : ''}`}>
                    <ul className='flex mx-auto items-center text-base space-x-6'>
                        {/* <li>
                            <span className={`text-xs text-[#64ffda] mr-2 ${darkMode?'':'text-transparent bg-gradient-to-r from-[#1d2859] to-[#02aab0] bg-clip-text'}`}>01.</span>
                            <Link smooth to="#projects" className={`text-Grey5  ${darkMode?'text-sm hover:text-[#64ffda]':'text-black text-base'}`}>Skills</Link> 
                        </li> */}
                        <li>
                            <span className={`text-xs text-[#64ffda] mr-2 ${darkMode?'':'text-transparent bg-gradient-to-r from-[#1d2859] to-[#02aab0] bg-clip-text'}`}>02.</span>
                            <Link to="#projects" className={`text-Grey5  ${darkMode?'text-sm hover:text-[#64ffda]':'text-black text-base'}`}>Projects</Link> 

                        </li>
                        <li>
                            <span className={`text-xs text-[#64ffda] mr-2 ${darkMode?'':'text-transparent bg-gradient-to-r from-[#1d2859] to-[#02aab0] bg-clip-text'}`}>03.</span>
                            <Link smooth to="#about" className={`text-Grey5  ${darkMode?'text-sm hover:text-[#64ffda]':'text-black text-base'}`}>About</Link>
                        </li>
                        
                        <li>
                            <span className={`text-xs text-[#64ffda] mr-2 ${darkMode?'':'text-transparent bg-gradient-to-r from-[#1d2859] to-[#02aab0] bg-clip-text'}`}>04.</span>
                            <Link smooth to="#contact" className={`text-Grey5  ${darkMode?'text-sm hover:text-[#64ffda]':'text-black text-base'}`}>Contact</Link> 
                        </li> 
                        <a
                            
                            target="_blank"
                            className="text-white bg-gradient-to-r from-[#02aab0] to-[#00cdac] px-5 py-1 text-sm rounded-md"
                            href={resume}
                            download
                        >
                        Resume
                        </a>
                    
                        {/* <div className="hidden lg:flex items-center space-x-5 text-xl text-primaryWhite">
                            <Link  
                            target="_blank"
                            to='https://www.linkedin.com/in/clinton-ngeno-7b994a17a/' className='text-Grey4'><FaLinkedin /></Link>
                            <Link 
                            target="_blank"
                            to='https://github.com/ngenoclinton?tab=repositories' className='text-Grey4'><FaGithub /></Link> 

                            <BsFillMoonStarsFill onClick={toggleDarkMode} className='text-Grey4'/>                   
                        </div> */}
                    </ul>                       
                </div>            
            </div>  
            {/* hamburger Button */}
            <div  className={`flex flex-col justify-end items-end space-y-2 absolute top-10 right-10 transform md:hidden lg:hidden`} onClick={()=>setIsHidden(!isHidden)} >
                <span className={` bg-teal-500 h-[2px] w-8 ${darkMode ? "":"bg-[#272341]"}`}/>
                <span className={` bg-teal-500 h-[2px] w-9 mr-1 ${darkMode ? "":"bg-[#272341]"}`}/>
                <span className={` bg-teal-500 h-[2px] w-8 ${darkMode ? "":"bg-[#272341]"}`}/>
            </div>
            <div  className={`sidenav mx-auto h-auto md:hidden ${isHidden ? '':'show'} fixed z-50 pt-14`}>
                <div className="flex flex-col items-center space-y-10 justify-center my-auto ">
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <Link smooth to="#about" className='nav-item text-lg w-full mx-auto py-6 my-auto'>About</Link>
                    </li>
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <Link smooth to="#skills" className='nav-item text-lg w-full mx-auto py-6'>Skills</Link>
                    </li>
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <Link smooth to="#projects" className='nav-item text-lg w-full mx-auto py-6'>Projects</Link> 
                    </li> 
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <Link smooth to="#projects" className='nav-item text-lg w-full mx-auto py-6'>Contact</Link> 
                    </li>
                    <Link
                        target="_blank"
                        className="resume-btn nav-item w-xl cursor-pointer"
                        href="assets/resume.pdf"
                    >
                        View Resume
                    </Link>                   
                    <div>
                        <Link
                        target="_blank"
                        to='https://www.linkedin.com/in/clinton-ngeno-7b994a17a/'
                        className='text-Grey4 text-base'><FaLinkedin /></Link>
                        <Link
                        target="_blank"
                        to='https://github.com/ngenoclinton?tab=repositories'
                        className={`text-Grey4 text-xl ${darkMode ? '' : 'text-slate-700'}`}><FaGithub /></Link>

                        <BsFillMoonStarsFill onClick={darkModeToggle} /> 
                    </div>
                </div>
                
        {/* Close nav button */}
                <div
                    className={`flex flex-col justify-end items-end space-y-2 absolute top-4 right-10 cursor-pointer`}
                    onClick={()=>setIsHidden(!isHidden)}
                >
                    <span
                    className={`bg-teal-500 h-[2px] w-7 rounded-xl transform rotate-45 translate-y-1`}
                    />                    
                    <span
                    className={`bg-teal-500 h-[2px] w-7 rounded-xl transform -rotate-45 -translate-y-1`}
                    /> </div>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation;