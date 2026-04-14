import "../styles/Greet.css";
function Greet(props) {
  return <div className="greet-container">
      <h1 className="greet-title">Welcome <span className="greet-name">{props.name}</span> to {props.city}</h1>
    </div>;
}
export {
  Greet
};
