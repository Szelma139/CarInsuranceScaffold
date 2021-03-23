import React from "react";

export const AddressInfo = () => {
  return (
    <div style={{flex: "1", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <div style={{ width: "100%", alignItems: "center" }}>
        <span
          style={{
            display: "block",
            width: "100%",
            color:"lightgray",
            textAlign: "center",
          }}
        >
          USA
        </span>
        <span
          style={{
            display: "block",
            width: "100%",
            color:"lightgray",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          California, 3766 E Conejo Ave
        </span>
        <span
          style={{
            display: "block",
            width: "100%",
            color:"lightgray",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          CA 93362
        </span>
      </div>
    </div>
  );
};
