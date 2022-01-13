import { blue } from "@mui/material/colors";
import React from "react";
import "./Marker.css";

const Marker = (props) => {
  const { color, name, id } = props;
  return (
    <div
      className="marker"
      style={{ backgroundColor: blue, cursor: "pointer" }}
      title={name}
    />
  );
};

export default Marker;
