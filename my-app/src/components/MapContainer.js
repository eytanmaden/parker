import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from './Map';

function MapContainer(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!props.signedIn) navigate('/');
    }, [])
    return <Map />
}

export default MapContainer;