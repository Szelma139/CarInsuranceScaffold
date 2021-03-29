import React from "react";

export const StepInfo = ({
  text = "InsuranceText",
  number = "1",
  finished = false,
}) => {
  if (finished)
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
        <span style={{ fontWeight: "700", marginBottom: "0.5rem" }}>{text}</span>
        <div  style={{
          border: "3px solid rgb(45,141,235)",
          fontWeight: "700",
          borderRadius: "50%",
          textAlign: "center",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          color:"white",
          backgroundColor:"rgb(45,141,235)",
          justifyContent: "center"}}>&#10003;</div>
          {finished.toString()}
      </div>
    );
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span style={{ fontWeight: "700", marginBottom: "0.5rem" }}>{text}</span>
      <div
        style={{
          border: "3px solid rgb(45,141,235)",
          fontWeight: "700",
          borderRadius: "50%",
          textAlign: "center",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {number}
      </div>
      {finished.toString()}
    </div>
  );
};
