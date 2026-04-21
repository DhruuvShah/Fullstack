import { useState } from "react";

function StudentRegistration() {
  const [name, setName] = useState("");
  const [rollNo, setRollno] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "rollNO":
        setRollno(value);
        break;

      case "course":
        setCourse(value);
        break;

      case "address":
        setAddress(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name:` + name);
    console.log(`Roll No:` + rollNo);
    console.log(`Course:` + course);
    console.log(`Address:` + address);
    alert("Welcome Student");

    setName("");
    setRollno("");
    setCourse("");
    setAddress("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={name}
          onChange={handleChange}
        />
        <label>Roll Number</label>
        <input
          type="text"
          name="rollNo"
          placeholder="e.g. BCA2401"
          value={rollNo}
          onChange={handleChange}
        />
        <label>Course</label>
        <input
          type="text"
          name="course"
          placeholder="e.g. BCA"
          value={course}
          onChange={handleChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="City, State"
          value={address}
          onChange={handleChange}
        />
        <button type="submit">🎓 Register</button>
      </form>
    </div>
  );
}
export default StudentRegistration;
