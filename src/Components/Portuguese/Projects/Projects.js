import React, { useState } from "react"

import arrayProjects from "./arrayProjects"
import  "../../../Assets/Styles/Projects.css"

const Projects = () => {
    function slideLeft() {
        const projects = document.querySelector('.projects')
        projects.scrollLeft -= 500
    }

    function slideRight() {
        const projects = document.querySelector('.projects')
        projects.scrollLeft += 500
    }

    return (
        <>
            <div className="Projects">
                <h1>PROJETOS</h1>
                <div className="projects-group">
                    <ion-icon name="arrow-back-circle-outline" id="slideLeft" onClick={slideLeft}></ion-icon>
                    <div className="projects">
                        {arrayProjects.map((project, index) => (
                        <ProjectBox key={index} title={project.title} link={project.link} description={project.description} image={project.image}/>
                    ))}
                </div>
                <ion-icon name="arrow-forward-circle-outline" id="slideRight" onClick={slideRight} ></ion-icon>
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
        <>
            <div className={`project-box ${hover}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            
                { hover === 'hover' ? 
                    <div className="box">
                        <div className="box-title">
                            <h2>{title}</h2>
                            <ion-icon name="logo-github"></ion-icon>
                        </div>
                        <p>{description}</p>
                        <a href={link} target="_blank" rel="noreferrer">
                            <div className="box-img" style={{backgroundImage: `url(${image})`}}> </div>
                        </a>
                    </div>
                : 
                <div className="box-close">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                }
            </div>
        </>
    )
}

export default Projects;