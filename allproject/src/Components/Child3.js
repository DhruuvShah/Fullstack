import React from "react";
import Child4 from "./Child4";
function Child3(props) {
  return (
    <div>
      <h3>
        Child3 name:{props.name}
        City:{props.city}
      </h3>
      <div>
        <Child4 name="Sonia" city="Houston" />
      </div>
    </div>
  );
}

export default Child3;
