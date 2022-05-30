import img from '../img/first-section.png';
import img2 from '../img/second-section.png';

import {Project} from "./Project";
import {Contact} from "./Contact";
import {useDispatch, useSelector} from "react-redux";
import {fetchProject, getProject} from "../redux/projectSlice";
import {useEffect} from "react";
import arraySortObject from "../utilities/arraySortObject";
import {fetchCurriculum, getCurriculum} from "../redux/curriculumSlice";

export const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const projectViewer = useSelector(getProject);
    const curriculumViewer = useSelector(getCurriculum);

    useEffect(() => {
        dispatch(fetchProject());
        dispatch(fetchCurriculum());
    },[]);

    let projects = [];

    for (let i = 0 ; i<2 ; i++)
    {
        try {
            projects.push(arraySortObject( projectViewer.data, 'dateEnd')[i]);
        } catch (e) {}
    }

    let cv = null;

    if (curriculumViewer.data.length === 1) {
        cv = curriculumViewer.data[0];
    }

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
                    {/*<a href={data["personal-data"]["cv"]["data"]} download="cv-maxime-wiatr.pdf">Télécharger CV ({data["personal-data"]["cv"]["size"]} ko)</a>*/}
                    {
                        cv !== null ?
                            <a href={"http://localhost:8000/" + cv.file.path} download={cv.file.name.concat('.',cv.file.extension)}>Télécharger CV ({Math.round(cv.file.size / 1000)} ko)</a>
                            : null

                    }
                </div>
            </section>
            <section id="second-section">
                <div>
                    <img src={img2} alt='image' />
                    <div className="more">
                        <p>
                            Bonjour, je suis <strong>Maxime Wiatr</strong>,
                            étudiant au Lycée <strong className="underline bold">Saint-Vincent</strong>,
                            en <strong className="bold">bts sio</strong> sur l'année <strong className="bold">2021-2022</strong>.
                            Je suis passioné par le developpement, web ( front avec <strong className="bold">vanilla JS</strong>,
                            <strong className="bold"> typescript </strong> et <strong className="bold underline"> react </strong>
                            et back avec <strong className="bold">php</strong> et <strong className="bold underline"> symfony </strong>)
                            et logiciel avec <strong className="bold">python</strong> et <strong className="bold">c#</strong> entre autres...
                        </p>
                        <button onClick={() => {navigation('AboutPage');
                            window.scrollTo(0, 0)}}>
                            En savoir plus
                        </button>
                    </div>
                </div>
            </section>
            <section id="third-section">
                <h2 data-text="Latest Overview" >
                    Dernier(s) Projet(s):
                </h2>
                <div className="project-container">
                    {
                        projects.map((project, key) =>
                            <Project {...project} key={key} navigation={(str, id = null) => {
                                navigation(str, id)
                            }} />
                        )
                    }
                    <button onClick={() => {navigation('ProjectsPage');
                        window.scrollTo(0, 0)} } className="more">
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