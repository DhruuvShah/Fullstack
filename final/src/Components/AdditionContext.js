/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

const NumberContext = createContext();

function NumberDisplay() {
  const {num1, num2, sum} = useContext(NumberContext);

  return (
    <div className="addition">
      <h3>Number 1: {num1}</h3>
      <h3>Number 2: {num2}</h3>
      <h3>Sum: {sum}</h3>
    </div>
  );
}

function AdditionContext() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);
  const sum = num1 + num2;

  return (
    <NumberContext.Provider value={{ num1, num2, sum }}>
        <NumberDisplay/>
    </NumberContext.Provider>
  );
}

export default AdditionContext;
