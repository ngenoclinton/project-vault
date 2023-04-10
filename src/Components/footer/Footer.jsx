import "./footer.css"
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () =>{
    return(
        <>
            <div className="footer-container">
                <div className="foo-container">
                    <div className="footer-section">
                        <div className="row justify-center">
                            <div className="footer-content">
                                <ul className="footer-circles">
                                    <a target='_blank' href="https://www.linkedin.com/in/clinton-ngeno-7b994a17a/"><FaLinkedin className="footerIcon"/></a>
                                    <a target='_blank' href="https://github.com/ngenoclinton?tab=repositories"><FaGithub className="footerIcon"/></a>
                                    <a target='_blank' href="https://twitter.com/NgenoClinton"><FaTwitter className="footerIcon"/></a>
                                </ul>
                                <div className="copy-right-content">
                                    <p className="copyright"> Copyright {new Date().getFullYear()} clintonkipkoechngeno@gmail.com | All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;