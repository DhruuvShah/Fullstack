import React, { useState } from "react";

const Navbar = ({ activeUnit, setActiveUnit }) => {
  const [hoveredUnit, setHoveredUnit] = useState(null);

  const units = [
    { id: "unit1", label: "Unit - 1", subtitle: "ReactJS Basics", icon: "⚛️" },
    { id: "unit2", label: "Unit - 2", subtitle: "ReactJS Advance", icon: "🚀" },
    { id: "unit3", label: "Unit - 3", subtitle: "Node.js Basic", icon: "📦" },
    {
      id: "unit4",
      label: "Unit - 4",
      subtitle: "Node.js Intermediate",
      icon: "🔧",
    },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.logo}>📚 Course Navigation</h2>
          <div style={styles.badge}>4 Units</div>
        </div>
        <ul style={styles.navList}>
          {units.map((unit) => (
            <li key={unit.id} style={styles.navItem}>
              <button
                onClick={() => setActiveUnit(unit.id)}
                onMouseEnter={() => setHoveredUnit(unit.id)}
                onMouseLeave={() => setHoveredUnit(null)}
                style={{
                  ...styles.navLink,
                  backgroundColor:
                    activeUnit === unit.id
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : hoveredUnit === unit.id
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                  background:
                    activeUnit === unit.id
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : hoveredUnit === unit.id
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                  borderBottom:
                    activeUnit === unit.id
                      ? "3px solid #fff"
                      : "3px solid transparent",
                  transform:
                    hoveredUnit === unit.id
                      ? "translateY(-2px)"
                      : "translateY(0)",
                  boxShadow:
                    activeUnit === unit.id
                      ? "0 4px 12px rgba(102, 126, 234, 0.4)"
                      : "none",
                }}
              >
                <span style={styles.icon}>{unit.icon}</span>
                <div style={styles.textContainer}>
                  <div style={styles.label}>{unit.label}</div>
                  <div style={styles.subtitle}>{unit.subtitle}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    padding: "20px 25px",
    marginBottom: "30px",
    borderRadius: "12px",
    position: "sticky",
    top: "0",
    zIndex: 1000,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  },
  container: {
    maxWidth: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  logo: {
    color: "white",
    fontSize: "22px",
    margin: 0,
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  badge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "12px",
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: "white",
    border: "none",
    textDecoration: "none",
    fontSize: "14px",
    cursor: "pointer",
    padding: "12px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "inherit",
  },
  icon: {
    fontSize: "24px",
    flexShrink: 0,
  },
  textContainer: {
    textAlign: "left",
    flex: 1,
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "2px",
  },
  subtitle: {
    fontSize: "11px",
    opacity: 0.9,
    fontWeight: "400",
  },
};

export default Navbar;
