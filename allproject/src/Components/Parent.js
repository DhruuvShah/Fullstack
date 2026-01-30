import React from "react";
import Child1 from "./Child1";
function Parent(props) {
  return (
    <div>
      <h3>
        Parent name:{props.name} City:{props.city}
      </h3>
      <div>
        <Child1 name="Priya" city="New York" />
      </div>
    </div>
  );
}
export default Parent; 