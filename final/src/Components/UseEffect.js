import { useEffect, useState } from "react";

function UseEffect() {
  const [name, setName] = useState("Dhruv");

  useEffect(() => {
    document.title = `Hello, ${name}!`;
  }, [name]);

  return (
    <div className="effect-container">
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseEffect;
