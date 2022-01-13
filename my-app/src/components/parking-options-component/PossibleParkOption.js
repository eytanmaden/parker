import { useEffect } from 'react';

function PossibleParkOption(props) {
    const { minutes, distance, url, averageParkTime } = props;
    useEffect(() => {
        console.log('mounted')
        console.log(averageParkTime)
    }, [averageParkTime])
    return (
        <div className="possible-park-option">
            <div className="content">
                <p className="time">{minutes}</p>
                <p className="coordinates">{distance}</p>
            </div>
            <div>Average time to park approx. {averageParkTime} minutes</div>
            <div className="btn">
                <a href={url} target="_blank"><button className="possible-park-go">Go</button></a>
            </div>
        </div>
    )
}

export default PossibleParkOption;