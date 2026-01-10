import { useReducer } from "react";

const reducer = (state, action) => {
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
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#c3eaf0",
        borderRadius: "12px",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#00bcd4", marginTop: 0 }}>
        Task 4: useReducer Demo
      </h2>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#333",
          margin: "20px 0",
        }}
      >
        {state.count}
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{
            backgroundColor: "#e91e63",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          style={{
            backgroundColor: "#607d8b",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          style={{
            backgroundColor: "#00bcd4",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "SET_VALUE", payload: 100 })}
          style={{
            backgroundColor: "#795548",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Set to 100
        </button>
      </div>
    </div>
  );
};
export default ReducerDemo;
