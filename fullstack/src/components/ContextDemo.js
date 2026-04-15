import { createContext, useContext } from "react";
import "../styles/ContextDemo.css";
const SurName = createContext("Prajapati");
const Tradmark = createContext("JG UNIVERSITY AHMEDABAD GUJARAT");
const NumberContext = createContext({ num1: 10, num2: 20, sum: 30 });
function ContextDemo() {
  const surname = useContext(SurName);
  const tradmark = useContext(Tradmark);
  const { num1, num2, sum } = useContext(NumberContext);
  return (
    <div className="contextdemo-container">
      <div className="contextdemo-card">
        <h3 className="contextdemo-title-blue">Surname Context</h3>
        <p className="contextdemo-text">Krish {surname}</p>
        <p className="contextdemo-text">Madhav {surname}</p>
      </div>
      <div className="contextdemo-card">
        <h3 className="contextdemo-title-green">University Context</h3>
        <p className="contextdemo-text">IT DEPARTMENT IN {tradmark}</p>
        <p className="contextdemo-text">BTECH DEPARTMENT IN {tradmark}</p>
      </div>
      <div className="contextdemo-card-flex">
        <div>
          <h3 className="contextdemo-title-purple">Addition Context</h3>
          <p className="contextdemo-text-muted">
            Num 1: {num1} | Num 2: {num2}
          </p>
        </div>
        <div className="contextdemo-sum">Sum: {sum}</div>
      </div>
    </div>
  );
}
export { ContextDemo, NumberContext, SurName, Tradmark };
