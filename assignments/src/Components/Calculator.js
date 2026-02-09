import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num1);
    setResult(sum);
  };

  const handleSubtract = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiply = () => {
    const multiply = parseFloat(num1) * parseFloat(num2);
    setResult(multiply);
  };

  const handleDevide = () => {
    if (parseFloat(num2) == 0) {
      setResult("Cannot Devide By 0");
    } else {
      const divide = parseFloat(num1) / parseFloat(num2);
      setResult(divide)
    }
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="calc-container">
      <h2>Simple Calculator </h2>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Enter First Number"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter Second Number"
      />

      <div className="button-group">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDevide}>/</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
