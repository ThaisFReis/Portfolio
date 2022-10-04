import * as React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
  
export default function Menu() {
    return (
        <div className="Header">
            <Link to="/" className="TFR"><p>{"<TFR/>"}</p></Link>                <div className="Menu">
                    <Link to="/home" id="home" className="link"><p>HOME</p></Link>
                    <div></div>
                    <Link to="/aboutme" id="aboutme" className="link"><p>ABOUT ME</p></Link>
                    <div></div>
                    <Link to="/projects" id="projects" className="link"><p>PROJECTS</p></Link>
                    <div></div>
                    <Link to="/contact" id="contact" className="link"><p>CONTACT</p></Link>
                </div>
        </div>
        )
    }