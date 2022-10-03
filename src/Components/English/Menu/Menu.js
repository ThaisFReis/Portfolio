import * as React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
  
export default function Menu() {
    return (
        <div className="Header">
            <div className="TFR"><p>{"<TFR/>"}</p></div>
                <div className="Menu">
                    <Link to="/home" className="home"><p>HOME</p></Link>
                    <div></div>
                    <Link to="/aboutme" className="aboutme"><p>ABOUT ME</p></Link>
                    <div></div>
                    <Link to="/projects" className="projects"><p>PROJECTS</p></Link>
                    <div></div>
                    <Link to="/contact" className="contact"><p>CONTACT</p></Link>
                </div>
        </div>
        )
    }