import { useContext } from "react";
import { ThemeContext } from "../App";
import "./Theme.css";
import { PiMoon } from "react-icons/pi";
import { LiaSunSolid } from "react-icons/lia";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-container">
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
