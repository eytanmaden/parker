import React from 'react'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import x from "../img/logo.png";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
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
  margin: 45px;

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





export default function Loggs() {
    return (
      <div className="log-in">
        <div className="top">
          <img src={x} alt="logo" className="img" />
          <Typography fontFamily="Poppins" variant="h4" component="h4" > Parker
          </Typography>
        </div>

        <div className="bottom">
          <TextField
            sx={{
              input: {
                color: "white",
                borderColor: "white",
                display: "flex",
                alignItems: "center",
                fontFamily: "Poppins",
              },
            }}
            color="secondary"
            id="standard-required"
            label="Email"
            variant="standard"
            focused
            placeholder="please enter your email "
            margin="normal"
            fontFamily="Poppins"
          />
          <TextField
            sx={{ input: { color: "white", fontFamily: "Poppins" } }}
            id="standard-password-input"
            label="Password"
            type="password"
            color="secondary"
            autoComplete="current-password"
            variant="standard"
            focused
            placeholder="please enter  your password "
            margin="normal"
          />
          <CustomButton className="login-button">Login</CustomButton>
          <div className="helper">
            <p className="no-account"> Don't have an account? </p>
            <p>
              <b>Create an Account</b>
            </p>
          </div>
        </div>
      </div>
    );
}
