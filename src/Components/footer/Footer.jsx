"use client"

import { useContext } from "react"
import { Link } from "react-router-dom"
import "./footer.css"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { BsFillDiscFill } from "react-icons/bs"
import { DarkModeContext } from "../../contexts/modeContext/DarkModeContext"

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <footer className={`py-16 ${darkMode ? "bg-slate-900 text-gray-300" : "bg-[#F0F4F8] text-[#234E52]"}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-0">
        <div className="flex flex-col items-center space-y-8">
          <Link to="#home" className="transition-transform duration-300 hover:scale-110">
            <BsFillDiscFill className={`text-4xl ${darkMode ? "text-teal-400" : "text-[#2C7A7B]"}`} />
          </Link>

          <nav className="w-full">
            <ul className="flex justify-center space-x-6 text-sm md:text-base">
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/your-portfolio-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  Source Code
                </a>
              </li>
            </ul>
          </nav>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Clinton Ngeno</p>
            <div className="flex space-x-6 text-xl">
              <a
                href="https://www.linkedin.com/in/clinton-ngeno-7b994a17a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                <FaLinkedin aria-label="LinkedIn" />
              </a>
              <a
                href="https://github.com/ngenoclinton?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                <FaGithub aria-label="GitHub" />
              </a>
              <a
                href="https://twitter.com/NgenoClinton"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                <FaTwitter aria-label="Twitter" />
              </a>
            </div>
            <p className="text-sm">clintonkipkoechngeno@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

