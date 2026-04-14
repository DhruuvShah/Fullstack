
import '../styles/Greet.css';

export function Greet(props: { name: string, city: string }) {
  return (
    <div className="greet-container">
      <h1 className="greet-title">Welcome <span className="greet-name">{props.name}</span> to {props.city}</h1>
    </div>
  );
}
