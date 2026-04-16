import React, { useState } from 'react';
import { evaluate } from "mathjs";
import '../styles/Modern.css';

function Modern() {
  // Modern Calculator State
  const [input, setInput] = useState("");

  // Simple Calculator State
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [simpleResult, setSimpleResult] = useState("");

  const addNum = (value) => {
    setInput(input + value);
  }

  const clearNum = () => {
    setInput("");
  }

  const calculateResult = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleSimpleCalc = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setSimpleResult("Invalid Input");
      return;
    }
    switch (operator) {
      case '+': setSimpleResult(n1 + n2); break;
      case '-': setSimpleResult(n1 - n2); break;
      case '*': setSimpleResult(n1 * n2); break;
      case '/': setSimpleResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero"); break;
      default: break;
    }
  };

  return (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      {/* Simple Calculator */}
      <div className="calculator">
        <h2>Simple Calculator</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
          <input 
            type="number" 
            placeholder="Number 1" 
            value={num1} 
            onChange={(e) => setNum1(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Number 2" 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
          />
        </div>
        <div className="buttons" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <button onClick={() => handleSimpleCalc('+')}>+</button>
          <button onClick={() => handleSimpleCalc('-')}>-</button>
          <button onClick={() => handleSimpleCalc('*')}>*</button>
          <button onClick={() => handleSimpleCalc('/')}>/</button>
        </div>
        <div style={{ marginTop: '16px', padding: '10px', background: 'var(--code-bg)', borderRadius: '8px', textAlign: 'center' }}>
          <strong>Result:</strong> <span style={{ color: 'var(--accent)' }}>{simpleResult}</span>
        </div>
      </div>

      {/* Modern Calculator */}
      <div className="calculator">
        <h2>Modern Calculator</h2>
        <input type="text" value={input} readOnly></input>
        <div className="buttons">
          <button onClick={() => addNum("7")}>7</button>
          <button onClick={() => addNum("8")}>8</button>
          <button onClick={() => addNum("9")}>9</button>
          <button className="op-btn" onClick={() => addNum("/")}>/</button>
          
          <button onClick={() => addNum("4")}>4</button>
          <button onClick={() => addNum("5")}>5</button>
          <button onClick={() => addNum("6")}>6</button>
          <button className="op-btn" onClick={() => addNum("*")}>*</button>
          
          <button onClick={() => addNum("1")}>1</button>
          <button onClick={() => addNum("2")}>2</button>
          <button onClick={() => addNum("3")}>3</button>
          <button className="op-btn" onClick={() => addNum("-")}>-</button>
          
          <button onClick={clearNum}>C</button>
          <button onClick={() => addNum("0")}>0</button>
          <button onClick={calculateResult}>=</button>
          <button className="op-btn" onClick={() => addNum("+")}>+</button>
        </div>
      </div>

    </div>
  );
}

export default Modern;
