import React, { useState } from "react";
import { StepInfo } from "./StepInfo";

export const FormStepInfo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "start",
        marginLeft:"auto"
      }}
    >
      <StepInfo />
      <div style={{ alignSelf: "center" }}>
        <svg height="50" width="100">
          <line
            x1="0"
            y1="0"
            x2="300"
            y2="0"
            strokeWidth="3"
            stroke="rgb(45,141,235)"
          />
        </svg>
      </div>
      <StepInfo StepInfo number="2" text="Accident" />
      <div style={{ alignSelf: "center",marginLeft:"5px",marginRight:"10px" }}>
        <svg height="50" width="100">
          <line
            x1="0"
            y1="0"
            x2="300"
            y2="0"
            strokeWidth="3"
            stroke="rgb(45,141,235)"
          />
        </svg>
      </div>
      <StepInfo number="3" text="Review" />
      <div></div>
    </div>
  );
};

/*
  <div style={{width:"200px",border:"1px solid rgb(45,141,235)", transform:"translate(145px,-25px)"}}></div>


*/
