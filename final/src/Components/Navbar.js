import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        ⚛ React
      </NavLink>
      <ul className="nav-links">
        <li></li>
        <li>
          <NavLink
            to="/Unit-1"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Unit — 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Unit-2"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Unit — 2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
