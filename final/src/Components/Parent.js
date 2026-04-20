import Child from "./Child";
function Parent(props) {
  return (
    <div className="nested-props">
      <h3>
        Parent name: {props.name} City: {props.city}
      </h3>
      <div>
        <Child name="Kunj" city="Auckland" />
      </div>
    </div>
  );
}
export default Parent;
