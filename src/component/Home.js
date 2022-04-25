import img from '../img/first-section.png';
import img2 from '../img/second-section.png';

import {Project} from "./Project";
import {Contact} from "./Contact";
import json from "../json/data.json";

export const Home = ({navigation,projects = null}) => {
    const data = json["portfolio-react"];
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
                    <a href={data["personal-data"]["cv"]["data"]} download="cv-maxime-wiatr.pdf">Télécharger CV ({data["personal-data"]["cv"]["size"]} ko)</a>
                </div>
            </section>
            <section id="second-section">
                <div>
                    <img src={img2} alt='image' />
                    <div className="more">
                        {/*<p>*/}
                        {/*    Hello, I am <span className="bold">Maxime Wiatr</span>,*/}
                        {/*    a student at the Lycée <span className="underline bold">Saint-Vincent</span>,*/}
                        {/*    studying for a <span className="bold">bts sio</span> in the year <span className="bold">2021-2022</span>.*/}
                        {/*    I am passionate about development, web (front with <span className="bold">vanilla JS</span>,*/}
                        {/*    <span className="bold">typescript</span> and <span className="bold underline">react</span>*/}
                        {/*    and back with <span className="bold">php</span> and <span className="bold underline">symfony</span>)*/}
                        {/*    and software with <span className="bold">python</span> and <span className="bold">c#</span> among others...*/}
                        {/*</p>*/}
                        <p>
                            Bonjour, je suis <strong>Maxime Wiatr</strong>,
                            étudiant au Lycée <strong className="underline bold">Saint-Vincent</strong>,
                            en <strong className="bold">bts sio</strong> sur l'année <strong className="bold">2021-2022</strong>.
                            Je suis passioné par le developpement, web ( front avec <strong className="bold">vanilla JS</strong>,
                            <strong className="bold"> typescript </strong> et <strong className="bold underline"> react </strong>
                            et back avec <strong className="bold">php</strong> et <strong className="bold underline"> symfony </strong>)
                            et logiciel avec <strong className="bold">python</strong> et <strong className="bold">c#</strong> entre autres...
                        </p>
                        <button onClick={() => {navigation('AboutPage')}}>
                            {/*About*/}
                            En savoir plus
                        </button>
                    </div>
                </div>
            </section>
            <section id="third-section">
                <h2 data-text="Latest Overview" >
                    {/*Latest Projects*/}
                    Dernier Projet
                </h2>
                <div className="project-container">
                    {
                        projects[[...projects].length - 1] ?
                            <Project {...projects[[...projects].length - 1]} navigation={(str, proj) => {
                                navigation(str, proj)
                            }} />
                            : null
                    }
                    {
                        projects[[...projects].length - 2] ?
                            <Project {...projects[[...projects].length - 2]} navigation={(str, proj) => {
                                navigation(str, proj)
                            }} />
                            : null
                    }
                    <button onClick={() => {navigation('ProjectsPage')} } className="more">
                        •••
                    </button>
                </div>
            </section>
            <section id="fourth-section">
                <Contact />
            </section>
        </>
    )
}