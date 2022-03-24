import img from '../img/first-section.png';
import img2 from '../img/second-section.png';
import {Project} from "./Project";

export const Home = () => {
    return (
        <>
            <section id="first-section">
                <img src={img}  alt="image"/>
                <div className="title">
                    <h1 data-text="Maxime">Maxime</h1>
                    <h1 data-text="Wiatr">Wiatr</h1>
                </div>
                <div className="info">
                    <h2>Bts Sio - St Vincent - Senlis</h2>
                    <a href="#">Télécharger CV</a>
                </div>
            </section>
            <section id="second-section">
                <div>
                    <img src={img2} />
                    <div className="more">
                        <p>
                            Hello, I am <span className="bold">Maxime Wiatr</span>,
                            a student at the Lycée <span className="underline bold">Saint-Vincent</span>,
                            studying for a <span className="bold">bts sio</span> in the year <span className="bold">2021-2022</span>.
                            I am passionate about development, web (front with <span className="bold">vanilla JS</span>,
                            <span className="bold">typescript</span> and <span className="bold underline">react</span>
                            and back with <span className="bold">php</span> and <span className="bold underline">symfony</span>)
                            and software with <span className="bold">python</span> and <span className="bold">c#</span> among others...
                        </p>
                        <button>
                            About
                        </button>
                    </div>
                </div>
            </section>
            <section id="third-section">
                <h2 data-text="Latest Overview" >Latest Projects</h2>
                <div className="project-container">
                    <Project />
                    <Project />
                    <button className="more">
                        •••
                    </button>
                </div>
            </section>
            <section id="fourth-section">

            </section>
        </>
    )
}