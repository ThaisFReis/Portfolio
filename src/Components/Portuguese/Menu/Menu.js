import * as React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
    return (
        <div className="Header">
            <div className="TFR"><p>{"<TFR/>"}</p></div>
            <div className="Menu">
                <Link to="/inicio"> <p>INÍCIO</p></Link>
                <div></div>
                <Link to="/sobremim"><p>SOBRE MIM</p></Link>
                <div></div>
                <Link to="/projetos"><p>PROJETOS</p></Link>
                <div></div>
                <Link to="/contatos"><p>CONTATO</p></Link>
            </div>
        </div>
      )
  }