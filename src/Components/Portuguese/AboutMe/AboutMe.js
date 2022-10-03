import Menu from "../Menu/Menu"
import  "./AboutMe.css"
import Scroll from "../../../Assets/scrolldown.png"

export default function AboutMe() {
    return (
        <>
        <Menu />
            <div className="AboutMe">
                <div className="AboutMe_text">
                    <h1>SOBRE MIM</h1>
                    <div className="birth">
                        <p>1999</p>
                        <div></div>
                        <p>NASCIDA NO RIO DE JANEIRO</p>
                    </div>
                    <div className="description">
                        <p>Eu sou uma estudante de 23 anos em tempo integral apaixonada por programação e ciência. Atualmente não tenho experiência profissional em programação, mas faço em média um projeto por semana para desenvolver minhas habilidades.</p>
                    </div>
                </div>

                <div className="Education">
                    <h1>EDUCAÇÃO</h1>
                    <div className="education_text">
                        <div className="type">
                            <p>UNIVERSIDADE</p>
                        </div>
                        <div className="date">
                            <p>2019</p>
                            <div></div>
                            <p>2023</p>
                        </div>
                        <div className="type_local">
                            <p>BACHARELADO EM CIÊNCIAS MATEMÁTICAS E DA TERRA</p>
                            <p>UNIVERSIDADE FEDERAL DO RIO DE JANEIRO</p>
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
                            <p>DESENVOLVIMENTO WEB FULL-STACK</p>
                            <p>DRIVEN EDUCATION</p>
                        </div>
                    </div>
                </div>

                <div className="SoftwareSkills">
                    <h1>SoftwareSkills</h1>
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