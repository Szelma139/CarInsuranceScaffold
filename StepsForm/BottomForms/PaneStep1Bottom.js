import React from 'react'
import { Card } from '../../Card'

export const PaneStep1Bottom = () => {
    return (
        <div
        style={{
                width:"100%"
        }}
      >
          <div style={{display:"flex",flexDirection:"column",width:"100%"}}>

   
        <h1 style={{ width: "100%",marginBottom:"20px" }}>
          Safety is what matters{" "}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "300px",
      
          }}
        >

          <Card bigText="5m" smallText="Payments every day"/>
          <Card bigText="11yr" smallText="Leader in the insurance market" />
          <Card bigText="98%" smallText="Satisfied clients working with us" />
          <Card bigText="2m" smallText="Agreements concluded in 2020" />
        </div>
      </div>
      </div>
    )
}
