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
