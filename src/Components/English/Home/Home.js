import { useRef } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";


import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import  "../../../Assets/Styles/Home.css";

export default function Home() {

    const homePage = useRef(null);
    const aboutMePage = useRef(null);
    const projectsPage = useRef(null);
    const contactPage = useRef(null);
    const welcomePage = useRef(null)

    const executeScroll = () => homePage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll2 = () => aboutMePage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll3 = () => projectsPage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll4 = () => contactPage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll5 = () => welcomePage.current.scrollIntoView({ behavior: 'smooth' })

    const [hover, setHover] = React.useState('')

    function handleMouseEnter() {
        setHover('hover')
    }
    
    function handleMouseLeave() {
        setHover('')
    }   


    return (
        <div className="body">
            <>
                {/* MENU */}
                <div className="Header">
                    <div className="TFR">
                        <Link to="/home" className="link" onClick={executeScroll5}><p>{"<TFR/>"}</p></Link>
                    </div>
                    <div className="Menu">
                        <div className="onclick" onClick={executeScroll}> <p>HOME</p></div>
                        <div className="onclick" onClick={executeScroll2}><p>ABOUT ME</p></div>
                        <div className="onclick" onClick={executeScroll3}><p>PROJECTS</p></div>
                        <div className="onclick" onClick={executeScroll4}><p>CONTACT</p></div>
                    </div>
                </div>

                {/* FOOTER */}
                <footer>
                    {/* BUTTONS SOCIAL MEDIA */}
                    <div className="social">
                        <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://github.com/ThaisFReis" target="_blank" rel="noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>

                    {/* MADE WITH */}
                    <div className={`made ${hover}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        { hover === 'hover' ?
                            <p>made with <ion-icon name="heart"></ion-icon> by Thais F. Reis</p>
                            :
                            <p>made with <ion-icon name="heart-outline"></ion-icon> by Thais F. Reis</p>
                        }
                    </div>

                    {/* BUTTONS */}
                    <div className="change-language">
                        <div className="language">
                            <p style={{ color: "#fe2a04" }}>EN</p>
                            <Link to="/"><p style={{cursor: "pointer" }}>PT</p></Link>
                        </div>
                    </div>
                </footer>
            </>
            <div className="page">
                
                {/* WELCOME PAGE */}
                <div className="welcome-page">
                    <div className="welcome">
                        <Typewriter
                        options={{
                            strings: ["WELCOME TO MY PORTFOLIO", "BEM-VINDO AO MEU PORTFÓLIO"],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                </div>

                {/* BACKGROUND: HOME PAGE AND ABOUT ME PAGE */}
                <div className="background-page-home-aboutme" ref={homePage}>
                    {/* HOME PAGE */}
                        <div className="Inicio">

                            {/* NAME */}
                            <div className="principal">
                                <h2>I AM <h1>Thais Ferreira Reis</h1> A FRONT-END DEVELOPER</h2>

                                {/* BUTTONS */}
                                <div className="buttons">
                                    <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank" rel="noreferrer">
                                        <button>
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                            <p>LINKEDIN</p>
                                        </button>
                                    </a>

                                    <a href="https://github.com/ThaisFReis" target="_blank" rel="noreferrer">
                                        <button>
                                            <ion-icon name="logo-github"></ion-icon>
                                            <p>GITHUB</p>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ABOUT ME PAGE */}
                    <div className="aboutme" ref={aboutMePage}>
                        <AboutMe />
                    </div>
                </div>

                {/* BACKGROUND: PROJECTS PAGE  */}
                <div className="background-page-projects" ref={projectsPage}>
                    <Projects />
                </div>

                {/* BACKGROUND: CONTACT PAGE */}
                <div className="background-page-contact" ref={contactPage}>
                    <Contact />
                </div>
            </div>
        </div>
      )
  }