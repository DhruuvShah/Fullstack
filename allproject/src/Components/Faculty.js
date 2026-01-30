import React from "react";
export default function Faculty(props) {
  return (
    <h1>
      Name: {props.name}
      <br /> Department:{props.Department}
      <br />
      University:{props.university}
    </h1>
  );
}
