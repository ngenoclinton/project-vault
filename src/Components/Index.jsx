import React, { useRef, useEffect, useState } from 'react';

import { Routes, Route} from 'react-router-dom';
import { HashRouter} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

import About from './About/About';
import ContactMe from './Contact/Contact.component';
import Footer from './footer/Footer';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import Projects from './Projects/Projects';

import {FaTwitter, FaLinkedin, FaGithub, FaTimes} from 'react-icons/fa';


function Index() {
 
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="App relative">
      {/* <div  className={`sm:hidden z-100 w-full bg-slate-900 origin-top  absolute min-h-screen`}>
            <div className="flex flex-col text-white absolute w-full min-h-screen z-299">
                <ul className={`flex flex-col bg-slate-300`} >
                  <li >
                  <Link smooth to="#about" className='text-white'>About</Link>
                  </li>
                  <li>
                      <Link smooth to="#projects" className=''>Projects</Link> 
                  </li> 
                  <li onClick={()=>setIsHidden(!isHidden)}>
                      <Link smooth to="#projects" className=''>Contact</Link> 
                  </li>
                </ul>
                <Link
                  target="_blank"
                  className="w-full text-white text-base py-3 px-6 bg-teal-400"
                  href="assets/resume.pdf"
                >
                  View Resume
                </Link>                   
                <div>
                  <Link
                  target="_blank"
                  to='https://www.linkedin.com/in/clinton-ngeno-7b994a17a/'><FaLinkedin /></Link>
                      <Link
                  target="_blank"
                  to='https://github.com/ngenoclinton?tab=repositories'><FaGithub /></Link>
                </div>
            </div>
            <FaTimes className='' onClick={()=>setIsHidden(!isHidden)}/>
      </div> */}

    <Navigation 
      
    />    
      <Home
        isHidden= {isHidden}
       
      />
      <About
        isHidden= {isHidden}
        
      />
      <Projects
        isHidden= {isHidden}
       
      />
      <ContactMe
        isHidden= {isHidden}
      />
    <Footer
      isHidden= {isHidden}
    /> 
    
    </div>
  );
}
{/* <Footer
            isHidden= {isHidden}
          /> */}
export default Index;
