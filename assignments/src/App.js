import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Counter from "./Components/Counter";
import Calculator from "./Components/Calculator";
import Clock from "./Components/Clock";
import Theme from "./Components/Theme";
import "./App.css";
import ReducerDemo from "./Components/Reducer";
import Login from "./Components/Login";


const App = () => {
  return (
    <div className="main-content">
      <Nav />
      <Routes>
        <Route path="/theme" element={<Theme />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/reducer" element={<ReducerDemo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;