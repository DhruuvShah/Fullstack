import "./Nav.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const menuItems = [
    { label: "Theme", path: "/theme" },
    { label: "Counter", path: "/counter" },
    { label: "Calculator", path: "/calculator" },
    { label: "Clock", path: "/clock" },
    { label: "Reducer", path: "/reducer" },
    { label: "Login", path: "/login" }
  ];

  return (
    <div className="nav-wrap">
      <div className="bubble active"></div>
      <div className="bubble hover"></div>

      <nav className="nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;