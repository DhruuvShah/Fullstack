import { useState } from 'react';
import { evaluate } from 'mathjs';
import { motion } from 'motion/react';
import '../styles/Calculator.css';

export function Calculator() {
  const [input, setInput] = useState("");

  const addNum = (value: string) => setInput(input + value);
  const clearNum = () => setInput("");
  const calculateResult = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    { label: "C", type: "action" }, { label: "(", type: "action" }, { label: ")", type: "action" }, { label: "/", type: "operator" },
    { label: "7", type: "number" }, { label: "8", type: "number" }, { label: "9", type: "number" }, { label: "*", type: "operator" },
    { label: "4", type: "number" }, { label: "5", type: "number" }, { label: "6", type: "number" }, { label: "-", type: "operator" },
    { label: "1", type: "number" }, { label: "2", type: "number" }, { label: "3", type: "number" }, { label: "+", type: "operator" },
    { label: "0", type: "number", wide: true }, { label: ".", type: "number" }, { label: "=", type: "operator" }
  ];

  return (
    <div className="calc-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="calc-display"
        readOnly
        placeholder="0"
      />
      <div className="calc-grid">
        {buttons.map((btn) => (
          <motion.button
            whileTap={{ scale: 0.85, filter: "brightness(1.3)" }}
            key={btn.label}
            onClick={() => {
              if (btn.label === 'C') clearNum();
              else if (btn.label === '=') calculateResult();
              else addNum(btn.label);
            }}
            className={`calc-btn ${
              btn.wide ? "calc-btn-wide" : ""
            } ${
              btn.type === 'operator' ? 'calc-btn-operator' :
              btn.type === 'action' ? 'calc-btn-action' : 
              'calc-btn-number'
            }`}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
