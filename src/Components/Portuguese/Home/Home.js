import { useRef, useState } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";


import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import  "../../../Assets/Styles/Home.css";

/* ICONS FOOTER */
import ArrowUp from "../../../Assets/Img/Menu/arrow-up.png";
import ArrowDown from "../../../Assets/Img/Menu/arrow-down.png";
import HomeIcon from "../../../Assets/Img/Menu/Home.png";
import AboutMeIcon from "../../../Assets/Img/Menu/Profile.png";
import ProjectsIcon from "../../../Assets/Img/Menu/Work.png";
import ContactIcon from "../../../Assets/Img/Menu/Message.png";
import SettingsIcon from "../../../Assets/Img/Menu/Setting.png";

/* NOTEBOOK IMG */
import Notebook from "../../../Assets/Img/Notebook/estrutura.png";
import Line1 from "../../../Assets/Img/Notebook/1.png";
import Line2 from "../../../Assets/Img/Notebook/2.png";
import Line3 from "../../../Assets/Img/Notebook/3.png";
import Window from "../../../Assets/Img/Notebook/window.png";



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
        const  [toggleMenuMobile, setToggleMenuMobile] = useState(false)
        const [toogleLanguage, setToogleLanguage] = useState(false)

        const handleToggle = () => {
            setToggleMenuMobile(!toggleMenuMobile)
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
                        <div className="link" onClick={executeScroll5}><p>{"<TFR/>"}</p></div>
                    </div>
                    <Menu />
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
                            <Link to="/home"><p style={{cursor: "pointer" }}>EN</p></Link>
                            <p style={{ color: "#fe2a04" }}>PT</p>
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
                {/*<div className="footerMobile">
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
                        }

                        {/* MENU MOBILE LINEAR}
                        <ul>
                            {
                                toggleMenu === true ?
                                    <>
                                            {
                                                toogleLanguage === true ?
                                                    <>
                                                        <li><Link to="/home"><p style={{cursor: "pointer" }}>EN</p></Link></li>
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
                </div>*/}

            {
                toggleMenuMobile === true ?
                    <div className="lateralMenu active" onClick={handleToggle}>
                        <img src={ArrowUp} alt="ArrowUp" />
                        <ul>
                            <li onClick={executeScroll}><img src={HomeIcon} alt="home icon" /></li>
                            <li onClick={executeScroll2}><img src={AboutMeIcon} alt="about icon" /></li>
                            <li onClick={executeScroll3}><img src={ProjectsIcon} alt="project icon" /></li>
                            <li onClick={executeScroll4}><img src={ContactIcon} alt="contact icon" /></li>
                            <li onClick={ChangeLanguage} ><img src={SettingsIcon} alt="settings icon" /></li>
                        </ul>
                    </div>
                :
                <div className="lateralMenu" onClick={handleToggle}>
                    <img src={ArrowDown} alt="ArrowDown" />
                </div>
            }


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
{//"OLÁ! EU SOU A THAIS, SEJA BEM-VINDO AO MEU PORTFÓLIO"
}
                    <div className="welcomeMobile">
                            <div className="welcome">

                                {/*
                                <Typewriter0
                                    onInit={(typewriter) =>
                                        typewriter
                                        .typeString("OLÁ!")
                                        .start()
                                    }
                                />

                                <Typewriter
                                    onInit={(typewriter) =>
                                        typewriter
                                        .pauseFor(1000)
                                        .typeString("EU SOU A THAIS.")
                                        .start()
                                    }
                                />

                                <Typewriter
                                    onInit={(typewriter) =>
                                        typewriter
                                        .pauseFor(3500)
                                        .typeString("SEJA BEM-VINDO AO MEU PORTFÓLIO!")
                                        .start()
                                    }
                                />
                                */}
                            </div>

                            <div className="footer-buttons" onClick={executeScroll}>
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

                            <div className="home-mobile">
                                <div className="notebook">
                                    <div className="notebook-structure">
                                        <img src={Notebook} alt="notebook" />
                                    </div>

                                    <div className="notebook-screen">
                                        <div className="notebook-screen-code">
                                            <img src={Line1} alt="line1" />
                                            <img src={Line2} alt="line2" />
                                            <img src={Line3} alt="line3" />
                                            <img src={Line2} alt="line2" />
                                        </div>
                                        <div className="notebook-screen-window">
                                            <img src={Window} alt="window" />
                                            <div className="window-text">
                                                <Typewriter
                                                    options={{
                                                        strings: ["BEM-VINDO AO MEU PORTFÓLIO"],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                    <h2> EU SOU </h2> <h1>Thais F. Reis </h1> <h2> DESENVOLVEDORA FRONT-END </h2>
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
