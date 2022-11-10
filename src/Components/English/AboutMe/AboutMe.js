import React, { useState } from 'react';

import  "../../../Assets/Styles/AboutMe.css"
import  "../../../Assets/Styles/EnglishPage/AboutMe.css"

import ReactJS from "../../../Assets/Img/react.png"
import Javascript from "../../../Assets/Img/javascript.png"
import Css from "../../../Assets/Img/css.png"
import Html from "../../../Assets/Img/html.png"
import Ubuntu from "../../../Assets/Img/ubuntu.png"
import Git from "../../../Assets/Img/git.png"
import Figma from "../../../Assets/Img/figma.png"

const data = [    
    { info: "Thais Ferreira Reis"},
    { info: "31/01/1999"},
    { info: "Rio de Janeiro, RJ"},
    { info: "STUDENT"},
]

const languages = [
    { language: "PORTUGUESE",
      level: "NATIVE"},
    { language: "ENGLISH",
        level: "B1"}
]

const interests = [
    { interest: "VIOLIN",
      description: "I started playing violin in 2021, and since then I have dedicated myself to learning and improving my technique."},
      { interest: "ASTRONOMY",
      description: "Since childhood I have been fascinated by the universe. One of my goals is to travel to Chile to see the Atacama Desert and the ESO observatory."},
    { interest: "READING",
      description: "Since I was a child I have always been interested in reading because I learned to read later than my classmates. I enjoy reading science fiction, fantasy and romance books."},
    { interest: "GAMES",
      description: "Since I was very young I have been playing video games, especially RPGs and simulation games. I currently play a lot of The Sims and Stardew Valley."},
    { interest: "MOVIES AND SERIES",
      description: "Since I was a teenager I have been watching a lot of movies and series, even more when I started studying English. I currenntly enjoy watching science fiction, fantasy and romance movies and series."},
]

const university = [{
    date: "2019 - 2023 (EXPECTED)",
    name: "MATHEMATICS AND EARTH SCIENCES",
    description: "With emphasis on Decision Support. I study programming, physics, mathematics, statistics, geology, and among other subjects.",
    local: "FEDERAL UNIVERSITY OF RIO DE JANEIRO",
    type: "BACHARELOR'S DEGREE"
    }]

const bootcamp = [{
    date: "2022 - 2023",
    name: "FULL STACK WEB DEVELOPMENT",
    description: "Study HTML, CSS, Javascript, ReactJS, NodeJS, MongoDB, SQL, Typescript, AWS, among other technologies.",
    local: "DRIVEN EDUCATION",
    status: "IN PROGRESS"
    }]

const courses = [
    { name: "EXCEL FROM BASIC TO ADVANCED, MACRO AND VBA + POWER BI",
      description: "Learn to create worksheets, formulas, charts, pivot tables, macros, VBA, Power BI, and more.",
      link: "https://www.udemy.com/share/103rq63@tG22NON0e3vZ8TjmWNLCi30eOxNocPUAIFPuByJTXrF6e396pcpq8nh8Rja4IxIU/",
      duration: "136.5 HOURS",
      local: "Udemy",
      status: "INCOMPLETE"
    },
    { name: "DATA SCIENCE TRAINING: THE COMPLETE COURSE",
      description: "Learn Python, R, Statistics, Machine Learning, and more.",
      link: "https://www.udemy.com/share/101Xys3@HTGFhnuoOMna9Q8w6avcj0OuNfurqF5TOUtsT1Y7Yo4IoZ1w7EIN8EPV_z7bGv8Q/",
      duration: "46 HOURS",
      local: "Udemy",
      status: "INCOMPLETE"
    }
]

const skills = [
    { name: "REACT", 
      image: ReactJS,
      description: "Hook, Props, States, Components, React Router, Context API, Styled Components, Ternary, and more.",
      experience: "Less than 1 year",
    },
    { name: "JAVASCRIPT",
      image: Javascript,
      description: "Functions, Arrays, Objects, Classes, Promises, Async/Await, DOM, Loops, Arrow Functions, Callback, and more.",
      experience: "Menos de 1 ano"},
    { name: "CSS", 
      image: Css,
      description: "Flexbox, Grid, Media Queries, Responsive Design, Keyframes, and more.",
      experience: "Less than 1 year"},
    { name: "HTML", 
      image: Html,
      description: "Tags, Attributes, Forms, Semantic, Inputs, Links, and more.",
      experience: "Less than 1 year"},
    { name: "FIGMA", 
      image: Figma,
      description: "I have basic knowledge of Figma, I have used it to create some prototypes for my projects.",
      experience: "Less than 1 year"},
    { name: "GIT", 
      image: Git,
      description: "I have basic knowledge of Git (git add, git commit, git push ...) and knowledges in branches, pull requests, merge, and more.",
      experience: "Less than 1 year"},
    { name: "LINUX (UBUNTU)", 
      image: Ubuntu,
      description: "I have basic knowledge of Linux (Ubuntu), such as installing programs, updating the system..., and I know how to use the terminal.",
      experience: "Less than 1 year"},
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
                                <h1>H<div style={{color: "#fe2908"}}>!</div></h1>
                                <p>, I'm Thais, a student of Mathematics and Earth Sciences at the Federal University of Rio de Janeiro. I'm currently in the 7th semester of the course and I'm looking for an internship opportunity in the programming area to put into practice what I've learned and also learn more about the job market.
                                <br/>My goal is to become a Full Stack developer, but I currently have better performance in the Front-End.
                                <br/>If you want to know more about me, keep reading!</p>
                        </div>

                        <div className="perfil-text-info-en">
                               
                            {/* ----------------------------------------     PERFIL - LANGUAGE     ----------------------------------------*/}
                            <div className="languages">
                                <div className="languages-title">
                                    <div className="perfil-p"> 
                                        <div className="lan">
                                            <p>LAN</p>
                                            <ion-icon name="remove-outline"></ion-icon> 
                                        </div>
                                        <div className="guages">
                                            <p>GUAGES</p>
                                        </div>
                                    </div>
                                </div>   
                                <div className="languages-list">

                                    {
                                        languages.map((language, index) => (
                                            <Language key={index} language={language.language} level={language.level}/>
                                        ))}
                                </div>                       
                            </div>


                            {/* ----------------------------------------     PERFIL - INTERESTS     ----------------------------------------*/}
                            <div className="perfil-text-info-interests-en">
                                <div className="interests-title">
                                    <div className="inte">
                                        <p>INTE</p>
                                        <ion-icon name="remove-outline"></ion-icon> 
                                    </div>
                                    <div className="rests">
                                        <p>RESTS</p>
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
                            <h1>EDUCATION</h1>

                                <div className="education">

                                    {/* ----------------------------------------     EDUCATION - UNIVERSITY     ----------------------------------------*/}
                                        <div className="university">
                                            <div className="university-title">
                                                <div className="univer">
                                                    <h2>UNI</h2>
                                                    <ion-icon name="remove-outline"></ion-icon>
                                                </div>
                                                <div className="sidade">
                                                    <h2>VERSITY</h2>
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
                                                    <h2>COUR</h2>
                                                    <ion-icon name="remove-outline"></ion-icon>
                                                </div>
                                                <div className="sos">
                                                    <h2>SES</h2>
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
                    </>
                }
            </div>
            <div className="courses-duration">
                <h4>{duration}</h4>
            </div>
            <div className="courses-local">
                <h5>{local}</h5>
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