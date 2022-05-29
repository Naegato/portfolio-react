import img from '../img/about.jpg';
// import json from "../json/data.json";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurriculum, getCurriculum} from "../redux/curriculumSlice";
import {useEffect} from "react";

export const AboutPage = () => {
    // const data = json["portfolio-react"];
    const dispatch = useDispatch();
    const curriculumViewer = useSelector(getCurriculum);

    useEffect(() => {
        dispatch(fetchCurriculum);
    },[]);

    let cv = null;

    if (curriculumViewer.data.length === 1) {
        cv = curriculumViewer.data[0];
    }

    return (
        <section id="about">
            <div className="about">
                <img src={img} alt="image"/>
                <div>
                    <h1>
                        MAXIME WIATR
                    </h1>
                    <h2>
                        Développeur web junior
                    </h2>
                    <p>
                        Je suis <strong>Maxime Wiatr</strong> étudiant au <strong>lycée saint vincent</strong>,
                        le développement web étant ma passion je souhaite en faire mon métier.
                        Passionné depuis plusieurs années, volontaire et assidus je développe quotidiennement des projets personels.
                    </p>
                    {
                        cv !== null ?
                            <a href={cv.file.path} download={cv.file.name.concat('.',cv.file.extension)}>Télécharger CV ({Math.round(cv.file.size / 1000)} ko)</a>
                            : null

                    }
                    {/*<a href={data["personal-data"]["cv"]["data"]} download="cv-maxime-wiatr.pdf">Télécharger mon CV ({data["personal-data"]["cv"]["size"]} ko)</a>*/}
                </div>
            </div>
            <div className="skills">
                <h1>
                    Skills:
                </h1>
                <ul>
                    <li>
                        <label htmlFor="progressHtml">HTML</label>
                        <progress id="progressHtml" max="100" value="90"> 90%</progress>
                    </li>
                    <li>
                        <label htmlFor="progressJs">JS</label>
                        <progress id="progressJs" max="100" value="80"> 80%</progress>
                    </li>
                    <li>
                        <label htmlFor="progressPhp">Php</label>
                        <progress id="progressPhp" max="100" value="60"> 60%</progress>
                    </li>
                    <li>
                        <label htmlFor="progressReact">React</label>
                        <progress id="progressReact" max="100" value="70"> 70%</progress>
                    </li>
                    <li>
                        <label htmlFor="progressSymfony">Symfony</label>
                        <progress id="progressSymfony" max="100" value="50"> 50%</progress>
                    </li>
                </ul>
            </div>
            <div className="timeline">
                <h1>Timeline:</h1>
                <div>
                    <div className="event">
                        <div className="date">2021 - 2022</div>
                        <div className="info">
                            <h2>Typescript / react</h2>
                            <p>Apprentissage en entreprise</p>
                        </div>
                    </div>
                    <div className="event">
                        <div className="date">2021 - 2022</div>
                        <div className="info">
                            <h2>Symfony</h2>
                            <p>Apprentissage scolaire</p>
                        </div>
                    </div>
                    <div className="event">
                        <div className="date">2021 - 2022</div>
                        <div className="info">
                            <h2>Javascript</h2>
                            <p>Aprofondisement autodidact</p>
                        </div>
                    </div>
                    <div className="event">
                        <div className="date">2021 - 2022</div>
                        <div className="info">
                            <h2>HTML / CSS</h2>
                            <p>Approfondisement autodidact</p>
                        </div>
                    </div>
                    <div className="event">
                        <div className="date">2020 - 2021</div>
                        <div className="info">
                            <h2>HTML / Javascript / PHP</h2>
                            <p>Apprentissage scolaire / autodidact</p>
                        </div>
                    </div>
                    <div className="event">
                        <div className="date">2020 - 2021</div>
                        <div className="info">
                            <h2>Python</h2>
                            <p>Apprentissage autodidact</p>
                        </div>
                    </div>
                    <div className="event">
                        <div className="date">2018 - 2020</div>
                        <div className="info">
                            <h2>Arduino</h2>
                            <p>Apprentissage scolaire</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}