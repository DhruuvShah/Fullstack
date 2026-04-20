import Child1 from './Child1.js' 
function Child(props) { 
  return ( 
    <div> 
        <h3>Child name:{props.name} City:{props.city}</h3> 
        <div> 
            <Child1 name="Anjali" city="Los Angeles"/> 
        </div> 
    </div> 
  ) 
} 
export default Child;