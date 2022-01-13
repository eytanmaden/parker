import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import axios from "axios";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import useGeoLocation from "../hooks/useGeoLocation";



const blue = {
  500: "#2FDD92",
  600: "#CFFFDC",
  700: "#548CFF",
};

const CustomButtonRoot = styled("span")`
  size: medium;
  font-size: 1rem;
  background-color: ${blue[500]};
  height: 2.5rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 30px;
  color: #15254c;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin-bottom: 5rem;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}


const SimpleMap = (props) => {
  const { currentLat, currentLon } = useGeoLocation().coordinates;
  const navigate = useNavigate();
  const center = { lat: currentLat, lng: currentLon };
  // const [center, setCenter] = useState({ lat: 11, lng: 33 });
  const [zoom, setZoom] = useState(16);
  const [userId, setUserId] = useState(1);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const backToMenu = () => {
    navigate("/menu");
  };

  // function getCoordinates(position) {
  //   setLatitude(position.coords.latitude);
  //   setLongitude(position.coords.longitude);
  //   setCenter({lat: latitude, lng: longitude})
  // }

  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(getCoordinates);
  //   } else {
  //     alert("geolocation is not supported by this browser. ");
  //   }
  // }
    
  useEffect(() => {
    // getLocation();
      console.log(latitude)
      // setCenter({ lat: currentLat, lng: currentLon });
    
  }, [])

  function handleSubmit() {
    
    // const headerConfig = {
    //   "auth-token": `${token}`,
    // };
    const url = "localhost:8080/pedestrian/newparking";
    axios
      .post(
        url,
        {
          userId: userId,
          newParkingLat: currentLat,
          newParkingLon: currentLon,
        }
        // { headers: headerConfig }
      )
      .catch((err) => {
        alert(err);
        return;
      });
  }
  

  return (
    <div style={{ backgroundColor: "#15254C", height: "70vh", width: "100%" }}>
      <header style={{ backgroundColor: "#15254c00", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "2px" }}>
          <IconButton style={{ color:"white" }}onClick={backToMenu}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton style={{ color:"white" }}>
            <MoreHorizIcon />
          </IconButton>
        </header>
      {currentLat ? <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        center={center}
        defaultZoom={zoom}
        mapType="mutedStandard"
      >
        {currentLat ? <Marker lat={currentLat} lng={currentLon} name="My Marker" color="blue" /> : null}
      </GoogleMapReact> : null}
      <div className="map-page" style={{ display: "flex", flexDirection:"column", justifyContent:"flex-end", alignItems: "center", height: "30vh", backgroundColor: "#15254C"}}>
        <CustomButton onClick={handleSubmit}className="log-in" >Submit</CustomButton>
    </div>
    </div>
  );
};

export default SimpleMap;
