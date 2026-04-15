import { useState } from "react";
import { motion } from "motion/react";
import "../styles/CounterApp.css";
function CounterApp() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="counterapp-container">
      <div className="counterapp-circle">
        <motion.h1
          key={count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="counterapp-count"
        >
          {count}
        </motion.h1>
      </div>
      <div className="counterapp-controls">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={decrement}
          className="counterapp-btn-round"
        >
          -
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={reset}
          className="counterapp-btn-reset"
        >
          Reset
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={increment}
          className="counterapp-btn-round"
        >
          +
        </motion.button>
      </div>
    </div>
  );
}
export { CounterApp };
