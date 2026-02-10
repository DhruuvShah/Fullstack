import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const items = [
    { name: "Theme", path: "/theme" },
    { name: "Counter", path: "/counter" },
    { name: "Clock", path: "/clock" },
    { name: "Calculator", path: "/calculator" },
    { name: "Login", path: "/login" },
    { name: "Reducer", path: "/reducer" },
  ];

  return (
    <div className="nav-container">
      <div className="nav-wrap">
        <div className="bubble active"></div>
        <div className="bubble hover"></div>

        <nav className="nav">
          {items.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
