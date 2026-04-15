import "../styles/NestedProps.css";
function Child4({ name, city }) {
  return (
    <div className="nestedprops-child">
      Child4 name: {name} | City: {city}
    </div>
  );
}
function Child3({ name, city }) {
  return (
    <div className="nestedprops-child-border">
      Child3 name: {name} | City: {city} <Child4 name="Sonia" city="Houston" />
    </div>
  );
}
function Child2({ name, city }) {
  return (
    <div className="nestedprops-child-border">
      Child2 name: {name} | City: {city} <Child3 name="Rahul" city="Chicago" />
    </div>
  );
}
function Child1({ name, city }) {
  return (
    <div className="nestedprops-child-border">
      Child1 name: {name} | City: {city}{" "}
      <Child2 name="Anjali" city="Los Angeles" />
    </div>
  );
}
function Parent({ name, city }) {
  return (
    <div className="nestedprops-parent">
      Parent name: {name} | City: {city} <Child1 name="Priya" city="New York" />
    </div>
  );
}
export { Child1, Child2, Child3, Child4, Parent };
