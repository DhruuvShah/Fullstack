import React, { useReducer } from "react";
import "./Reducer.css";

const Reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    case "SET_VALUE":
      return { count: action.payload };

    default:
      return state;
  }
};

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(Reducer, { count: 0 });

  return (
    <div className="reducer-container">
      <h2>useReducer Demo</h2>
      <div className="reducer-display">{state.count}</div>
      <div className="reducer-buttons">
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={() => dispatch({ type: "SET_VALUE", payload: 100 })}>
          Set to 100
        </button>
      </div>
    </div>
  );
};

export default ReducerDemo;
