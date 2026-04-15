import { useState, useEffect } from "react";
import "../styles/DigitalClock.css";
function DigitalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1e3);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="digitalclock-container">
      <h1 className="digitalclock-time">{time || "Loading..."}</h1>
    </div>
  );
}
export { DigitalClock };
