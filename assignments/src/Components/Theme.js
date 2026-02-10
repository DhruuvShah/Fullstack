import { useState } from "react";
import "./Theme.css";
import { PiMoon } from "react-icons/pi";
import { LiaSunSolid } from "react-icons/lia";

const Theme = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`theme-container ${theme}`}>
      <div className="theme-wrapper">
        <h2>Theme Switcher</h2>
        <div className="theme-info">
          <p className="theme-status">
            Current Theme:{" "}
            <strong>{theme === "light" ? "Light Mode" : "Dark Mode"}</strong>
          </p>
          <p className="theme-description">
            {theme === "light" ? (
              <>
                <LiaSunSolid /> Bright and Clean
              </>
            ) : (
              <>
                <PiMoon /> Dark and Elegant
              </>
            )}
          </p>
        </div>
        <button className="toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? (
            <>
              <PiMoon /> Switch to Dark
            </>
          ) : (
            <>
              <LiaSunSolid /> Switch to Light
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Theme;
