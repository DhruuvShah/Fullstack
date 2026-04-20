function Greet(props){
    return(
        <div className="props">
            <h1>Hello, {props.name}! Welcome to {props.city}</h1>
        </div>
    )
}
export default Greet;