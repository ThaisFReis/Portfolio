import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Aboutme from "./Array/aboutme"
import Skills from "./Array/skills"
import Education from "./Array/education"
import Paper from "../../../Assets/paper.png"
import  "./AboutMe.css"

const data = [    
    { info: "Thais Ferreira Reis"},
    { info: "31/01/1999"},
    { info: "Rio de Janeiro, RJ"},
    { info: "Estudante"}
]

const languages = [
    { language: "PORTUGUÊS",
      level: "PRIMEIRA LÍNGUA"},
    { language: "INGLÊS",
        level: "B1"}
]

const interests = [
    { interest: "VIOLINO",
      description: "Comecei a tocar violino em 2021, e desde então tenho me dedicado a aprender mais sobre o instrumento treinando todas as semanas."},
      { interest: "ASTRONOMIA",
      description: "Desde criança sempre fui fascinada pelo universo e sempre quis saber mais sobre ele. Uma das minhas metas é viajar para o Chile para ver o céu estrelado e se possível, conhecer os telescópios do Atacama."},
    { interest: "LEITURA",
      description: "Desde criança sempre tive interesse em ler pois aprendi a ler mais tarde que a maioria das crianças. Gosto de ler livros de ficção científica, fantasia e romance."},
    { interest: "JOGOS",
      description: "Desde criança sempre gostei de jogar videogame, principalmente jogos de RPG e simulação. Atualmente jogo muito The Sims e Stardew Valley."},
    { interest: "FILMES E SÉRIES",
      description: "Desde adolescente sempre gostei de assistir filmes e séries, ainda mais quando eram legendados pois assim eu aprendia mais sobre a língua inglesa. Atualmente gosto de assistir filmes de ficção científica, fantasia e romance."}

]

{/*

*/}



const AboutMe = () => {

        return (
        <>
            <div className="AboutMe">
                    <div className="perfil">
                        <div className="perfil-text-description">
                                <h1>O<div style={{color: "#fe2908"}}>!</div></h1>
                                <p>, eu sou a Thais, uma estudante de Ciências Matemáticas e da Terra na Universidade Federal do Rio de Janeiro. Atualmente estou no 7º período do curso e estou em busca de uma oportunidade de estágio na área de programação para poder colocar em prática o que aprendi e também aprender mais sobre o mercado de trabalho.
                                Meu objetivo é me tornar uma desenvolvedora Full Stack, mas atualmente tenho melhor desempenho no Front-End.
                                <br/>Se quiser saber mais sobre mim, continue lendo!</p>
                            </div>

                        <div className="perfil-text-info">
                               
                            <div className="perfil-text-info-languages">
                            <div className="perfil-text-info-languages-title">
                                    <div className="perfil-p"> 
                                        <div className="idi">
                                            <p>IDI</p>
                                            <ion-icon name="remove-outline"></ion-icon> 
                                        </div>
                                        <div className="oma">
                                            <p>OMA</p>
                                        </div>
                                    </div>
                                </div>   
                                <div className="perfil-text-info-languages-list">

                                    {
                                        languages.map((language, index) => (
                                            <Language key={index} language={language.language} level={language.level}/>
                                        ))}
                                </div>                       
                            </div>



                            <div className="perfil-text-info-interests">
                                <div className="perfil-text-info-interests-title">
                                    <div className="inte">
                                        <p>INTE</p>
                                        <ion-icon name="remove-outline"></ion-icon> 
                                    </div>
                                    <div className="resses">
                                        <p>RESSES</p>
                                    </div>
                                </div>  
                                <div className="interests-list">
                                    {
                                        interests.map((interest, index) => (
                                            <Interest key={index} interest={interest.interest}  description={interest.description}/>
                                        ))}
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

const Language = ({language, level}) => {
    const [mouse, setMouse] = useState(false)

    return (
        <>
            {
                mouse === true ?
                <div className="language" id={language} onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)} >
                    <p>{level}</p>
                </div>
                :
                <div className="language" id={language} onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
                    <p>{language}</p>
                    <ion-icon name="information-outline"></ion-icon>
                </div>
            }
        </>
    )
}

const Interest = ({interest, description, key}) => {
    const [mouse, setMouse] = useState(false)

    return (
        <>
            {
                mouse === true ?
                <div className="interest-all"  onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
                    <p key={key}>{interest}</p>
                    <div className="interest-description">
                        <p key={key}>{description}</p>
                    </div>
                </div>


                :
                <div className="interest-item"  onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
                    <p key={key}>{interest}</p>
                    <ion-icon name="information-outline"></ion-icon>
                </div>
            }
        </>
    )
}

export default AboutMe;