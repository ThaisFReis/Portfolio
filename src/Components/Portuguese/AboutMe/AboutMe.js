import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Aboutme from "./Array/aboutme"
import Skills from "./Array/skills"
import Education from "./Array/education"
import Me from "../../../Assets/me.jpeg"
import  "./AboutMe.css"

const data = [    
    { info: "Thais Ferreira Reis"},
    { info: "31/01/1999"},
    { info: "Rio de Janeiro, RJ"},
    { info: "Estudante"}
]

const AboutMe = () => {

        return (
        <>
            <div className="AboutMe">
                    <div className="perfil">
                                {Aboutme.map((item, index) => {
                                    return (
                                        <div className="aboutme" key={index}>
                                                <div className="background"> </div>
                                                <div className="aboutme-text">
                                                    <h1>{item.title}</h1>
                                                    <p>{item.description}</p>
                                                </div>
                                        </div>
                                    )
                                })}

                        <div className="me">
                            <div className="me-contents">
                                <div className="me-info">
                                    <img src={Me} alt="Foto de Thais Ferreira Reis"/>
                                    {data.map((item, index) => {
                                        return (
                                            <CardMe info={item.info} key={index}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                </div>

                        <div className="education">
                            {Education.map((item) => {
                                return (
                                    <>
                                        <h1>{item.title}</h1>
                                        <div className="education-description">
                                            <div className="type">
                                                    <h2>{item.university}</h2>
                                                    <h2>{item.bootcamp}</h2>
                                            </div>
                                            <div className="date">
                                                    <p>{item.universityDate}</p>
                                                    <p>{item.bootcampDate}</p>
                                            </div>
                                            <div className="description">
                                                <div className="university-description">
                                                    <div className="university">
                                                        <p>{item.universityText}</p>
                                                    </div>
                                                    <p>{item.universityLocal}</p>
                                                    </div>
                                                    <div className="bootcamp-description">
                                                        <div className="bootcamp">
                                                            <p>{item.bootcampText}</p>
                                                        </div>
                                                        <p>{item.bootcampLocal}</p>
                                                    </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            )}
                        </div>
                        <div className="skills">
                            <h1>SOFTWARE SKILLS</h1>
                            <div className="skills-box">
                                {Skills.map((item, index) => {
                                    return (
                                                <div className="skills-content" key={index}>
                                                    <p>{item.name}</p>
                                                    <img className="skillsImg" src={item.image} alt={item.name} />
                                                </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
        </>
      )
}

const CardMe = ({info}) => {
    const [hover, setHover] = React.useState('')

    function handleMouseEnter() {
        setHover('hover')
    }
    
    function handleMouseLeave() {
        setHover('')
    }

    return (
        <p className={`cardMe ${hover}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            { hover === 'hover' ?
            <>
             <ion-icon name="radio-button-on"></ion-icon>
                {info}
            </>
            : 
            <>
                <ion-icon name="radio-button-off"></ion-icon>
                    {info}
            </>}
        </p>
    )
}
        


export default AboutMe;