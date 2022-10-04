import * as React from "react";

import Menu from "../Menu/Menu"
import  "./Home.css"

import Linkedin from "../../../Assets/linkedin.png"
import Github from "../../../Assets/github.png"
import Blob from "../../../Assets/blob.svg"
import BlobPink from "../../../Assets/blob-pink.svg"
import BlobPink2 from "../../../Assets/blob-pink-2.svg"
import BlobPink3 from "../../../Assets/blob-pink-3.svg"


export default function Home() {
    return (
        <>
        <Menu />
            <div className="Inicio">
                
                <div className="principal">
                    <h1>EU SOU</h1>
                    <h2>THAIS FERREIRA REIS</h2>
                    <h1>DESENVOLVEDORA FRONT-END</h1>
                </div>

                <div className="background">
                    <img className="blob" src={BlobPink3}/>
                </div>

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
        </>
      )
  }