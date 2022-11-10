import React, { useState } from 'react';

import  "../../../Assets/Styles/AboutMe.css"

import ReactJS from "../../../Assets/Img/react.png"
import Javascript from "../../../Assets/Img/javascript.png"
import Css from "../../../Assets/Img/css.png"
import Html from "../../../Assets/Img/html.png"
import Ubuntu from "../../../Assets/Img/ubuntu.png"
import Git from "../../../Assets/Img/git.png"
import Figma from "../../../Assets/Img/figma.png"
import MongoDB from "../../../Assets/Img/mongodb.png"

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
      description: "Desde criança sempre fui fascinada pelo universo e sempre quis saber mais sobre ele. Uma das minhas metas é viajar para o Chile para ver o céu estrelado e se possível, conhecer os grandes telescópios do país."},
    { interest: "LEITURA",
      description: "Desde criança sempre tive interesse em ler pois aprendi a ler mais tarde que a maioria das crianças. Gosto de ler livros de ficção científica, fantasia e romance."},
    { interest: "JOGOS",
      description: "Desde criança sempre gostei de jogar videogame, principalmente jogos de RPG e simulação. Atualmente jogo muito The Sims e Stardew Valley."},
    { interest: "FILMES E SÉRIES",
      description: "Desde adolescente sempre gostei de assistir filmes e séries, ainda mais quando eram legendados pois assim eu aprendia mais sobre a língua inglesa. Atualmente gosto de assistir filmes de ficção científica, fantasia e romance."}

]

const university = [{
    date: "2019 - 2023 (PREVISTO)",
    name: "CIÊNCIAS MATEMÁTICAS E DA TERRA",
    description: "Com enfâse em Suporte a Decisão. Estudo cálculo, álgebra, estatística, programação, física, entre outras disciplinas.",
    local: "UNIVERSIDADE FEDERAL DO RIO DE JANEIRO",
    type: "BACHARELADO"}
]

const bootcamp = [{
    date: "2022 - 2023",
    name: "DESENVOLVIMENTO WEB FULL-STACK",
    description: "Estudo HTML, CSS, JavaScript, React, Ajax, Node, MongoDB, SQL, TypeScript, Aws, entre outras tecnologias.",
    local: "DRIVEN EDUCATION",
    status: "EM ANDAMENTO"}
]

const courses = [
    { name: "Excel do Básico ao Avançado, Macro e VBA + Power BI",
      description: "Curso de Excel do básico ao avançado, macro e VBA + Power BI. Aprenda a criar planilhas, gráficos, tabelas dinâmicas, macros e muito mais.",
      link: "https://www.udemy.com/share/103rq63@tG22NON0e3vZ8TjmWNLCi30eOxNocPUAIFPuByJTXrF6e396pcpq8nh8Rja4IxIU/",
      duration: "136.5 HORAS",
      local: "Udemy",
      status: "INCOMPLETO"},
    { name: "Formação Cientista de Dados: O Curso Completo",
      description: "Aprenda a ser um Cientista de Dados do zero, com o curso mais completo do mercado. Aprenda Python, R, Estatística, Machine Learning e muito mais.",
      link: "https://www.udemy.com/share/101Xys3@HTGFhnuoOMna9Q8w6avcj0OuNfurqF5TOUtsT1Y7Yo4IoZ1w7EIN8EPV_z7bGv8Q/",
      duration: "46 HORAS",
      local: "Udemy",
      status: "INCOMPLETO"},
]

const skills = [
    { name: "REACT", 
      image: ReactJS,
      description: "Hook, Props, States, Components, React Router, Context API, Ternário...",
      experience: "Menos de 1 ano"},
    { name: "JAVASCRIPT",
      image: Javascript,
      description: "Funções, Variáveis, Arrays, Objetos, DOM, Eventos, Classes, Métodos, Operadores, Condicionais, Loops, Arrow Functions, Callback, Promises, Async/Await...",
      experience: "Menos de 1 ano"},
    { name: "CSS", 
      image: Css,
      description: "Flexbox, Grid, Media Queries, Responsividade, Pseudo-classes, Pseudo-elementos, Transições, Keyframes...",
      experience: "Menos de 1 ano"},
    { name: "HTML", 
      image: Html,
      description: "Tags, Atributos, Estrutura, Semântica, Formulários, Inputs, Links, Imagens,  Audio, Video...",
      experience: "Menos de 1 ano"},
    { name: "FIGMA", 
      image: Figma,
      description: "Tenho conhecimentos básicos em Design de Interfaces e Prototipação...",
      experience: "Menos de 1 ano" },
    { name: "GIT", 
      image: Git,
      description: "Tenho os conhecimentos básicos em  Git (git add, commit...) e conhecimentos em branches, merge, pull request. ",
      experience: "Menos de 1 ano"},
    { name: "LINUX (UBUNTU)", 
      image: Ubuntu,
      description: "Tenho conhecimentos básicos em Ubuntu, como instalar programas, atualizar o sistema, criar pastas, mover arquivos, entre outros. E sei lidar com o terminal de comandos de forma básica.",
      experience: "Menos de 1 ano"},
    { name: "MONGODB",
      image: MongoDB,
      description: "Tenho conhecimentos básicos em MongoDB, como criar um banco de dados, criar uma coleção, inserir dados, atualizar dados, deletar dados, entre outros.",
      experience: "Menos de 1 ano"
    }
]


{/*

*/}



const AboutMe = () => {

        return (
        <>
            <div className="AboutMe">
                    <div className="perfil">

                    {/* ----------------------------------------     PERFIL - DESCRIPTION     ----------------------------------------*/}
                        <div className="perfil-text-description">
                                <h1>O<div style={{color: "#fe2908"}}>!</div></h1>
                                <p>, eu sou a Thais, uma estudante de Ciências Matemáticas e da Terra na Universidade Federal do Rio de Janeiro. Atualmente estou no 7º período do curso e estou em busca de uma oportunidade de estágio na área de programação para poder colocar em prática o que aprendi e também aprender mais sobre o mercado de trabalho.
                                <br/>Meu objetivo é me tornar uma desenvolvedora Full Stack, mas atualmente tenho melhor desempenho no Front-End.
                                <br/>Se quiser saber mais sobre mim, continue lendo!</p>
                        </div>

                        <div className="perfil-text-info">
                               
                            {/* ----------------------------------------     PERFIL - LANGUAGE     ----------------------------------------*/}
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


                            {/* ----------------------------------------     PERFIL - INTERESTS     ----------------------------------------*/}
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

                    {/* ----------------------------------------     EDUCATION PAGE     ----------------------------------------*/}
                        <div className="educationPage">
                            <h1>EDUCAÇÃO</h1>

                                <div className="education">

                                    {/* ----------------------------------------     EDUCATION - UNIVERSITY     ----------------------------------------*/}
                                        <div className="university">
                                            <div className="university-title">
                                                <div className="univer">
                                                    <h2>UNIVER</h2>
                                                    <ion-icon name="remove-outline"></ion-icon>
                                                </div>
                                                <div className="sidade">
                                                    <h2>SIDADE</h2>
                                                </div>
                                            </div>
                                            <div className="university-text">
                                                {
                                                    university.map((item, index) => {
                                                        return (
                                                            <University key={index} date={item.date} name={item.name} description={item.description} local={item.local} type={item.type}/>
                                                            )
                                                        })}
                                            </div>
                                        </div>

                                    {/* ----------------------------------------     EDUCATION - BOOTCAMP     ----------------------------------------*/}
                                        <div className="bootcamp">
                                            <div className="bootcamp-title">
                                                <div className="boot">
                                                    <h2>BOOT</h2>
                                                    <ion-icon name="remove-outline"></ion-icon>
                                                </div>
                                                <div className="camp">
                                                    <h2>CAMP</h2>
                                                </div>
                                            </div>
                                            <div className="bootcamp-text">
                                                {
                                                    bootcamp.map((item, index) => {
                                                        return (
                                                                <Bootcamp key={index} date={item.date} name={item.name} description={item.description} link={item.link} duration={item.duration} local={item.local} status={item.status}/>
                                                            )
                                                        })}
                                            </div>
                                        </div>

                                    {/* ----------------------------------------     EDUCATION -  COURSES     ----------------------------------------*/}
                                        <div className="courses">
                                            <div className="courses-title">
                                                <div className="cur">
                                                    <h2>CUR</h2>
                                                    <ion-icon name="remove-outline"></ion-icon>
                                                </div>
                                                <div className="sos">
                                                    <h2>SOS</h2>
                                                </div>
                                            </div>
                                            <div className="courses-text">
                                                {
                                                    courses.map((course, index) => (
                                                        <Courses key={index} course={course.name} description={course.description} link={course.link} duration={course.duration} local={course.local} status={course.status} />
                                                    ))
                                                }

                                            </div>
                                        </div>
                                </div>
                        </div>

                    {/* ----------------------------------------     SKILLS     ----------------------------------------*/}
                        <div className="skills">
                            <h1>SOFTWARE SKILLS</h1>
                            <div className="skills-box">
                                {skills.map((item, index) => {
                                    return (
                                        <Skills key={index} name={item.name} level={item.level} image={item.image} experience={item.experience} description={item.description}/>
                                    )
                                })}
                            </div>
                        </div>
            </div>
        </>
      )
}

/* ----------------------------------------     LANGUAGE     ----------------------------------------*/

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

/* ----------------------------------------     INTEREST     ----------------------------------------*/
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

/* ----------------------------------------     UNIVERSITY     ----------------------------------------*/
const University = ({date, name, description, local, type}) => {
    const [mouse, setMouse] = useState(false)
    return(
        <>
            <div className="tag">
                <p>{type}</p>
            </div>
            <div className="university-div-name" onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
                <div className="university-name">
                    <h3>{name}</h3>
                    <ion-icon name="information-outline"></ion-icon>
                </div>

                {
                    mouse === true ?
                    <>
                        <div className="university-description">
                            <p>{description}</p>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
            </div>
            <div className="university-data">
                <h4>{date}</h4>
            </div>
            <div className="university-local">
                <h5>{local}</h5>
            </div>
        </>
    )
}

/* ----------------------------------------     BOOTCAMP     ----------------------------------------*/
const Bootcamp = ({date, name, description, local, status}) => {
    const [mouse, setMouse] = useState(false)
    return(
        <>
            <div className="tag">
                <p>{status}</p>
            </div>
            <div className="bootcamp-div-name" onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
                <div className="bootcamp-name">
                    <h3>{name}</h3>
                    <ion-icon name="information-outline"></ion-icon>
                </div>

                {
                    mouse === true ?
                    <>
                        <div className="bootcamp-description">
                            <p>{description}</p>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
            </div>
            <div className="bootcamp-data">
                <h4>{date}</h4>
            </div>
            <div className="bootcamp-local">
                <h5>{local}</h5>
            </div>
        </>
    )
}

/* ----------------------------------------     COURSES     ----------------------------------------*/

const Courses = ({key, course, description, link, duration, local, status }) => {
    const [mouse, setMouse] = useState(false)
    return(
        <>
            <div className="tag">
                <p>{status}</p>
            </div>
            <div className="courses-div-name" key={key} onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
                <div className="courses-name">
                    <h3>{course}</h3>
                    <ion-icon name="information-outline"></ion-icon>
                </div>
            {
                mouse === true ?
                    <>
                        <div className="courses-description">
                            <p>{description}</p>
                            <div className="courses-link">
                                <a href={link} target="_blank" rel="noreferrer">
                                    <p>LINK</p>
                                    <ion-icon name="link-outline"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </>
                :
                    <>
                        <div className="courses-duration">
                            <h4>{duration}</h4>
                        </div>
                        <div className="courses-local">
                            <h5>{local}</h5>
                        </div>
                    </>
            }
            </div>
    </>
    )
}

/* ----------------------------------------     SKILLS     ----------------------------------------*/

const Skills = ({name, description, image, experience, key}) => {
    const [mouse, setMouse] = useState(false)
    return(
        <>
            <div className="skills-content" key={key} onMouseMove={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
                {
                    mouse === true ?
                    <div className="skills-experience-description">
                        <div className="skills-experience">
                            <p>{experience}</p>
                        </div>
                        <div className="skills-description">
                            <p>{description}</p>
                        </div>
                    </div>
                    :
                    <>
                        <p>{name}</p>
                        <img className="skillsImg" src={image} alt={name} />
                    </>
                }

            </div>
        </>
    )
}


export default AboutMe;