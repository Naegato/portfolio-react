import parse from 'html-react-parser';

export const ProjectMore = (props) => {
    const {navigation} = props;
    const {name, image, description, begin, time = null, finish = null } = props.projects;

    return (
        <section className='project-more'>
            {
                name === null || name === undefined || name === '' ? (
                    <div>404 error <button onClick={() => {
                        navigation('Home');
                    }}>Retour a l'accueil</button></div> ) : (
                    <>
                        <div className='title'>
                            <h1>{name}</h1>
                            <h3>Du {begin} {finish ? `au ${finish}` : 'et toujours en cours'} {time ? `pour ${time}h de travail` : null}</h3>
                        </div>
                        {
                            parse(`<p>${description}</p>`)
                        }
                        <div className="image">
                            <img src={image} />
                        </div>
                    </>
                )
            }
        </section>
    )
}