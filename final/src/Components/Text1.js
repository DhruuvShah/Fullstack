import { createContext, useContext } from "react";

const SurName = createContext();

function Text1() {

  return (
    <div className="app">
      <SurName.Provider value={"Sharma"}>
        <Child1 />
        <Child2 />
      </SurName.Provider>
    </div>
  );
}

function Child1() {
  const globaldata = useContext(SurName);
  return (
    <div className="app">
      <h1>Krish {globaldata}</h1>
    </div>
  );
}

function Child2() {
  return (
    <div className="app">
      <h1>Madhav {SurName}</h1>
    </div>
  );
}

export default Text1;
