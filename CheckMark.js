import React from 'react'

export const CheckMark = ({
    width="40px",
    height="40px",
    color="rgb(45,141,235)"
}) => {
    return (
        <div style={{borderRadius:"50%",width:width,height:height,backgroundColor:color,display:"flex",alignItems:"center",justifyContent:"center"}}>
             <span style={{color:"white",fontSize:"22px"}}>&#10003;
                 </span>  
        </div>
    )
}
