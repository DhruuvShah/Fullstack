import "../styles/Faculty.css";
function Faculty(props) {
  return (
    <div className="faculty-container">
      <h1 className="faculty-name">Name: {props.name}</h1>
      <p className="faculty-detail">Department: {props.Department}</p>
      <p className="faculty-detail">University: {props.university}</p>
    </div>
  );
}
export { Faculty };
