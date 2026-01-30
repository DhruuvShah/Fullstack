import React from "react";
import Child2 from "./Child2";
function Child1(props) {
  return (
    <div>
      <h3>
        Child1 name:{props.name}
        City:{props.city}
      </h3>
      <div>
        <Child2 name="Anjali" city="Los Angeles" />
      </div>
    </div>
  );
}
export default Child1;
