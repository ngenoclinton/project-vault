"use client"

import { useContext } from "react"
import { projects } from "./project.Json"
import "./Projects.css"
import { DarkModeContext } from "../../contexts/modeContext/DarkModeContext"

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext)

  const toggleProjectsMode = () => {
    // This function is kept for future use if needed
    console.log("Toggle projects mode")
  }

  return (
    <section id="projects" className={`h-fit mb-45 lg:mb-64 z-100 ${darkMode ? "" : "projects"}`}>
      <div className="max-w-4xl xl:max-w-5xl mx-auto px-5 sm:px-0 space-y-14">
        <div className="flex items-center space-x-2 md:max-w-2xl lg:max-w-5xl sm:max-w-xl justify-center sm:justify-normal">
          <span className="text-teal-300 font-semibold">02. </span>
          <h2
            className={`project-header text-center text-Grey4 font-semibold sx:text-lg text-xl sm:text-2xl ${
              darkMode ? "" : "text-slate-900"
            }`}
          >
            Some things I have built
          </h2>
          <span className="h-[1px] w-16 xs:w-52 sm:w-70 md:w-[330px] bg-slate-400 bg-opacity-30 flex justify-center"></span>

          <button
            onClick={toggleProjectsMode}
            className="ml-auto flex items-center justify-center p-2 rounded-full hover:bg-slate-700 hover:bg-opacity-20"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="project-card relative">
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} relative`}>
                <div
                  className={`project-image-container relative z-10 lg:w-7/12 overflow-hidden rounded-md
                    ${index % 2 === 0 ? "lg:mr-[-50px]" : "lg:ml-[-50px]"}`}
                >
                  <a rel="noreferrer" href={project.link} target="_blank" className="block overflow-hidden rounded-md">
                    <div className="image-wrapper overflow-hidden rounded-md relative">
                      <img
                        alt={`${project.title} Project Screenshot`}
                        className="w-full h-auto object-cover"
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
                >
                  <h3
                    className={`title text-xl sm:text-2xl font-bold mb-4 text-Grey8 ${darkMode ? "" : "project-title"}`}
                  >
                    {project.title}
                  </h3>

                  <div
                    className={`description-box ${
                      darkMode ? "bg-slate-900 bg-opacity-90" : "bg-slate-100 bg-opacity-90"
                    } p-6 rounded-md shadow-lg mb-6 max-w-lg`}
                  >
                    <p
                      className={`${
                        darkMode ? "text-Grey4" : "text-slate-800"
                      } text-sm sm:text-base leading-relaxed mb-4`}
                    >
                      {project.description}
                    </p>
                    <h4 className={`font-semibold mb-2 ${index % 2 === 0 ? "lg:text-left lg:ml-12 lg:items-end lg:align-middle" : ""}  ${darkMode ? "text-Grey4" : "text-slate-800"}`}>
                      Key Features:
                    </h4>
                    <ul className={`list-disc list-inside ${darkMode ? "text-Grey4" : "text-slate-800"} text-sm`}>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={` ${index % 2 === 0 ? "lg:text-left lg:ml-12 lg:items-end lg:align-middle" : ""}`}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-2 ${darkMode ? "text-Grey4" : "text-slate-800"}`}>Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded-full text-xs ${
                            darkMode ? "bg-slate-700 text-Grey4" : "bg-slate-200 text-slate-800"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`flex space-x-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className={`project-btn rounded-sm ${darkMode ? "" : "project-btn-light"}`}
                      href={project.link}
                    >
                      View Project
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className={`project-btn rounded-sm ${darkMode ? "" : "project-btn-light"}`}
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

