import React from "react";

const Greet = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "#e8f5e9",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginTop: 0, textAlign: "center" }}>
          Task 1: First React Component
        </h2>
        <h1
          style={{
            color: "#2e7d32",
            fontSize: "2.5rem",
            margin: 0,
          }}
        >
          Hello World
        </h1>
      </div>
    </div>
  );
};

export default Greet;
