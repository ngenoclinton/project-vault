import {useContext} from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import {BsFillDiscFill} from "react-icons/bs";

import { DarkModeContext  } from '../../contexts/modeContext/DarkModeContext';
const Footer = () =>{
const {darkMode} = useContext(DarkModeContext);
    return(
        <>
            <div className="text-Grey5 my-10">                
                <div className="space-y-12 mx-auto flex justify-center flex-col max-w-6xl">
                    <div className="flex justify-center items-center w-full py-5 md:py-10">
                    <Link to="#home">
                        <BsFillDiscFill className={`text-3xl md:text-4xl text-Grey5 bg-gradient-to-r from-teal-400 to-blue-950 rounded-full ${darkMode?'':'icon'}`}/>
                    </Link>
                    </div>
                    <div className='w-full flex flex-col justify-center relative'>
                    <div className="h-[1px] border-0 bg-gradient-to-r from-transparent via-Grey4 to-transparent"></div>
                           <ul className="text-sm sm:text-base text-Grey3 space-x-6 flex items-center py-10 mx-auto">                            
                                <a target='' href="#about" className='text-Grey4'>About</a>
                                <a target='' href="#projects" className='text-Grey4'>Projects</a>
                                <a target='' href="#contact" className='text-Grey4'>Contact</a>
                                <a target='_blank' href="" className='text-Grey4'>Source Code</a>
                            </ul>
                            <div className="h-[1px] border-0 bg-gradient-to-r from-transparent via-Grey4 to-transparent"></div>
                    </div>
                    <div className="flex justify-between items-center flex-col md:flex-row space-y-10 md:space-y-0 md:mx-10 xl:mx-0">
                        <p className="text-sm flex items-center"> ©{new Date().getFullYear()} clinton ngeno</p>
                        <div className="flex items-center space-x-8 text-xl ml-0 md:ml-16">
                            <Link  
                            target=""
                            to='https://www.linkedin.com/in/clinton-ngeno-7b994a17a/' className='text-Grey4'><FaLinkedin /></Link>
                            <Link 
                            target=""
                            to='https://github.com/ngenoclinton?tab=repositories' className='text-Grey4'><FaGithub /></Link> 

                            <Link target='' href="https://twitter.com/NgenoClinton" className='text-Grey4'><FaTwitter className="footerIcon"/></Link>
                        </div>
                        <p className='text-sm flex items-center'>clintonkipkoechngeno@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;