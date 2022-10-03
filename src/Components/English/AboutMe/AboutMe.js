import Menu from "../Menu/Menu"
import  "./AboutMe.css"
import Scroll from "../../../Assets/scrolldown.png"

export default function AboutMe() {
    return (
        <>
        <Menu />
            <div className="AboutMe">
                <div className="AboutMe_text">
                    <h1>ABOUT ME</h1>
                    <div className="birth">
                        <p>1999</p>
                        <div></div>
                        <p>BORN IN RIO DE JANEIRO</p>
                    </div>
                    <div className="description">
                        <p>I'm a 23 years old full-time student who is passionate about programming and science. I currently have no professional experience in programming but i do one project a week to learn and become a full-stack web developer.</p>
                    </div>
                </div>

                <div className="Education">
                    <h1>EDUCATION</h1>
                    <div className="education_text">
                        <div className="type">
                            <p>UNIVERSITY</p>
                        </div>
                        <div className="date">
                            <p>2019</p>
                            <div></div>
                            <p>2023</p>
                        </div>
                        <div className="type_local">
                            <p>BACHELOR OF NATURAL SCIENCES AND MATHEMATICS</p>
                            <p>FEDERAL UNIVERSTY OF RIO DE JANEIRO</p>
                        </div>
                    </div>

                    <div className="education_text">
                        <div className="type">
                            <p>BOOTCAMP</p>
                        </div>
                        <div className="date">
                            <p>2022</p>
                            <div></div>
                            <p>2023</p>
                        </div>
                        <div className="type_local">
                            <p>FULL-STACK WEB DEVELOPMENT</p>
                            <p>DRIVEN EDUCATION</p>
                        </div>
                    </div>
                </div>

                <div className="SoftwareSkills">
                    <h1>SOFTWARE SKILLS</h1>
                    <div className="skills">
                        <div className="skill">
                            <img src={Scroll} alt="HTML5"/>
                            <p>HTML5</p>
                        </div>
                        <div className="skill">
                            <img src={Scroll} alt="REACT"/>
                            <p>REACT</p>
                        </div>
                        <div className="skill">
                            <img src={Scroll} alt="CSS3"/>
                            <p>CSS3</p>
                        </div>
                        <div className="skill">
                            <img src={Scroll} alt="UBUNTU"/>
                            <p>UBUNTU</p>
                        </div>
                        <div className="skill">
                            <img src={Scroll} alt="JAVASCRIPT"/>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="skill">
                            <img src={Scroll} alt="GIT"/>
                            <p>GIT</p>
                        </div>
                        <div className="skill">
                            <img src={Scroll} alt="FIGMA"/>
                            <p>FIGMA</p>
                        </div>
                    </div>
                </div>


                
                {/*
                    <div className="footer">
                    <h3>scroll down</h3>
                    <div className="scroll">
                        <img src={Scroll} alt="Scroll" />
                        <img src={Scroll} alt="Scroll" />
                    </div>
                </div>
    */}
            </div>
        </>
      )
}