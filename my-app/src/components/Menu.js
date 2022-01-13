import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LocalParkingOutlined } from "@mui/icons-material";
import CameraIcon from "@mui/icons-material/Camera";
import { styled } from "@mui/material/styles";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";

import useGeoLocation from "../hooks/useGeoLocation";

const myBlue = {
  500: "#1CC5DC",
  600: "#0F2C67",
  700: "#009DAE",
};

const yellow = {
  500: "#F9D371",
  600: "#C2F784",
  700: "#FFAD60",
};

const CustomButtonRootOne = styled("span")`
  font-size: 0.9rem;
  background-color: ${yellow[500]};
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px 24px;
  border-radius: 15px;
  color: #fff;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &.${buttonUnstyledClasses.active} {
    background-color: ${yellow[600]};
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

const CustomButtonRootTwo = styled("span")`
  font-size: 0.9rem;
  background-color: ${myBlue[500]};
  flex-direction: column;
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px 24px;
  border-radius: 15px;
  color: #fff;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &.${buttonUnstyledClasses.active} {
    background-color: ${myBlue[600]};
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

function CustomButtonOne(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRootOne} />;
}
function CustomButtonTwo(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRootTwo} />;
}

export default function Menu(props) {
  const navigate = useNavigate();
  
  const {currentLat, currentLon} = useGeoLocation().coordinates;
  const location = useGeoLocation();
  const userId = 1;

  const navigateToParking = () => navigate("/park-options");
  const navigateToMap = () => navigate("/map");

  const searchParking = async () => {
    const url = "http://localhost:8080/driver/location";
    console.log(location)
    await axios
      .put(url, {
        currentLat,
        currentLon,
        userId
      })
      .catch((error) => {
        console.log(error);
      });

    navigateToParking();
  };

  useEffect(() => {
    // if (!props.signedIn) navigate("/");
    // return () => {
    //   if (props.signedIn) navigate('/menu');
    // }
  }, []);

  return (
    <div className="menu full-height">
      <p className="menu-top">
        <b>
          Good morning user. <br /> What do you want to do?
        </b>
      </p>

      <div className="menu-buttons">
        <CustomButtonOne
          // onClick={navigateToParking}
          onClick={searchParking}
          elevation={3}
          variant="contained"
        >
          <LocalParkingOutlined
            sx={{
              width: "90%",
              height: "60%",
              backgroundColor: `${yellow[500]}`,
            }}
          />
          Looking for Parking
        </CustomButtonOne>
        <CustomButtonTwo onClick={navigateToMap} elevation={3} variant="contained">
          <CameraIcon
            sx={{
              width: "90%",
              height: "60%",
              backgroundColor: `${myBlue[500]}`,
            }}
          />
          Report a Parking Spot
        </CustomButtonTwo>
        {/* <Button
            className="menu-button"
            variant="outlined"
            size="large"
            sx={{ width: "47%", height: "25vh", backgroundColor: "white" }}
          >
            <LocalParking />
            Looking for a Parking
          </Button>
          <Button
            className="menu-button"
            variant="outlined"
            size="large"
            sx={{ width: "47%", height: "25vh", backgroundColor: "white" }}
          >
            Looking for a Parking
          </Button> */}
      </div>
    </div>
  );
}
