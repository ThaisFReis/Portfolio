import Menu from "../Menu/Menu"
import arrayProjects from "./arrayProjects"
import  "./Projects.css"
import Scroll from "../../../Assets/scrolldown.png"

export default function Projects() {
    return (
        <>
        <Menu />
            <div className="Projects">
                <h1>PROJETOS</h1>
                <div className="projects-group">
                    {arrayProjects.map((project, index) => (
                        <a href={project.link} target="_blank" key={index}>
                            <div className="project-box">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                    <img src={project.image} alt="project" />
                            </div>
                        </a>
                    ))}
                </div>
                
                {/*
                    <div className="footer">
                    <h3>scroll down</h3>
                    <div className="scroll">
                        <img src={Scroll} alt="Scroll" />
                        <img src={Scroll} alt="Scroll" />
                    </div>
                </div>
    */}
            </div>
        </>
      )
  }