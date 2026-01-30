import { useState } from "react";
import "./Calculator.css";
function Calculator() {
  // state for both input numbers and result
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  // handle input change
  const handleNum1Change = (e) => {
    setNum1(e.target.value); // updates num1 whenever text changes;
  };
  const handleNum2Change = (e) => {
    setNum2(e.target.value); // updates num2 whenever text changes;
  };
  // math operations
  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };
  const handleSubtract = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiply = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDevide = () => {
    if (parseFloat(num2) === 0) {
      setResult("Cannot divide by 0");
    } else {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(quotient);
    }
  };

  // reset all values
  const reset = () => {
    setNum1("");

    setNum2("");
    setResult("");
  };

  return (
    <div className="calc-container">
      <h2>Simple Calculator</h2>

      {/* Input fields */}
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter second number"
      />

      {/* Buttons */}
      <div className="button-group">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>−</button>
        <button onClick={handleMultiply}>×</button>
        <button onClick={handleDevide}>÷</button>
        <button onClick={reset}>Reset</button>
      </div>

      {/* Result display */}
      <h3>Result: {result}</h3>
    </div>
  );
}
export default Calculator;
