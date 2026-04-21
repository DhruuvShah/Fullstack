import { useState } from "react";

function Counter() {
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
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button className="btn-success" onClick={increment}>＋ Increment</button>
        <button className="btn-danger" onClick={decrement}>－ Decrement</button>
        <button onClick={reset}>↺ Reset</button>
      </div>
    </div>
  );
}

export default Counter;
