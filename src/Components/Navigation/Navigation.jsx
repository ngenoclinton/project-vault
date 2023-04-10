import React,{Fragment, useEffect, useState} from 'react';
import {Outlet } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

import './Navigation.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import Resume from './resume/ClintonNgenoResume.pdf';

import {FaTwitter, FaLinkedin, FaGithub, FaTimes} from 'react-icons/fa';
import {BsFillDiscFill} from "react-icons/bs";

function Navigation() {
    const [isHidden, setIsHidden] = useState(true);

    return(
        <Fragment >         
         <div className='nav-container flex'>
            <Link smooth to="#home" className='Logo'><BsFillDiscFill className='logo'/> Clint.Dev</Link>
            <div className={`nav-menu flex`}>
                <ul className='flex'>
                    <li>
                    <Link smooth to="#about" className='nav-item'>About</Link>
                    </li>
                    <li><Link smooth to="#projects" className='nav-item'>Projects</Link> </li>
                    <li><Link smooth to="#contact" className='nav-item'>Contact</Link> </li> 
                    {/* <Link
                        rel="noreferrer"
                        target="_blank"
                        className="resume-btn nav-item"
                        href='/resume/ClintonNgenoResume.pdf'
                    >
                        View Resume
                    </Link> */}
                   
                    <div>
                    <Link  
                    target="_blank"
                    to='https://www.linkedin.com/in/clinton-ngeno-7b994a17a/'><FaLinkedin /></Link>
                    <Link 
                    target="_blank"
                    to='https://github.com/ngenoclinton?tab=repositories'><FaGithub /></Link>
                    
                    </div>
                </ul>
                <FontAwesomeIcon icon={faBars} className='open' onClick={()=>setIsHidden(!isHidden)} />
                {/* <HiBars3BottomRight className='open' onClick={()=>setIsHidden(!isHidden)}/> */}
            </div>
            <div  className={`sidenav ${isHidden ? '' : 'show'}`}>
            <div className="flex">
                    <li onClick={()=>setIsHidden(!isHidden)}>
                      <Link smooth to="#about" className='nav-item'>About</Link>
                    </li>
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <Link smooth to="#projects" className='nav-item'>Projects</Link> 
                    </li> 
                    <li onClick={()=>setIsHidden(!isHidden)}>
                        <Link smooth to="#projects" className='nav-item'>Contact</Link> 
                    </li>
                    {/* <Link
                        rel="noreferrer"
                        target="_blank"
                        className="resume-btn nav-item"
                        href="assets/resume.pdf"
                    >
                        View Resume
                    </Link>                     */}
                <div>
               <Link
               target="_blank"
               to='https://www.linkedin.com/in/clinton-ngeno-7b994a17a/'><FaLinkedin /></Link>
                <Link
               target="_blank"
               to='https://github.com/ngenoclinton?tab=repositories'><FaGithub /></Link>
                </div>
            </div>
            <FaTimes className='close' onClick={()=>setIsHidden(!isHidden)}/>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation;