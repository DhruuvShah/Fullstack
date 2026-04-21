// ThemeToggle.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={`app ${theme}`}>
        <h1>{theme === "light" ? "☀️" : "🌙"} {theme.toUpperCase()} Mode</h1>
        <button className="btn-iris" onClick={toggle}>Toggle Theme</button>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

function Child() {
  const { theme } = useContext(ThemeContext);
  return <p className={theme}>This follows the theme!</p>;
}
