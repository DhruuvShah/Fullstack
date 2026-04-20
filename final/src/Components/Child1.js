import React from 'react' 
import Child2 from './Child2.js' 
function Child1(props) { 
  return ( 
    <div> 
        <h3>Child1 name:{props.name} City:{props.city}</h3> 
        <div> 
            <Child2 name="Rahul" city="Chicago"/> 
        </div> 
    </div> 
  ) 
} 
 
export default Child1;