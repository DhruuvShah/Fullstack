import "../styles/InlineStyleDemo.css";
function InlineStyleDemo() {
  const mystyle = {
    color: "var(--color-blue-500)",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: "16px",
    borderRadius: "16px",
    fontFamily: "inherit",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.1)"
  };
  return <div className="inlinestyle-container">
      <h1 style={mystyle} title="React Inline Style Example">WORK TO USE INLINE STYLE</h1>
    </div>;
}
export {
  InlineStyleDemo
};
