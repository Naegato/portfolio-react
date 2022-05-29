export const Project = (props) => {
    const {id, image, name, description, time = null,dateStart, dateEnd , navigation} = props
    return (
        <div className="project">
            <button onClick={() => {
                window.scrollTo(0, 0);
                navigation('ProjectMore',id);
            }} >
                <img src={image} alt="image" />
            </button>
            <h3 className="title">
                {name} {id}
            </h3>
        </div>
    )
}