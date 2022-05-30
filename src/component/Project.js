export const Project = (props) => {
    const {id, overview, name, navigation} = props
    console.log(overview);
    return (
        <div className="project">
            <button onClick={() => {
                window.scrollTo(0, 0);
                navigation('ProjectMore',id);
            }} >
                <img src={"http://localhost:8000/" + (overview !== null ? overview.path : "uploads/Picture_icon_BLACK.svg")} alt="image" />
            </button>
            <h3 className="title">
                {name}
            </h3>
        </div>
    )
}