import { useRef } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";


import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import  "./Home.css"


export default function Home() {

    const homePage = useRef(null);
    const aboutMePage = useRef(null);
    const projectsPage = useRef(null);
    const contactPage = useRef(null);

    const executeScroll = () => homePage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll2 = () => aboutMePage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll3 = () => projectsPage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll4 = () => contactPage.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <div className="page">

            
            {/* WELCOME PAGE */}
           <div className="welcome-page">
                <div className="welcome">
                    <Typewriter
                    options={{
                        strings: ["WELCOME TO MY PORTFOLIO", "BEM-VINDO AO MEU PORTFOLIO"],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
                <div className="scrolldown">
                    <ion-icon name="caret-down-outline" onClick={executeScroll}></ion-icon>
                </div>
                </div>

            {/* BACKGROUND: HOME PAGE AND ABOUT ME PAGE */}
            <div className="background-page-home-aboutme" ref={homePage}>

                {/* MENU */}
                <div className="Header">
                    <div className="TFR">
                        <Link to="/" className="link"><p>{"<TFR/>"}</p></Link>
                    </div>
                    <div className="Menu">
                        <div className="onclick" onClick={executeScroll}> <p>INÍCIO</p></div>
                        <div className="div"></div>
                        <div className="onclick" onClick={executeScroll2}><p>SOBRE MIM</p></div>
                        <div className="div"></div>
                        <div className="onclick" onClick={executeScroll3}><p>PROJETOS</p></div>
                        <div className="div"></div>
                        <div className="onclick" onClick={executeScroll4}><p>CONTATO</p></div>
                    </div>
                </div>

                {/* HOME PAGE */}
                    <div className="Inicio">

                        {/* NAME */}
                      <div className="principal">
                            <h2>EU SOU <h1>Thais Ferreira Reis</h1> DESENVOLVEDORA FRONT-END</h2>

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
                            <div className="made">
                                <p>made with <ion-icon name="heart-outline"></ion-icon> by Thais F. Reis</p>
                            </div>

                            {/* BUTTONS */}
                                <div className="change-language">
                                    <div className="language">
                                        <Link to="/home"><p>EN</p></Link>
                                        <Link to="/"><p>PT</p></Link>
                                    </div>
                                </div>
                        </footer>
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
      )
  }