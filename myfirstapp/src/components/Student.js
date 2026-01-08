import React from 'react'

function Student(props) {
  return (
    <ul>
        <h3>Student Details</h3>
        <li>{props.name}</li>
        <li>{props.rollno}</li>
        <li>{props.div}</li>
        <li>{props.course}</li>
        <li>{props.college}</li>
        <li>{props.age}</li>
    </ul>
  )
}

export default Student