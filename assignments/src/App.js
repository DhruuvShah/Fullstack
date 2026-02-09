import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Counter from "./Components/Counter";
import Calculator from "./Components/Calculator";
import Clock from "./Components/Clock";
import Theme from "./Components/Theme";
import "./App.css";
import ReducerDemo from "./Components/Reducer";
import Login from "./Components/Login";


export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
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
    </ThemeContext.Provider>
  );
};

export default App;