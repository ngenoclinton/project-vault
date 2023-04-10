import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './contact.css';
import { useContext } from "react";

// import { ThemeContext } from '../../../Context';
const Contact = () => {
    // const theme = useContext(ThemeContext);
    // const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)
      // const sendEmail = (e) => {
      //   e.preventDefault();
    
      //   emailjs.sendForm('service_oiqct4m', 'template_gtdng5n', form.current, 'nMwHBHLEEsky5blhI')
      //     .then((result) => {
      //         console.log(result.text);
      //         setDone(true)
      //     }, (error) => {
      //         console.log(error.text);
      //     });
      // };
        
    return (
        <div className="contact-form" id="Contact">       
           <div>
              <div className="title c-title curved-shape">
                  <span></span>
              </div>
           </div>

           <div>
            <form ref={form} onSubmit=''>
                <div className='contact-grid'>
                 
                  <div className='f-item one'>
                        <label>Name</label>
                        <input type="text" name="user_name" className="user" placeholder="name"></input>
                   </div>

                   <div  className='f-item two'>
                        <label>Email</label>
                        <input type="email" name="user_email" className="user" placeholder="Email"></input>
                    </div>        

                    <div  className='f-item btm-item three'>
                      <label>Company</label>
                      <input type="text" name="user_site" className="user" placeholder="your company"></input>                      
                    </div>
                    <div  className='f-item btm-item three'>
                      <label>Company
Website</label>
                      <input type="text" name="user_site" className="user" placeholder="eg, htps://yoursite.co.yu"></input>                      
                    </div>
                  <div  className='f-item btm-item four'>
                      <label>Leave a Message</label>
                      <textarea name="message" className="user" placeholder="Message"></textarea>
                   </div>
                </div>
                <input type="submit" value="Send Message" className="button" placeholder='Send'></input>

                {done &&<span><span className='pop-up'></span><span className='pop-txt'>Email Recieved. Thanks</span></span>}
            </form>           
           </div>
          
        </div>
    )
}
export default Contact;