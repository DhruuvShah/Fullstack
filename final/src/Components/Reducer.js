import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="reducer">
      <h2>Count: {state.count}</h2>
      <div className="counter-buttons">
        <button className="btn-success" onClick={() => dispatch({ type: "increment" })}>＋</button>
        <button onClick={() => dispatch({ type: "reset" })}>↺ Reset</button>
        <button className="btn-danger" onClick={() => dispatch({ type: "decrement" })}>－</button>
      </div>
    </div>
  );
}

export default Reducer;
