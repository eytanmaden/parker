function PossibleParkOption(props) {
    const { minutes, lat, lon } = props;
    return (
        <div className="possible-park-option">
            <div className="content">
                <p className="time">{minutes} min away</p>
                <p className="coordinates">Lat: {lat}, Lon: {lon}</p>
            </div>
            <div className="btn">
                <button className="possible-park-go">Go</button>
            </div>
        </div>
    )
}

export default PossibleParkOption;