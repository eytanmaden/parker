import './possibleParking.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PossibleParkOption from './PossibleParkOption';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PossibleParkingPage(props) {
    const navigate = useNavigate();
    const [parkingOptions, setParkingOptions] = useState([
        {
            minutes: 30,
            lat: '123.123123',
            lon: '123.123123'
        },
        {
            minutes: 50,
            lat: '123.123123',
            lon: '123.123123'
        },
        {
            minutes: 100,
            lat: '123.123123',
            lon: '123.123123'
        }
    ])

    const backToMenu = () => navigate('/menu');

    useEffect(() => {
        if (!props.signedIn) navigate('/');
        // return () => {
        //     if (props.signedIn) navigate('/park-options');
        // }
    }, [])

    return (
        <div className="possible-park">
            <header>
                <IconButton onClick={backToMenu}>
                    <ArrowBackIcon/>
                </IconButton>
            </header>
            <div className="possible-park-heading">
                <h2>Possible Parking Near You</h2>
            </div>
            <div className="possible-park-options-container">
                <div>
                    {parkingOptions.map((option, i) => {
                        return <PossibleParkOption key={i} minutes={option.minutes} lat={option.lat} lon={option.lon} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default PossibleParkingPage;