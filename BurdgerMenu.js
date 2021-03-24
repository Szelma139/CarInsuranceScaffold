import React from "react";

export const BurdgerMenu = () => {
  return (
    <div
      style={{
        marginLeft: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "35px",
      }}
    >
      <div
        style={{
          borderTop: "3px solid black",
          width: "35px",
        }}
      ></div>
      <div
        style={{
          borderTop: "3px solid black",
          width: "25px",
          marginLeft: "auto",
        }}
      ></div>
    </div>
  );
};
