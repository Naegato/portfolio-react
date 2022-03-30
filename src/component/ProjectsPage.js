import {Project} from "./Project";

export const ProjectsPage = ({projects, navigation}) => {

    return (
        <section id="projects">
            <h1>Mes réalisations :</h1>

            <div>
                {
                    projects.map((project, key) => (
                        <Project {...project} key={key} navigation={(str, proj) => {
                            navigation(str, proj)
                        }} />
                    ))
                }
            </div>
        </section>
    )
}