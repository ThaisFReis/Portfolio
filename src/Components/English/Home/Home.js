import Menu from "../Menu/Menu"
import  "./Home.css"

export default function Home() {
    return (
        <>
        <Menu />
            <div className="Home">
                <div>
                    <h1>I AM</h1>
                    <h2>THAIS FERREIRA REIS</h2>
                    <h1>A FRONT-END DEVELOPER</h1>
                </div>
                <div className="Footer">
                    <h3>PORTFOLIO </h3>
                    <div className="dot"></div>
                    <h3> 2022</h3>
                </div>

            </div>
        </>
      )
  }