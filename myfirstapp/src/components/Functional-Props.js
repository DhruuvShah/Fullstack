const Props = ({ name, role, color }) => {
  return (
    <div
      style={{
        padding: "15px",
        margin: "10px 0",
        backgroundColor: color || "#e3f2fd",
        borderRadius: "8px",
        borderLeft: "4px solid #2196f3",
      }}
    >
      <h3 style={{ margin: "0 0 5px 0", color: "#1976d2" }}>Hello, {name}!</h3>
      <p style={{ margin: "0", color: "#555" }}>Role: {role}</p>
    </div>
  );
};

export default Props;
