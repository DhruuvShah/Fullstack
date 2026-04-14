import { useState } from "react";
import "../styles/Navbar.css";
function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "About", "Courses", "Contact"];
  return <div className="navbar-container">
      <nav className="navbar-nav">
        <div className="navbar-brand">Brand</div>
        <ul className="navbar-list">
          {links.map((link) => <li
    key={link}
    onClick={() => setActive(link)}
    className={`navbar-item ${active === link ? "navbar-item-active" : "navbar-item-inactive"} ${link === "About" || link === "Courses" ? "navbar-item-hidden-sm" : ""}`}
  >
              {link}
            </li>)}
        </ul>
      </nav>
      <div className="navbar-indicator">
        Active Route: <span className="navbar-indicator-active">{active}</span>
      </div>
    </div>;
}
export {
  Navbar
};
