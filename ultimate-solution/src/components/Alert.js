import { useEffect, useState } from "react";

/**
 * Inline alert banner matching the design in the screenshot.
 * Props:
 *   message  – string to display
 *   type     – "success" (default) | "error"
 *   duration – auto-dismiss ms (default 3000, 0 = never)
 */
function Alert({ message, type = "success", duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    if (duration > 0) {
      const t = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(t);
    }
  }, [message, duration]);

  if (!visible || !message) return null;

  const isError = type === "error";
  const green = "#22c55e";
  const red = "#ef4444";
  const color = isError ? red : green;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: isError ? "rgba(239,68,68,0.12)" : "rgba(34,197,94,0.13)",
        border: `1.5px solid ${color}`,
        borderRadius: "10px",
        padding: "10px 16px",
        margin: "4px 0",
      }}
    >
      {/* Circle with icon */}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          border: `2px solid ${color}`,
          flexShrink: 0,
        }}
      >
        {isError ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 2L10 10M10 2L2 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.5L5 9.5L10 3.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>

      <span
        style={{
          color: color,
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: 1.4,
        }}
      >
        {message}
      </span>
    </div>
  );
}

export { Alert };
