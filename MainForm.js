import React from "react";
import { PaneStep1 } from "./StepsForm/PaneStep1";
import { PaneStep2 } from "./StepsForm/PaneStep2";
import { PaneStep3 } from "./StepsForm/PaneStep3";

export const MainForm = ({
  accidentData,
  setAccidentData,
  carData,
  setCarData,
  insuranceProgram,
  setInsuranceProgram,
  curStep,
  setCurStep,
  setFirstStep,
  setSecondStep,
  setThirdStep
}) => {
  return (
    <div>
      <>
        <PaneStep1
          accidentData={accidentData}
          setAccidentData={setAccidentData}
          curStep={curStep}
          setCurStep={setCurStep}
          setFirstStep={setFirstStep}
        />
        <PaneStep2
          curStep={curStep}
          setCurStep={setCurStep}
          carData={carData}
          setCarData={setCarData}
          setSecondStep={setSecondStep}
        />
        <PaneStep3
          curStep={curStep}
          setCurStep={setCurStep}
          insuranceProgram={insuranceProgram}
          setInsuranceProgram={setInsuranceProgram}
          setThirdStep={setThirdStep}
        />
      </>
    </div>
  );
};
