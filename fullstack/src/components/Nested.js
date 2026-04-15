import "../styles/Nested.css";
function Nested() {
  return (
    <div className="nested-container">
      <div>
        <h3 className="nested-title-blue">IT TOOLS</h3>
        <ol className="nested-list-decimal">
          <li>COMPUTER</li>
          <li>LAPTOP</li>
          <li>KEYBOARD</li>
          <li>MOUSE</li>
        </ol>
      </div>
      <div>
        <h3 className="nested-title-purple">OPERATING SYSTEM</h3>
        <ul className="nested-list-disc">
          <li>WINDOWS</li>
          <li>MAC OS</li>
          <li>LINUX</li>
          <li>ANDROID</li>
        </ul>
      </div>
    </div>
  );
}
export { Nested };
