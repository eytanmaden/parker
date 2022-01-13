import './possibleParking.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PossibleParkOption from './PossibleParkOption';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getAvailableParking } from '../../lib/getParkingSpotApis';

function PossibleParkingPage(props) {
    const navigate = useNavigate();
    const [parkingOptions, setParkingOptions] = useState([])
    const [enableStateChange, setEnableStateChange] = useState(true);
    const [noParkingMessage, setNoParkingMessage] = useState('');

    const backToMenu = () => navigate('/menu');

    useEffect(() => {
        getAvailableParking().then(res => {
            if (typeof res === 'string') {
                setNoParkingMessage(res);
                return;
            }
            else if (enableStateChange) {
                setParkingOptions(res);
                console.log(res)
            }
        })
        if (!props.signedIn) navigate('/');
        // return () => {
        //     if (props.signedIn) navigate('/park-options');
        // }
        return () => setEnableStateChange(false);;
    }, [])

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
                        return <PossibleParkOption key={i} minutes={option.duration} distance={option.distance} url={option.url} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default PossibleParkingPage;