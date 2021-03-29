import React, { useState } from "react";
import { BurdgerMenu } from "./BurdgerMenu";
import { FormStepInfo } from "./FormStepInfo";
import { Logo } from "./Logo";
import { MainForm } from "./MainForm";

import "./MainPane.css";

export const MainPane = () => {
  const [carData, setCarData] = useState({
    brand: "",
    model: "",
  });

  const [accidentData, setAccidentData] = useState({
    vehicleName: "",
    registrationName: "",
    manufacturingYear: false,
  });

  const [insuranceProgram, setInsuranceProgram] = useState({
    inclusiveOffer: "$1500",
    franchise: "$0",
    extendProtection: false,
    extendProtectionValue: "$0",
  });

  const [curStep, setCurStep] = useState(1);

  const [stepState, setStepState] = useState([false, false, false]);

  const setFirstStep = (val) => {
    let newArray = [...stepState];
    newArray.splice(0, 0, true);
    setStepState(newArray);
  };

  const setSecondStep = (val) => {
    let newArray = [...stepState];
    newArray.splice(1, 1, true);
    setStepState(newArray);
  };

  const setThirdStep = (val) => {
    let newArray = [...stepState];
    newArray.splice(2, 2, true);
    setStepState(newArray);
  };

  return (
    <div className="main-pane">
      <div
        className="main-pane-nav"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          borderBottom: "1px solid lightgray",
        }}
      >
        <Logo />

        <FormStepInfo stepState={stepState} />

        <BurdgerMenu />
      </div>

      <MainForm
        curStep={curStep}
        setCurStep={setCurStep}
        accidentData={accidentData}
        setAccidentData={setAccidentData}
        carData={carData}
        setCarData={setCarData}
        insuranceProgram={insuranceProgram}
        setInsuranceProgram={setInsuranceProgram}
        setFirstStep={setFirstStep}
        setSecondStep={setSecondStep}
        setThirdStep={setThirdStep}
      />
    </div>
  );
};
