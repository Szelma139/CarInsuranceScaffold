import React from "react";

import "./Card.css";

export const Card = ({
  children,
  width = "300px",
  paddingTop = "20px",
  paddinBottom = "20px",
  paddingLeft = "20px",
  paddingRight = "20px",
  backgroundColor = "white",
  opacity = "1",
  bigText = "5m",
  smallText = "Payments every day",
}) => {
  return (
    <div
      className="card"
      style={{
        boxShadow: " 0 0 3em rgba(0,0,0,.15",
        padding: "25px",
        borderRadius: "15px",
        width: width,
        marginTop: "0.5rem",
        opacity: opacity,
        backgroundColor: "rgba(211,211,211,0.85)",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        height:"100%" 
      }}
    >
      <span
        style={{ display: "inline-block", fontWeight: "500", fontSize: "6rem",color:"rgb(45,141,235)"}}
      >
        {bigText}
      </span>

      <span
        style={{ display: "inline-block", fontWeight: "600", fontSize: "1.6rem",textAlign:"center" }}
      >
        {smallText}
      </span>
    </div>
  );
};
