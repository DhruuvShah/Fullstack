import { useReducer } from "react";
import "../styles/ReducerDemo.css";
function reducerFunction(state, action) {
  switch (action.type) {
    case "increment_age":
      return { name: state.name, age: state.age + 1 };
    case "changed_name":
      return { name: action.nextName, age: state.age };
    default:
      throw Error("Unknown action: " + action.type);
  }
}
function ReducerDemo() {
  const [state, dispatch] = useReducer(reducerFunction, {
    name: "Ayushi",
    age: 20,
  });
  return (
    <div className="reducerdemo-container">
      <input
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "changed_name", nextName: e.target.value })
        }
        className="reducerdemo-input"
      />
      <button
        onClick={() => dispatch({ type: "increment_age" })}
        className="reducerdemo-btn"
      >
        Increment Age
      </button>
      <div className="reducerdemo-card">
        <p className="reducerdemo-text">
          Hello, <span className="reducerdemo-name">{state.name}</span>. You are{" "}
          <span className="reducerdemo-age">{state.age}</span>.
        </p>
      </div>
    </div>
  );
}
export { ReducerDemo };
