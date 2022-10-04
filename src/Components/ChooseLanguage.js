import * as React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import "./ChooseLanguage.css";
import seta from "../Assets/seta.png";

export default function ChooseLanguage(){
        return(
        <>
            
            <div className="ChooseLanguage">
                        {/*
            
            <h1>WELCOME TO MY PORTFOLIO</h1>
            <h2>WELCOME TO MY PORTFOLIO</h2>
            <h4>WELCOME TO MY PORTFOLIO</h4>
            <h6>WELCOME TO MY PORTFOLIO</h6>
            <p>WELCOME TO MY PORTFOLIO</p>
        */}
                <div className="welcome">
                    <Typewriter
                    options={{
                        strings: ["WELCOME TO MY PORTFOLIO", "BEM-VINDO AO MEU PORTFOLIO"],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
                <div className="text-choose-language">
                    <p>Choose a language:</p>
                </div>
                <div className="buttons">
                    <Link to="/inicio">
                        <div className="btn">
                            <p>Portuguese</p>
                            <div className="icon">
                                <ion-icon name="arrow-forward"></ion-icon>
                            </div>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className="btn">
                            <p>English</p>
                            <div className="icon">
                                <ion-icon name="arrow-forward"></ion-icon>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
           
        </>
    )
}