"use client"

import { useState, useContext, useEffect } from "react"
import { HashLink as Link } from "react-router-hash-link"
import { Outlet } from "react-router-dom"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { BsFillDiscFill, BsFillMoonStarsFill, BsSunFill } from "react-icons/bs"
import { DarkModeContext } from "../../contexts/modeContext/DarkModeContext"
import resume from "./Clinton_Kipkoech_ Ngeno_Resume.pdf"
import "./Navigation.css"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { number: "01", text: "About", link: "#about" },
    { number: "02", text: "Projects", link: "#projects" },
    // { number: "03", text: "Skills", link: "#skills" },
    { number: "04", text: "Contact", link: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 bg-opacity-90 backdrop-blur-sm" : "py-4"
        } ${darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="#home" className="flex items-center space-x-2">
            <BsFillDiscFill className={`text-2xl ${darkMode ? "text-teal-400" : "text-blue-600"}`} />
            <span className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>Clint.Dev</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-14">
            {navItems.map((item, index) => (
              <Link key={index} to={item.link} className="group relative overflow-hidden">
                <span className={`text-xs ${darkMode ? "text-teal-400" : "text-blue-600"} mr-1`}>{item.number}.</span>
                <span className={`text-sm ${darkMode ? "text-gray-300" : "text-slate-700"}`}>{item.text}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            <a
              href={resume}
              download
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
              Resume
            </a>
          </div>

          <button
            onClick={toggleDarkMode}
            className="hidden md:block p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <BsSunFill className="text-yellow-400" /> : <BsFillMoonStarsFill className="text-slate-700" />}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={`w-full h-0.5 ${darkMode ? "bg-white" : "bg-slate-900"} transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
              />
              <span
                className={`w-full h-0.5 ${darkMode ? "bg-white" : "bg-slate-900"} transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 ${darkMode ? "bg-white" : "bg-slate-900"} transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-y-0 right-0 w-64 z-50 ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-slate-900"
        } p-6 shadow-lg md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-lg font-medium hover:text-teal-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.text}
              </Link>
            ))}
            <a
              href={resume}
              download
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </div>
          <div className="mt-auto">
            <div className="flex space-x-4 justify-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}

export default Navigation

