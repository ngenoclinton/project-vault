"use client"

import { useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import "./About.css"
import image from "./images/profile_photo.jpeg"
import { DarkModeContext } from "../../contexts/modeContext/DarkModeContext"

const About = () => {
  const location = useLocation()
  const { darkMode } = useContext(DarkModeContext)

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ top: 10, behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location])

  return (
    <section id="about" className={`py-20 ${darkMode ? "bg-slate-900 text-gray-300" : "bg-gray-100 text-[#234E52]"}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-0">
        <div className="flex items-center space-x-2 mb-12">
          <span className={`text-xl font-semibold ${darkMode ? "text-teal-400" : "text-teal-500"}`}>01.</span>
          <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
          <span className={`h-[1px] flex-grow ${darkMode ? "bg-gray-700" : "bg-teal-500"}`}></span>
        </div>

        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-2/3">
          <p className={`${  darkMode ? "text-Grey4" : "text-slate-800"} text-sm sm:text-base leading-relaxed mb-4`}>
          I'm Clinton, a software developer passionate about building modern, scalable web applications with seamless user experiences. Proficient in JavaScript, React, Next.js, HTML, CSS, and Tailwind CSS, I specialize in crafting intuitive and high-performance interfaces.  
          </p>
          <p className={`${  darkMode ? "text-Grey4" : "text-slate-800"} text-sm sm:text-base leading-relaxed mb-4`}>              
          I have a keen interest in smooth transitions, optimized performance, and API integration to enhance usability. With strong problem-solving skills and a collaborative mindset, I thrive in team-oriented environments, leveraging tools like Git and Agile methodologies for efficient development. My goal is to combine software development with data-driven insights to create impactful solutions.
          </p>
            <p className="mb-4 text-base  text-teal-500 font-semibold">Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">              
              <li>JavaScript (ES6+)</li>
              <li>HTML/CSS</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div className="md:w-1/3 relative">
            <div
              className={`absolute inset-0 transform translate-x-3 translate-y-3 rounded-md ${darkMode ? "bg-teal-400" : "bg-teal-600"}`}
            ></div>
            <img
              src={image || "/placeholder.svg"}
              alt="Clinton Ngeno"
              className="relative z-10 rounded-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

