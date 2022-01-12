import React from 'react'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { LocalParkingOutlined } from "@mui/icons-material";
import CameraIcon from "@mui/icons-material/Camera";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
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
  color: #FFF;
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






export default function Menu() {
    return (
      <div className="menu">
        <p className="menu-top">
          <b>Good morning user. <br/> What do you want to do?</b>
        </p>

        <div className="menu-buttons">
          <CustomButtonOne elevation={3} variant="contained">
            <LocalParkingOutlined sx={{width: "90%", height: "60%", backgroundColor: `${yellow[500]}`}} />
            Looking for Parking
          </CustomButtonOne>
          <CustomButtonTwo elevation={3} variant="contained">
              <CameraIcon sx={{width: "90%", height: "60%", backgroundColor: `${myBlue[500]}`}}/>
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
