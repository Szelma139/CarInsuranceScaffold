import React from "react";

export const InsuranceAd = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flex: "2",
      }}
    >
      <div
        style={{
          borderRadius: "25px",
          backgroundColor: "gray",
          height: "100%",
          padding: "45px",
          display: "flex",
          flexDirection: "column",
          backgroundImage:"url(/images/car-accident-yellow.png)",
          backgroundPositionY:"100px"
      
        }}
      >
        <span
          style={{
            color: "black",
            fontWeight: "700",
            fontSize: "2rem",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          Insurance case
        </span>
        <span style={{ color: "black", fontWeight: "700", marginTop: "20px" }}>
          In case of an insured accident, see the step by step instructions
        </span>
        <button style={{marginTop:"20px",color:"white",backgroundColor:"black",padding:"1.5rem 2.5rem",borderRadius:"10px",marginLeft:"auto",marginRight:"auto"}}>View details</button>
      </div>
    </div>
  );
};
