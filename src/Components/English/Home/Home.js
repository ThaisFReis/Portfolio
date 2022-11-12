import { useRef, useState } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";


import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import  "../../../Assets/Styles/Home.css";

export default function Home() {
    const [hover, setHover] = useState('')

    function handleMouseEnter() {
        setHover('hover')
    }
    
    function handleMouseLeave() {
        setHover('')
    }   

    const homePage = useRef(null);
    const aboutMePage = useRef(null);
    const projectsPage = useRef(null);
    const contactPage = useRef(null);
    const welcomePage = useRef(null);

        
    const executeScroll = () => homePage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll2 = () => aboutMePage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll3 = () => projectsPage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll4 = () => contactPage.current.scrollIntoView({ behavior: 'smooth' })
    const executeScroll5 = () => welcomePage.current.scrollIntoView({ behavior: 'smooth' })

    {/* FUNCTION AND CONST => MOBILE*/}

    {/* CONST FOR MENU MOBILE */}
        const  [toggleMenu, setToggleMenu] = useState(false)
        const [toogleLanguage, setToogleLanguage] = useState(false)

        function handleToggle() {
            const navBar = document.querySelector('.navbar')

            if (toggleMenu === false) {
                setToggleMenu(true)
                navBar.classList.add('active')
            }
            else {
                setToggleMenu(false)
                navBar.classList.remove('active')
            }
        }

        const ChangeLanguage = () => {
            setToogleLanguage(!toogleLanguage)
        }


    const Menu = () => {
    
        const executeScroll = () => homePage.current.scrollIntoView({ behavior: 'smooth' })
        const executeScroll2 = () => aboutMePage.current.scrollIntoView({ behavior: 'smooth' })
        const executeScroll3 = () => projectsPage.current.scrollIntoView({ behavior: 'smooth' })
        const executeScroll4 = () => contactPage.current.scrollIntoView({ behavior: 'smooth' })
    
        return (
            <div className="Menu">
                <div className="onclick" onClick={executeScroll}> <p>INÍCIO</p></div>
                <div className="onclick" onClick={executeScroll2}><p>SOBRE MIM</p></div>
                <div className="onclick" onClick={executeScroll3}><p>PROJETOS</p></div>
                <div className="onclick" onClick={executeScroll4}><p>CONTATO</p></div>
            </div>
        )
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

                {/* HEADER MOBILE 
                <div className="HeaderMobile">
                    <div className="TFR">
                        <div to="/" className="link" onClick={executeScroll5}><p>{"<TFR/>"}</p></div>
                    </div>
                </div>
                */}
                {/* FOOTER MOBILE */}
                <div className="footerMobile">
                    <div className="MenuMobile">
                        {/* MENU MOBILE RADIAL
                        <ul>
                            <div className="navbar" onClick={handleToggle}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {
                                toggleMenu === true ?
                                    <>
                                        <li onClick={executeScroll}><ion-icon name="home-outline"></ion-icon></li>
                                        <li onClick={executeScroll2}><ion-icon name="person-outline"></ion-icon></li>
                                        <li onClick={executeScroll3}><ion-icon name="easel-outline"></ion-icon></li>
                                        <li onClick={executeScroll4}><ion-icon name="mail-outline"></ion-icon></li>
                                    </>
                                :
                                     ""
                            }
                        </ul>
                        */}

                        {/* MENU MOBILE LINEAR*/}
                        <ul>
                            {
                                toggleMenu === true ?
                                    <>
                                            {
                                                toogleLanguage === true ?
                                                    <>
                                                        <li><Link to="/"><p style={{cursor: "pointer" }}>PT</p></Link></li>
                                                        <li onClick={ChangeLanguage} ><ion-icon name="language-outline"></ion-icon></li>
                                                    </>
                                                :
                                                <>
                                                    <li onClick={executeScroll}><ion-icon name="home-outline"></ion-icon></li>
                                                    <li onClick={executeScroll2}><ion-icon name="person-outline"></ion-icon></li>
                                                    <li onClick={executeScroll3}><ion-icon name="easel-outline"></ion-icon></li>
                                                    <li onClick={executeScroll4}><ion-icon name="mail-outline"></ion-icon></li>
                                                    <li onClick={ChangeLanguage} ><ion-icon name="language-outline"></ion-icon></li>
                                                </>
                                            }
                                    </>
                                :
                                     ""
                            }
                            <div className="navbar" onClick={handleToggle}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </ul>

                    </div>
                </div>

            </>

            <div className="page">
                
                {/* WELCOME PAGE */}
                <div className="welcome-page" ref={welcomePage}>
                    <div className="welcome">
                        <Typewriter
                        options={{
                            strings: ["WELCOME TO MY PORTFOLIO", "BEM-VINDO AO MEU PORTFÓLIO"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </div>

                    <div className="welcomeMobile">
                        <div className="welcome">
                            <Typewriter
                            options={{
                                strings: ["WELCOME TO MY PORTFOLIO", "BEM-VINDO AO MEU PORTFÓLIO"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </div>

                        <div className="welcome-buttons" onClick={executeScroll}>
                                <p>SCROLL</p>
                                <ion-icon name="caret-down-outline"></ion-icon>
                        </div>
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