import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus, X, Divide, RotateCcw } from "lucide-react";
import "../styles/SimpleCalculator.css";
function SimpleCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const handleAdd = () => setResult(parseFloat(num1) + parseFloat(num2));
  const handleSubtract = () => setResult(parseFloat(num1) - parseFloat(num2));
  const handleMultiply = () => setResult(parseFloat(num1) * parseFloat(num2));
  const handleDevide = () => {
    if (parseFloat(num2) === 0) setResult("Cannot divide by 0");
    else setResult(parseFloat(num1) / parseFloat(num2));
  };
  const reset = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };
  return <div className="simplecalc-container">
      <div className="simplecalc-inputs">
        <input
    type="number"
    value={num1}
    onChange={(e) => setNum1(e.target.value)}
    placeholder="First number"
    className="simplecalc-input"
  />
        <input
    type="number"
    value={num2}
    onChange={(e) => setNum2(e.target.value)}
    placeholder="Second number"
    className="simplecalc-input"
  />
      </div>

      <div className="simplecalc-grid">
        <motion.button whileTap={{ scale: 0.95 }} onClick={handleAdd} className="simplecalc-btn"><Plus size={18} /> Add</motion.button>
        <motion.button whileTap={{ scale: 0.95 }} onClick={handleSubtract} className="simplecalc-btn"><Minus size={18} /> Sub</motion.button>
        <motion.button whileTap={{ scale: 0.95 }} onClick={handleMultiply} className="simplecalc-btn"><X size={18} /> Mul</motion.button>
        <motion.button whileTap={{ scale: 0.95 }} onClick={handleDevide} className="simplecalc-btn"><Divide size={18} /> Div</motion.button>
      </div>
      
      <motion.button whileTap={{ scale: 0.95 }} onClick={reset} className="simplecalc-reset">
        <RotateCcw size={18} /> Reset
      </motion.button>

      <div className="simplecalc-result-card">
        <h3 className="simplecalc-result-label">Result</h3>
        <div className="simplecalc-result-value">
          {result === "" ? "0" : result}
        </div>
      </div>
    </div>;
}
export {
  SimpleCalculator
};
