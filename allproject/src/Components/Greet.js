import React from "react";
export default function Greet(props) {
  return (
    <div>
      <h1>
        Welcome {props.name} to {props.city}
      </h1>
    </div>
  );
}
