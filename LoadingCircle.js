import React, { useState, useEffect } from "react";

import "./LoadingCircle.css";

export const LoadingCircle = ({
  color="0,255,255",
  text="$4500",
}) => {


  const [percent, setPercent] = useState(1);
  const bColor=color+",0,4"
    const style = {
        "--fillValue": `${percent}`,
      };
  return (
    <div className="circle-svg">
      <svg viewBox="-4 -4 46 46">
        <path
         stroke={`rgb(${color})`}
          strokeWidth="2.8"
          strokeOpacity="0.1"
          fill="none"
          strokeDasharray={`100, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <path
        key={percent}
        className="path-fill"
        style={style}
          stroke={`rgb(${color})`}
          strokeWidth="1.8"
          strokeOpacity="1"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${percent}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <text text-anchor="middle" style={{fontSize:"8px",textAlign:"center"}} x="42%" y="45%">{text}</text>
      </svg>
    </div>
  );
};

