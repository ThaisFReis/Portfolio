import * as React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import "./ChooseLanguage.css";

export default function ChooseLanguage(){
        return(
        <>
            <div className="ChooseLanguage">
                <div className="welcome">
                    <Typewriter
                    options={{
                        strings: ["WELCOME TO MY PORTFOLIO", "BEM-VINDES AO MEU PORTFÓLIO"],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
                <div className="text-choose-language">
                    <p>Choose your language:</p>
                </div>
                <div className="buttons">
                    <div className="button">
                        <Link to="/inicio"><p>Portuguese</p></Link>
                    </div>
                    <div className="button">
                        <Link to="/home"><p>English</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}