import React from "react";
import { CheckMark } from "./CheckMark";
import { BurdgerMenu } from "./BurdgerMenu";
import { Card } from "./Card";
import { FormStepInfo } from "./FormStepInfo";
import { Logo } from "./Logo";

import "./MainPane.css";

export const MainPane = () => {
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

        <FormStepInfo />

        <BurdgerMenu />
      </div>
      <div className="main-pane-form">
        <CheckMark />
        <CheckMark />
        <CheckMark />
      </div>
      <div className="main-pane-bottom">
        <h1 style={{ display: "inline-block", width: "100%" }}>
          Safety is what matters{" "}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            height: "350px",
            gap: "55px",
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
