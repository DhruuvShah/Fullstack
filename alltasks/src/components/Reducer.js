import React, { useReducer } from 'react';
import '../styles/Reducer.css';

function reducerFunction(state, action) {
  switch(action.type) {
    case 'increment_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = { name: 'Ayushi', age: 20 };

export default function Reducer() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  function handleButtonClick() {
    dispatch({ type: 'increment_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    });
  }

  return (
    <div className="reducer-container">
      <h2>Age Reducer</h2>
      <div className="reducer-controls">
        <input value={state.name} onChange={handleInputChange}/>
        <button onClick={handleButtonClick}>Increment Age</button>
      </div>
      <p className="reducer-output">Hello, <strong>{state.name}</strong>. You are <strong>{state.age}</strong>.</p>
    </div>
  );
}
