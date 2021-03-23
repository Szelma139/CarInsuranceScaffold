import React from 'react'

export const UserProfile = () => {
    return (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "2",
          alignItems: "center",
          justifyContent: "space-around",
       
        }}
      >
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            flex: "2",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            src="https://picsum.photos/150/150"
            alt="user-profile"
          />
          <span
            style={{
              display: "block",
              color: "white",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Slawek Niedba
          </span>
          <a
            href="interia.pl"
            style={{
              fontSize: "1.5rem",
              color: "white",
              display: "block",
              textDecoration: "underline",
            }}
          >
            <span> Edit</span>
          </a>
        </div>
      </div>
    )
}
