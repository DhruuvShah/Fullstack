import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#e6b8ee",
        borderRadius: "12px",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#9c27b0", marginTop: 0 }}>Task 2: Digital Clock</h2>
      <div
        style={{
          fontSize: "56px",
          fontWeight: "bold",
          color: "#333",
          fontFamily: "monospace",
          margin: "20px 0",
          letterSpacing: "2px",
        }}
      >
        {formatTime(time)}
      </div>
      <div
        style={{
          fontSize: "18px",
          color: "#666",
          marginTop: "10px",
        }}
      >
        {formatDate(time)}
      </div>
    </div>
  );
};
export default DigitalClock;
