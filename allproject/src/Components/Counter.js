import { useState } from "react";
import "./Counter.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <h2>Counter App</h2>
      <div className="counter-display">
        <button className="plus" onClick={increment}>
          +
        </button>

        <h1>{count}</h1>
        <button className="minus" onClick={decrement}>
          -
        </button>
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default CounterApp;
