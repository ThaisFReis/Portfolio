import { Link } from "react-router-dom";
import "./Menu.css";

import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


export default function Menu() {
    return (
        <div className="Menu">
            <Link to={Home}><p>HOME</p></Link>
            <div></div>
            <Link to={AboutMe}><p>ABOUT ME</p></Link>
            <div></div>
            <Link to={Projects}><p>PROJECTS</p></Link>
            <div></div>
            <Link to={Contact}><p>CONTACT</p></Link>
        </div>
      )
  }