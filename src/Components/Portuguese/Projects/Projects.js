import React, { useState } from "react"

import arrayProjects from "./arrayProjects"
import  "./Projects.css"

const Projects = () => {
    return (
        <>
            <div className="Projects">
                <h1>PROJETOS</h1>
                <div className="projects-group">
                    {arrayProjects.map((project, index) => (
                        <ProjectBox key={index} title={project.title} link={project.link} description={project.description} image={project.image}/>
                    ))}     
                </div>
            </div>
        </>
      )
  }

const ProjectBox = ({title, link, description, image}) => {
    const [hover, setHover] = React.useState('')

    function handleMouseEnter() {
        setHover('hover')
    }
    
    function handleMouseLeave() {
        setHover('')
    }

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className={`project-box ${hover}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                { hover === 'hover' ? 
                <>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={image} alt={title}/> 
                </>
                : <p>{title}</p>}
            </div>
        </a>
    )
}

export default Projects;