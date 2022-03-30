import img from '../img/about.jpg';

export const AboutPage = () => {
    return (
        <section id="about">
            <div className="about">
                <img src={img}/>
                <div>
                    <h1>
                        MAXIME WIATR
                    </h1>
                    <h2>
                        Dévellopeur web junior
                    </h2>
                    <p>
                        Je suis <strong>Maxime Wiatr</strong> étudiant au <strong>lycée saint vincent</strong>, le dévellopement web étant ma passion je souhaite en faire mon métier.
                        Passionnée depuis plusieur années, volontaire et assidus je devellope quotidiennement des projets personel.
                    </p>
                    <button>Télécharger mon CV</button>
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