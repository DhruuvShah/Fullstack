import { Outlet, NavLink, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import {
  Home,
  Wrench,
  Database,
  Sun,
  Moon,
  Command,
  Server,
} from "lucide-react";
import "../styles/Layout.css";
function Layout() {
  const { theme, toggle } = useTheme();
  const navItems = [
    { path: "/", label: "Basics", icon: Home },
    { path: "/tools", label: "Tools", icon: Wrench },
    { path: "/data", label: "Data & State", icon: Database },
    { path: "/backend", label: "Backend", icon: Server },
  ];
  return (
    <div className="layout-container">
      {/* Animated Mesh Background */}
      <div className="layout-bg">
        <div
          className="layout-bg-blob-1"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="layout-bg-blob-2"
          style={{ animationDuration: "14s" }}
        />
        <div
          className="layout-bg-blob-3"
          style={{ animationDuration: "12s" }}
        />
      </div>

      {/* Floating Navbar */}
      <nav className="layout-nav-wrapper">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="layout-nav"
        >
          <Link to="/" className="layout-nav-brand">
            <Command size={18} strokeWidth={1.5} />
            <span className="tracking-tight">React Lab</span>
          </Link>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `layout-nav-item ${isActive ? "layout-nav-item-active" : "layout-nav-item-inactive"}`
              }
            >
              <item.icon size={18} strokeWidth={1.5} />
              <span className="hidden sm:inline">{item.label}</span>
            </NavLink>
          ))}

          <div className="layout-nav-divider" />

          <button
            onClick={toggle}
            className="layout-nav-theme-btn"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon size={20} strokeWidth={1.5} />
            ) : (
              <Sun size={20} strokeWidth={1.5} />
            )}
          </button>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="layout-main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="layout-footer">
        <p>© 2026 ReactJS | All Rights Reserved</p>
      </footer>
    </div>
  );
}
export { Layout };
