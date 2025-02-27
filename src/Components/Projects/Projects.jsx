"use client"

import { useEffect, useContext, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
// import { projects } from "./projects.json"
import {projects} from './project.Json'
import "./Projects.css"
import { DarkModeContext } from "../../contexts/modeContext/DarkModeContext"

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext)
  const [projectsLightMode, setProjectsLightMode] = useState(false)

  const effectiveMode = projectsLightMode ? false : darkMode

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    })
  }, [])

  const toggleProjectsMode = () => {
    setProjectsLightMode(!projectsLightMode)
  }

  return (
    <section id="projects" className={`h-fit mb-45 lg:mb-64 z-100 ${effectiveMode ? "" : "projects"}`}>
      <div className="max-w-4xl xl:max-w-5xl mx-auto px-5 sm:px-0">
        <div
          className="flex items-center space-x-2 md:max-w-2xl lg:max-w-5xl sm:max-w-xl justify-center sm:justify-normal mb-16"
          data-aos="fade-right"
        >
          <span className="text-teal-300 font-semibold">02. </span>
          <h2
            className={`project-header text-center text-Grey4 font-semibold sx:text-lg text-xl sm:text-2xl ${effectiveMode ? "" : "text-slate-900"}`}
          >
            Some things I have built
          </h2>
          <span className="h-[1px] w-16 xs:w-52 sm:w-70 md:w-[330px] bg-slate-400 bg-opacity-30 flex justify-center"></span>

          <button
            onClick={toggleProjectsMode}
            className="ml-auto flex items-center justify-center p-2 rounded-full transition-colors duration-300 hover:bg-slate-700 hover:bg-opacity-20"
            data-aos="fade-left"
            aria-label={projectsLightMode ? "Switch to dark mode" : "Switch to light mode"}
          >
            {projectsLightMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card relative"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={100}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} relative`}>
                <div
                  className={`project-image-container relative z-10 lg:w-7/12 overflow-hidden rounded-md transition-all duration-300 
                    ${index % 2 === 0 ? "lg:mr-[-50px]" : "lg:ml-[-50px]"}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={200}
                >
                  <a
                    rel="noreferrer"
                    href={project.link}
                    target="_blank"
                    className="block overflow-hidden rounded-md group"
                  >
                    <div className="image-wrapper overflow-hidden rounded-md relative">
                      <div className="absolute inset-0 bg-teal-500 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img
                        alt={`${project.title} Project Screenshot`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        src={project.image || "/placeholder.svg"}
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>

                <div
                  className={`project-content z-20 lg:w-7/12 flex flex-col justify-center 
                    ${index % 2 === 0 ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"} 
                    p-6 lg:p-0`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={300}
                >
                  <h3
                    className={`title text-xl sm:text-2xl font-bold mb-4 text-Grey8 ${effectiveMode ? "" : "project-title"}`}
                  >
                    {project.title}
                  </h3>

                  <div
                    className={`description-box ${effectiveMode ? "bg-slate-900 bg-opacity-90" : "bg-slate-100 bg-opacity-90"} p-6 rounded-md shadow-lg mb-6 max-w-lg`}
                  >
                    <p
                      className={`${effectiveMode ? "text-Grey4" : "text-slate-800"} text-sm sm:text-base leading-relaxed`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className={`flex space-x-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className={`project-btn rounded-sm hover:bg-teal-500 hover:text-white transition-colors duration-300 ${!effectiveMode && "project-btn-light"}`}
                      href={project.link}
                    >
                      View Project
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className={`project-btn rounded-sm hover:bg-teal-500 hover:text-white transition-colors duration-300 ${!effectiveMode && "project-btn-light"}`}
                      href={project.github}
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

