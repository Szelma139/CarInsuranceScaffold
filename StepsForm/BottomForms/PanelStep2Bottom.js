import React from "react";

export const PanelStep2Bottom = () => {
  return (
    <div
      style={{
        width: "100%",

        display: "flex",
        flexDirection: "row",
        borderRadius: "25px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(243,247,255,1",
          flex: 4,
          padding: "55px",
          borderTopLeftRadius: "25px",
          borderBottomLeftRadius: "25px",
        }}
      >
        
        <span style={{ fontWeight: "600", fontSize: "2rem" }}>Parameters </span>
      </div>
      <div
        style={{
          backgroundColor: "rgba(55,146,235,1",
          flex: 1.5,
          color: "#fff",
          padding: "55px",
          borderTopRightRadius: "25px",
          borderBottomRightRadius: "25px",
        }}
      >
        <span style={{ fontWeight: "600", fontSize: "2rem" }}>Summary </span>
        <div style={{ display: "flex", flexDirection: "column", justifyContent:"flex-start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div style={{ marginTop: "2em" }}>
              <span style={{ display: "inline", marginRight: "1em" }}>
                &#10003;
              </span>
              <span>BMW X6</span>
            </div>
            <span style={{ marginTop: "2em" }}> Vehicle</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div style={{ marginTop: "2em" }}>
              <span style={{ display: "inline", marginRight: "1em" }}>
                &#10003;
              </span>
              <span>New</span>
            </div>
            <span style={{ marginTop: "2em" }}> Policy Type</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: "2em",
          }}
        >
          <div style={{ marginTop: "2em" }}>
            <span style={{ display: "inline", marginRight: "1em" }}>
              &#10003;
            </span>
            <span> Expiry date</span>
          </div>
          <span style={{ marginTop: "2em" }}> 22-09-2021</span>
        </div>
        <div
          style={{ borderBottom: "0.2px solid #fff", marginBottom: "1em" }}
        ></div>
        <div style={{ width: "100%" }}>
          <span style={{ fontSize: "1.5em" }}>Total:</span>{" "}
          <div
            style={{ fontSize: "2rem", fontWeight: "800", textAlign: "right" }}
          >
            <span> $1700</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
