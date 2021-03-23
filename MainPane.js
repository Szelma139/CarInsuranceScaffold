import React from "react";
import { Card } from "./Card";
import { Logo } from "./Logo";

import "./MainPane.css";
import reportWebVitals from "./reportWebVitals";

export const MainPane = () => {
  return (
    <div className="main-pane">
      <div className="main-pane-nav">
        <Logo/>
        <div>&#10003;</div>
      </div>
      <div className="main-pane-form"></div>
      <div className="main-pane-bottom">
        <h1 style={{ display: "inline-block", width: "100%" }}>
          Safety is what matters{" "}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-around",
            height: "350px",
            gap: "25px",
          }}
        >
          <Card bigText="5m" smallText="Payments every day" />
          <Card bigText="11yr" smallText="Leader in the insurance market" />
          <Card bigText="98%" smallText="Satisfied clients working with us" />
          <Card bigText="2m" smallText="Agreements concluded in 2020" />
        </div>
      </div>
    </div>
  );
};
