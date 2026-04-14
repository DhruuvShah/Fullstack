
import '../styles/NestedProps.css';

export function Child4({ name, city }: { name: string, city: string }) {
  return <div className="nestedprops-child">Child4 name: {name} | City: {city}</div>;
}
export function Child3({ name, city }: { name: string, city: string }) {
  return <div className="nestedprops-child-border">Child3 name: {name} | City: {city} <Child4 name="Sonia" city="Houston" /></div>;
}
export function Child2({ name, city }: { name: string, city: string }) {
  return <div className="nestedprops-child-border">Child2 name: {name} | City: {city} <Child3 name="Rahul" city="Chicago" /></div>;
}
export function Child1({ name, city }: { name: string, city: string }) {
  return <div className="nestedprops-child-border">Child1 name: {name} | City: {city} <Child2 name="Anjali" city="Los Angeles" /></div>;
}
export function Parent({ name, city }: { name: string, city: string }) {
  return <div className="nestedprops-parent">Parent name: {name} | City: {city} <Child1 name="Priya" city="New York" /></div>;
}
