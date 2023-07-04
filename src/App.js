import React, { useRef, useEffect, useState, useContext } from 'react';
  
import { Routes, Route, Link} from 'react-router-dom';

import './App.css';
import About from './Components/About/About';
import ContactMe from './Components/Contact/Contact.component';
import Contact from './Components/contacts/Contact';
import Footer from './Components/footer/Footer';
import Home from './Components/Home/Home';
import Index from './Components/Index';
import Navigation from './Components/Navigation/Navigation';
import Projects from './Components/Projects/Projects';
import Works from './Components/Works/Works';
// import {HashLink as Link} from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
import {FaTwitter, FaLinkedin, FaGithub, FaTimes} from 'react-icons/fa';

// 
import { DarkModeContext } from './contexts/modeContext/DarkModeContext';
function App() {
  const [isHidden, setIsHidden] = useState(true);
  const {darkMode, setDarkMode} =useContext(DarkModeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const titleRef = useRef(null);

  
  return (
    <div className={`relative ${darkMode ? 'bg-slate-900 text-white' : 'bg-white'}`}>
    
        <Index/>
        <Routes>          
              <Route path='/home' element={<Home
                isHidden= {isHidden}
              /> }/> 
              <Route path='/navigation' element={<Navigation
                 darkMode={darkMode}
                 className="z-50"
              />}/>
              <Route path='/about' element={<About
                isHidden= {isHidden}
              /> }/>   
              <Route path='/projects' element={ <Projects
                isHidden= {isHidden}
                titleRef = {titleRef}
              /> }/> 
              <Route path='/contact' element={<ContactMe isHidden= {isHidden}
              />}/>
              {/* <Route path='/works' element={<Works />} />  */}
        </Routes>
    </div>
  );
}

export default App;
