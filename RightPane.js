import React from "react";
import { AddressInfo } from "./RightPane/AddressInfo";
import { CommunityIcons } from "./RightPane/CommunityIcons";
import { InsuranceAd } from "./RightPane/InsuranceAd";

import "./RightPane.css";
import { UserProfile } from "./RightPane/UserProfile";

export const RightPane = () => {
  return (
    <div className="right-pane primary" style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <UserProfile />
        <AddressInfo/>
        <CommunityIcons />
        <InsuranceAd/>
    </div>
  );
};
