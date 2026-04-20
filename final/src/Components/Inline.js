function Inline() {
  const style = {
    color: "white",
    fontSize: "18px",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "3rem",
    backgroundColor: "#f17704",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: "20px",
    width: "50%",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h2>This is an inline component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
        sapien eget nunc efficitur bibendum. Sed at ligula a enim efficitur
        tincidunt.
      </p>
    </div>
  );
}

export default Inline;
