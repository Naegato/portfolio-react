import {Project} from "./Project";
import {useDispatch, useSelector} from "react-redux";
import {fetchProject, getProject} from "../redux/projectSlice";
import {useEffect} from "react";
import arraySortObject from "../utilities/arraySortObject";

export const ProjectsPage = ({navigation}) => {

    const dispatch = useDispatch();
    const projectViewer = useSelector(getProject);

    useEffect(() => {
        dispatch(fetchProject);
    }, []);

    const projects = arraySortObject(projectViewer.data, 'dateEnd');

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