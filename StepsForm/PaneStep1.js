import React from "react";
import { Card } from "../Card";
import { CheckMark } from "../CheckMark";
import { TransitionComponent } from "../TransitionComponent";
import { PaneStep1Bottom } from "./BottomForms/PaneStep1Bottom";
import "./StepTheme.css";

export const PaneStep1 = ({
  carBrands = ["Volvo", "BMW", "Skoda", "Opel", "Fiat", "Saab", "Audi"],
  carModel = ["X6", "V1", "V2", "RR", "S1"],
  setFinished,
  curStep,
  setCurStep,
  setFirstStep
}) => {
  if (curStep !== 1) return null;
  const handleClick = (e) => {
    e.preventDefault();
    setFirstStep(true);
    setCurStep(2);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "550px",
            height: "500px",
            display: "inline-block",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <TransitionComponent>
              <h2 style={{ margin: "1rem 0" }}> Type of transport</h2>

              <form>
                <label htmllFor="cars">Car brand:</label>
                <select name="cars" id="cars">
                  {carBrands.map((brand, index) => (
                    <option value={brand}>{brand}</option>
                  ))}
                </select>
                <br></br>

                <label htmlFor="cars">Car model :</label>
                <select name="cars" id="cars">
                  {carModel.map((model, index) => (
                    <option value={model}>{model}</option>
                  ))}
                </select>
                <br></br>

                <span style={{ fontWeight: "600" }}>
                  Providing neccesary data, the company assumes responsiubility
                  for the confidentiality of the information.
                </span>
                <button
                  onClick={(e) => handleClick(e)}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "1.2rem 2.5rem",
                    borderRadius: "10px",
                    fontSize: "1.5rem",
                    display: "block",
                    margin: "25px 0",
                  }}
                  type="submit"
                  value="Submit"
                >
                  Next
                </button>
              </form>
            </TransitionComponent>
          </div>
        </div>

        <div
          style={{
            width: "750px",
            height: "500px",
          }}
        >
          <TransitionComponent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <h2 style={{ margin: "1rem 0" }}>
                Car insurance from gold time is:
              </h2>
              <div style={{ display: "flex", flexDirection: "column", alignItems:"flex-start",justifyContent:"space-around" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop:"3rem"
                  }}
                >
                  <CheckMark />
                  <span style={{ marginLeft: "1rem",fontWeight:"700" }}>
                    Get full coverage of your costs in the event of a car
                    accident.
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop:"3rem"
                    }}
                  >
                    <CheckMark />
                    <span style={{ marginLeft: "1rem",fontWeight:"700" }}>
                      With the "All-inclusive" program, you do not need to apply
                      for payment to another insurance company.
                    </span>
                  </div>{" "}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop:"3rem"
                    }}
                  >
                    <CheckMark />
                    <span style={{ marginLeft: "1rem",fontWeight:"700" }}>
                      Receiving insurance payment in the shortest possible time
                      without visiting the office.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TransitionComponent>
        </div>
      </div>
      <PaneStep1Bottom />
    </div>
  );
};
