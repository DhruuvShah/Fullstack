import reactlogo from "../assets/logo192.png";
function Header() {
  const mystyle = {
    color: "blue",
    backgroundColor: "lightyellow",
    padding: "8px",
    borderRadius: "6px",
    fontFamily: "Arial",
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={mystyle} title="React Inline Style Example">
        WORK TO USE INLINE STYLE
      </h1>
      <header className="header">
        <div className="main">
          <img src={reactlogo} alt="Header IMG" width="200" />
        </div>
        <h1>Welcome to React JS</h1>
      </header>
    </div>
  );
}
export default Header;
