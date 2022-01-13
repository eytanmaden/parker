import "./possibleParking.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PossibleParkOption from "./PossibleParkOption";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { getAvailableParking } from "../../lib/getParkingSpotApis";
import { parkingAverageTime } from '../../lib/parkingAverageTime';

function PossibleParkingPage(props) {
    const navigate = useNavigate();
    const [parkingOptions, setParkingOptions] = useState([]);
    const [enableStateChange, setEnableStateChange] = useState(true);
    const [noParkingMessage, setNoParkingMessage] = useState("");

    const backToMenu = () => navigate("/menu");

    const averageTimes = async (array) => new Promise((resolve, reject) => {
    const results = []
    let counter = 0;
        array.forEach((item) => {
            parkingAverageTime(item.lat, item.lon).then(res => {
                item.averageParkTime = res;
                results.push(item);
                counter++
                if (counter === array.length) resolve(results);
            })
        })
    })

    useEffect(() => {
        getAvailableParking().then(res => {
            if (typeof res === 'string') {
                setNoParkingMessage(res);
                return;
            }
            else if (enableStateChange) {
                averageTimes(res).then(results => setParkingOptions(results))
            }
        })
        if (!props.signedIn) navigate('/');
        // return () => {
        //     if (props.signedIn) navigate('/park-options');
        // }
        return () => setEnableStateChange(false);;
    }, [])

    useEffect(() => {
        console.log(parkingOptions)
    }, [parkingOptions])

    return (
        <div className="possible-park">
            <header>
                <IconButton onClick={backToMenu}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            </header>
            <div className="possible-park-heading">
                <h2>Possible Parking Near You</h2>
            </div>
            {noParkingMessage && <h1>{noParkingMessage}</h1>}
            <div className="possible-park-options-container">
                <div>
                    {parkingOptions.map((option, i) => {
                        return <PossibleParkOption
                            key={i}
                            minutes={option.duration}
                            distance={option.distance}
                            url={option.url}
                            averageParkTime={option.averageParkTime}
                        />
                    })}
                </div>
            </div>
        </div>
  );
}

export default PossibleParkingPage;
