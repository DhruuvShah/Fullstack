// ===================================
// Calculator.js - Calculator Component
// ===================================

import React, { useState } from "react";
import "../styles/Calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const calculate = (operation) => {
    const n1 = parseFloat(num1) || 0;
    const n2 = parseFloat(num2) || 0;
    let res = 0;
    let operationSymbol = "";

    switch (operation) {
      case "add":
        res = n1 + n2;
        operationSymbol = "+";
        break;
      case "subtract":
        res = n1 - n2;
        operationSymbol = "-";
        break;
      case "multiply":
        res = n1 * n2;
        operationSymbol = "×";
        break;
      case "divide":
        res = n2 !== 0 ? n1 / n2 : "Error";
        operationSymbol = "÷";
        break;
      default:
        res = 0;
    }

    setResult(res);

    if (res !== "Error") {
      const historyEntry = `${n1} ${operationSymbol} ${n2} = ${res}`;
      setHistory([historyEntry, ...history].slice(0, 5));
    }
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult(0);
  };

  return (
    <div className="calc-container">
      <h2>Simple Calculator</h2>

      <div className="calc-display">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button className="operator" onClick={() => calculate("add")}>
          +
        </button>
        <button className="operator" onClick={() => calculate("subtract")}>
          −
        </button>
        <button className="operator" onClick={() => calculate("multiply")}>
          ×
        </button>
        <button className="operator" onClick={() => calculate("divide")}>
          ÷
        </button>
        <button className="equals" onClick={() => calculate("add")}>
          Calculate
        </button>
        <button className="clear" onClick={clearAll}>
          Clear
        </button>
      </div>

      <h3>Result:</h3>
      <div className="calc-result">{result}</div>

      {history.length > 0 && (
        <div className="calc-history">
          <strong>History:</strong>
          {history.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calculator;
