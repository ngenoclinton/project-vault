import React, {useState, useEffect } from "react";

import {HashLink as Link} from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

import {FaFacebook, FaTwitter, FaPinterest, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';
import Navigation from "../Navigation/Navigation";

import  './Home.css';

const Home = ({isHidden}) => {    

    return (
        <div id="home" className="home-container">           
            <section className={`hero ${isHidden ? 'hidden' : 'show'}`}>
                <div className="container">
                 <div className="hero-text">
                  <div class="">
                    <h1>Hi, my name is</h1>
                  </div>
                  <div class="">
                   <h2 class="big-heading text-color-main">Clinton Ngeno.</h2>
                  </div>
                  <div class="">
                    <h3 class="big-heading">I build things for the web.</h3>
                  </div> 
                  <p  className={`hero-btn load-hidden ${isHidden ? '' : 'show'}`}>
                    <a><Link smooth to="#contact"className="btn btn--hero ">Start a conversation</Link></a>
                  </p>                   
                 </div>
                
                </div>       
            </section>
           
        </div>
    )
}

export default Home;