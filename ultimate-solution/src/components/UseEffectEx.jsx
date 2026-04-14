import { useState, useEffect } from "react";
import "../styles/UseEffectEx.css";
function UseEffectEx() {
  const [name, setName] = useState("Ayushi");
  useEffect(() => {
    document.title = `Welcome ${name}`;
    return () => {
      document.title = "React Lab";
    };
  }, [name]);
  return <div className="useeffect-container">
      <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="useeffect-input"
    placeholder="Enter name..."
  />
      <p className="useeffect-note">Note: As you type username it reflects on the browser tab title.</p>
    </div>;
}
export {
  UseEffectEx
};
