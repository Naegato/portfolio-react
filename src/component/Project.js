export const Project = ({image, name, description, time = null,begin,finish = null}) => {
    return (
        <div className="project">
            <button >
                <img src={image} alt="image" />
            </button>
            <h3 className="title">
                {name}
            </h3>
        </div>
    )
}