import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Aboutme from "./Array/aboutme"
import Skills from "./Array/skills"
import Education from "./Array/education"
import Me3 from "../../../Assets/Me3.png"
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
      description: "Comecei a tocar violino em 2021 por causa da pandemia e estudo praticamente todos os dias."},
    { interest: "ASTRONOMIA",
        description: "Desde criança sempre fui fascinada pelo universo e sempre quis saber mais sobre ele. Uma das minhas metas é viajar para o Chile para ver o céu estrelado e se possível, conhecer os telescópios do Atacama."},
    { interest: "LEITURA",
    description: "Desde criança sempre tive interesse em ler pois aprendi a ler mais tarde que a maioria das crianças. Gosto de ler livros de ficção científica, fantasia e romance."},
    { interest: "JOGOS",
    description: "Desde criança sempre gostei de jogar videogame, principalmente jogos de RPG e simulação. Atualmente jogo muito The Sims e Stardew Valley."},
    { interest: "FILMES E SÉRIES",
    description: "Desde adolescente sempre gostei de assistir filmes e séries, ainda mais quando eram legendados pois assim eu aprendia mais sobre a língua inglesa. Atualmente gosto de assistir filmes de ficção científica, fantasia e romance."},
]


const AboutMe = () => {

        return (
        <>
            <div className="AboutMe">
                    <div className="perfil">
                    
                        <div className="perfil-text">
                            <div className="perfil-text-description">
                                <h1>Olá, eu sou a Thais!</h1>
                                <p>Estudante de Ciência da Computação na Universidade Federal do Rio de Janeiro.
                                Atualmente estou cursando o 4º período e estou em busca de uma oportunidade de estágio na área de desenvolvimento de software.
                                Meu objetivo é me tornar uma desenvolvedora Full Stack, mas atualmente estou focando em Front-End.
                                Além de programar, gosto de ler, assistir séries e filmes, ouvir música e jogar videogame.
                                Se quiser saber mais sobre mim, continue lendo!</p>
                            </div>

                            <div className="perfil-text-info">
                                <div className="perfil-text-info-languages">
                                    <div className="perfil-text-info-languages-title">
                                        <ion-icon name="language-outline"></ion-icon>
                                        <h1>Idiomas:</h1>
                                    </div>
                                    <div className="perfil-text-info-languages-list">
                                        {
                                            languages.map((language, index) => (
                                                <Language key={index} language={language.language} level={language.level}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="perfil-text-info-interests">
                                    <h1>Interesses:</h1>
                                    <div className="interests-list">
                                        {
                                            interests.map((interest, index) => (
                                                <Interest key={index} interest={interest.interest}  description={interest.description}/>
                                            ))
                                        }
                                    </div>
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
    const [toogle, setToogle] = useState(false)
    return (
        <div className="language" onClick={() => setToogle(!toogle)}>
            {
                toogle ?
                <p>{level}</p>
                :
                <p>{language}</p>
            }
        </div>
    )
}

const Interest = ({interest, description}) => {
    const [toogle, setToogle] = useState(false)

    return (
        <div className="interest-item" onClick={() => setToogle(!toogle)}>
            {
                toogle ?
                <div className="interest-description">
                    <p>{description}</p>
                </div>
                :
                <p>{interest}</p>
            }
        </div>
    )
}

export default AboutMe;