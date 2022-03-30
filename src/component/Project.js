export const Project = (props) => {
    const {image, name, description, time = null,begin, finish = null, navigation} = props
    return (
        <div className="project">
            <button onClick={() => navigation('ProjectMore', props)} >
                <img src={image} alt="image" />
            </button>
            <h3 className="title">
                {name}
            </h3>
        </div>
    )
}