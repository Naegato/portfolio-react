import parse from 'html-react-parser';
import {useDispatch, useSelector} from "react-redux";
import {fetchProject, getProject} from "../redux/projectSlice";
import {useEffect} from "react";
import arraySortObject from "../utilities/arraySortObject";

export const ProjectMore = (props) => {

    console.log(props);
    const {projectId, navigation} = props;
    const dispatch = useDispatch();
    const projectViewer = useSelector(getProject);

    useEffect(() => {
        dispatch(fetchProject);
    }, [])

    let project = null;

    projectViewer.data.forEach((proj) => {
        if (proj.id === projectId) {
            project = proj;
        }
    })

    console.log(project);

    return (
        <section className='project-more'>
            {
                project === null ? (
                    <div>404 error <button onClick={() => {
                        navigation('Home');
                    }}>Retour a l'accueil</button></div> ) : (
                    <>
                        <div className='title'>
                            <h1>{project.name}</h1>
                            <h3>Du {project.dateStart.substring(0,project.dateStart.indexOf('T'))} {project.dateEnd !== null ? `au ${project.dateEnd.substring(0,project.dateEnd.indexOf('T'))}` : 'et est toujours en cours'} {project.duration ? `pour ${project.duration}h de travail` : null}</h3>
                        </div>
                        {
                            parse(`<p>${project.description}</p>`)
                        }
                        {
                            project.images.map((image,key) => (
                                <div className="image" key={key}>
                                    <img src={image} alt="project" />
                                </div>
                            ))
                        }
                    </>
                )
            }
        </section>
    )
}