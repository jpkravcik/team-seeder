const Player = (props) => {
    return (
        <div className="player">
            <p>{props.seed}. {props.name}</p>
        </div>
    )
}

export default Player