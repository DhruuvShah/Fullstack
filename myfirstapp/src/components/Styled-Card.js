const StyledCard = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div
      className="styled-card"
      id="card-1"
      style={{
        padding: "20px",
        backgroundColor: "#f3e5f5",
        borderRadius: "8px",
        margin: "15px 0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#6a1b9a", marginTop: 0, textAlign: "center" }}>
        Task 3: Inline Styling & Attributes
      </h2>

      <img
        src="https://images2.fanpop.com/images/photos/3000000/Ippo-Makunouchi-hajime-no-ippo-3053648-576-485.jpg"
        alt="Sample placeholder"
        title="Placeholder Image"
        style={{
          borderRadius: "50%",
          border: "3px solid #9c27b0",
          display: "block",
          margin: "10px 0",
          height: "150px",
          width: "150px",
          objectFit: "cover",
        }}
      />

      <p style={{ color: "#555", lineHeight: "1.6" }}>
        This element demonstrates inline styling with the style prop.
      </p>

      <button
        onClick={handleClick}
        type="button"
        aria-label="Click me button"
        style={{
          backgroundColor: "#9c27b0",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default StyledCard;
