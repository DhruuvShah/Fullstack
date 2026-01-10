import { useContext } from "react";
import { ThemeContext } from "../App";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: theme === "light" ? "#f1d3ca" : "#1e293b",
        borderRadius: "12px",
        marginBottom: "20px",
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h2
        style={{
          color: theme === "light" ? "#ff5722" : "#ffa726",
          marginTop: 0,
        }}
      >
        Task 3: Theme Switcher
      </h2>
      <div
        style={{
          padding: "20px",
          backgroundColor: theme === "light" ? "#fff3e0" : "#0f172a",
          borderRadius: "8px",
          margin: "20px 0",
          color: theme === "light" ? "#333" : "#e2e8f0",
        }}
      >
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          Current Theme:{" "}
          <strong>{theme === "light" ? "Light Mode" : "Dark Mode"}</strong>
        </p>
        <p style={{ fontSize: "16px", margin: "10px 0" }}>
          {theme === "light" ? "☀️ Bright and Clean" : "🌙 Dark and Elegant"}
        </p>
      </div>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#ff5722" : "#ffa726",
          color: "white",
          padding: "12px 32px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
