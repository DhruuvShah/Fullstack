import { useState } from "react";
import { evaluate } from "mathjs";

function ModernCalculator() {
  const [input, setInput] = useState("");

  const addNum = (value) => {
    setInput(input + value);
  };
  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="modern-calculator">
      <h2>Modern Calculator</h2>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
        <div className="buttons">
            <button onClick={() => addNum("7")}>7</button>
            <button onClick={() => addNum("8")}>8</button>
            <button onClick={() => addNum("9")}>9</button>
            <button onClick={() => addNum("/")}>/</button>
            <button onClick={() => addNum("4")}>4</button>
            <button onClick={() => addNum("5")}>5</button>
            <button onClick={() => addNum("6")}>6</button>
            <button onClick={() => addNum("*")}>*</button>
            <button onClick={() => addNum("1")}>1</button>
            <button onClick={() => addNum("2")}>2</button>
            <button onClick={() => addNum("3")}>3</button>
            <button onClick={() => addNum("-")}>-</button>
            <button onClick={() => addNum("0")}>0</button>
            <button onClick={() => addNum(".")}>.</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => addNum("+")}>+</button>
            <button onClick={clearInput}>C</button>
        </div>
    </div>
  );
}

export default ModernCalculator;
