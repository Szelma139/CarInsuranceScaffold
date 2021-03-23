import React from 'react'

import {
    GrLinkedinOption as LinkedinIcon,
    GrFacebookOption as FacebookIcon,
    GrTwitter as TwitterIcon,
  } from "react-icons/gr";

export const CommunityIcons = () => {
    return (
        <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          flex: "1",
        }}
      >
        <div
          style={{
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "black",
          }}
        >
          <FacebookIcon size="1.5rem" color="white" />
        </div>
        <div
          style={{
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "black",
          }}
        >
          <LinkedinIcon size="1.5rem" color="white" />
        </div>
        <div
          style={{
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "black",
          }}
        >
          <TwitterIcon size="1.5rem" color="white" />
        </div>
      </div>
    )
}
