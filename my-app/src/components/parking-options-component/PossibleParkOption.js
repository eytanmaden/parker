function PossibleParkOption(props) {
    const { minutes, distance, url } = props;
    return (
        <div className="possible-park-option">
            <div className="content">
                <p className="time">{minutes}</p>
                <p className="coordinates">{distance}</p>
            </div>
            <div className="btn">
                <a href={url} target="_blank"><button className="possible-park-go">Go</button></a>
            </div>
        </div>
    )
}

export default PossibleParkOption;