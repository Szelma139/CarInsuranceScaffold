import React from "react";
import { TransitionComponent } from "../TransitionComponent";

import './StepTheme.css';

export const PaneStep3 = ({ curStep, setCurStep }) => {
  if (curStep !== 3) return null;
  const handleClick = (e) => {
    e.preventDefault();
    setCurStep(4);
  };
  return (
    <TransitionComponent>
      Witaj w 3
      <form>
        <label htmllFor="cars">Car brand:</label>

        <button
          onClick={(e) => handleClick(e)}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "1.5rem 3.5rem",
            borderRadius: "10px",
            fontSize: "1.5rem",
          }}
          type="submit"
          value="Submit"
        >
          Next
        </button>
      </form>
    </TransitionComponent>
  );
};
