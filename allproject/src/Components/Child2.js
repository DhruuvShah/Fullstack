import React from "react";
import Child3 from "./Child3";
function Child2(props) {
  return (
    <div>
      <h3>
        Child2 name:{props.name}
        City:{props.city}
      </h3>
      <div>
        <Child3 name="Rahul" city="Chicago" />
      </div>
    </div>
  );
}

export default Child2;
