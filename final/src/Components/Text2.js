import { createContext, useContext } from "react";

const tradmark = createContext();

function Text2() {
  return (
    <div>
      <tradmark.Provider value={"JG UNIVERSITY AHMEDABAD GUJARAT"}>
        <Child1 />
        <Child2 />
        <Child3 />
      </tradmark.Provider>
    </div>
  );
}

function Child1() {
  const globaldata = useContext(tradmark);
  return (
    <div className="app">
      <h1>{globaldata}</h1>
      <h2>IT DEPARTMENT IN {tradmark}</h2>
    </div>
  );
}

function Child2() {
  const globaldata = useContext(tradmark);
  return (
    <div className="app">
      <h1>{globaldata}</h1>
      <h2>BTECH DEPARTMENT IN {tradmark}</h2>
    </div>
  );
}

function Child3() {
  const globaldata = useContext(tradmark);
  return (
    <div className="app">
      <h1>{globaldata}</h1>
      <h2>FACULTY OF TECHNOLOGY IN {tradmark}</h2>
    </div>
  );
}

export default Text2;
