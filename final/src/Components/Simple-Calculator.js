import { useState } from "react";

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
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSub = () => {
    const sub = parseFloat(num1) - parseFloat(num2);
    setResult(sub);
  };

  const handleMul = () => {
    const mul = parseFloat(num1) * parseFloat(num2);
    setResult(mul);
  };

  const handleDiv = () => {
    if (parseFloat(num2) === 0) {
      setResult("Cannot Divide By 0");
    } else {
      const divide = parseFloat(num1) / parseFloat(num2);
      setResult(divide);
    }
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="simple">
      <h1>Simple Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={handleNum2Change}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Subtract</button>
      <button onClick={handleMul}>Multiply</button>
      <button onClick={handleDiv}>Divide</button>
      <button onClick={reset}>Reset</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;