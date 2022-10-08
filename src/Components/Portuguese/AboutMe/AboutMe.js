import Aboutme from "./Array/aboutme"
import Skills from "./Array/skills"
import Education from "./Array/education"
import  "./AboutMe.css"
import Me from "../../../Assets/Me0.png"

export default function AboutMe() {

    return (
        <>
            <div className="AboutMe">
                        {Aboutme.map((item, index) => {
                            return (
                                <div className="aboutme" key={index}>
                                        <div className="background"> </div>
                                        <div className="aboutme-text">
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                            <p>{item.birth} <ion-icon name="ellipse"></ion-icon> {item.birthText} </p>
                                        </div>
                                </div>
                            )
                        })}
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
                                                    <p>{item.universityText}</p>
                                                    <p>{item.universityLocal}</p>
                                                </div>
                                                <div className="bootcamp-description">
                                                    <p>{item.bootcampText}</p>
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
                            <h1>Software Skills</h1>
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