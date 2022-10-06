import * as React from "react";
import { Link } from "react-router-dom";

import Menu from "../Menu/Menu"
import  "./Home.css"

import Linkedin from "../../../Assets/linkedin.png"
import Github from "../../../Assets/github.png"
import Heart from "../../../Assets/heart.png"


export default function Home() {
    return (
        <div className="background">
            <Menu />
                <div className="Inicio">

                    {/* NAME */}
                    <div className="principal">
                        <h2>EU SOU</h2>
                        <h1>THAIS FERREIRA REIS</h1>
                        <h2>DESENVOLVEDORA FRONT-END</h2>


                    {/* BUTTONS */}
                    <div className="buttons">
                        <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank">
                            <div className="button" >
                                <img src={Linkedin} alt="Linkedin" />
                                <p>LINKEDIN</p>
                            </div>
                        </a>

                        <a href="https://github.com/ThaisFReis" target="_blank">
                            <div className="button">
                                <img src={Github} alt="Github" />
                                <p>GITHUB</p>
                            </div>
                        </a>
                    </div>
                    
                    </div>

                    {/* FOOTER */}
                    <footer>
                        {/* BUTTONS SOCIAL MEDIA */}
                        <div className="social">
                            <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank">
                                    <img src={Linkedin} alt="Linkedin" />
                            </a>
                            <a href="https://github.com/ThaisFReis" target="_blank">
                                    <img src={Github} alt="Github" />
                            </a>
                        </div>

                        {/* MADE WITH */}
                        <div className="made">
                            <p>made with <img src={Heart} className="icon" /> by Thais F. Reis</p>
                        </div>

                        {/* BUTTONS */}
                            <div className="change-language">
                                <div className="language">
                                    <Link to="/home"><p>EN</p></Link>
                                    <Link to="/inicio"><p>PT</p></Link>
                                </div>
                            </div>
                    </footer>
                </div>
        </div>
      )
  }