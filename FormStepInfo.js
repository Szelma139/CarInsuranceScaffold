import React, { useState } from "react";
import { StepInfo } from "./StepsWidget/StepInfo";

export const FormStepInfo = ({stepState=[false, false, false]}) => {
  const first = stepState[0]
  const second = stepState[1]
  const third = stepState[2]
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
      <StepInfo finished={first}/>
      <div style={{ alignSelf: "center",transform:"translateY(22px)" }}>
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
      <StepInfo  number="2" text="Accident" finished={second} />
      <div style={{ alignSelf: "center",marginLeft:"5px",marginRight:"10px", transform:"translateY(22px)" }}>
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
      <StepInfo number="3" text="Review" finished={third}  />

    </div>
  );
};

/*
  <div style={{width:"200px",border:"1px solid rgb(45,141,235)", transform:"translate(145px,-25px)"}}></div>


*/
