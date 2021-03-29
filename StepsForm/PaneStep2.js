import React, { useState } from "react";
import { CheckMark } from "../CheckMark";
import { TransitionComponent } from "../TransitionComponent";
import { PanelStep2Bottom } from "./BottomForms/PanelStep2Bottom";

import "./StepTheme.css";

export const PaneStep2 = ({
  curStep,
  setCurStep,
  vehicle = ["BMW, X6", "BMW, X5","BMW, X4"],
  registrationYear = [
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
  ],
  carName = "BMW, X6",
  carType = "Medium-sized crossover",
}) => {

  const [carPath,setCarPath] = useState("/images/car1.png")

  if (curStep !== 2) return null;

  const handleClick = (e) => {
    e.preventDefault();
    setCurStep(3);
  };


  const handleCarOption=(e)=>{
if(e.target.selectedIndex === 0){
  setCarPath("/images/car1.png")
}

if(e.target.selectedIndex === 1){
  setCarPath("/images/car2.png")
}

if(e.target.selectedIndex === 2){
  setCarPath("/images/car3.png")
}
    console.log(e)
  }



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
              <h2 style={{ margin: "1rem 0" }}> Accident</h2>

              <form>
                <label htmllFor="cars">Car brand:</label>
                <select
                onChange={(e)=>handleCarOption(e)}
                 name="cars" id="cars">
                  {vehicle.map((vehicle, index) => (
                    <option value={vehicle}>{vehicle}</option>
                  ))}
                </select>
                <br></br>

                <label htmlFor="cars">Car model :</label>
                <select name="cars" id="cars">
                  {registrationYear.map((year, index) => (
                    <option value={year}>{year}</option>
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
              <h2 style={{ margin: "1rem 0" }}>{carName}</h2>
              <span style={{ fontWeight: "600" }}>{carType}</span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-around",
                }}
              >
                <img src={carPath} alt="carss" width="500px" />
              </div>
            </div>
          </TransitionComponent>
        </div>
      </div>
      <PanelStep2Bottom />
    </div>
  );
};
