import "./Nested.css";
function Nested() {
  return (
    <div className="list">
      <h1>THE NESTED ELEMENT</h1>
      <ol>
        <h3>IT TOOLS</h3>
        <li>COMPUTER</li>
        <li>LAPTOP</li>
        <li>KEYBOARD</li>
        <li>MOUSE</li>
      </ol>

      <ul>
        <h3>OPERATING SYSTEM</h3>
        <li>WINDOWS</li>
        <li>MAC OS</li>
        <li>LINUX</li>
        <li>ANDROID</li>
      </ul>
    </div>
  );
}
export default Nested;
