function Faculty(props) {
  return (
    <div className="func-props">
      <h1>
        Name: {props.name} <br />
        Department: {props.department} <br />
        University: {props.university}
      </h1>
    </div>
  );
}
export default Faculty;
