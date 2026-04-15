import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import "../styles/StudentRegistration.css";

function StudentRegistration() {
  const [name, setName] = useState("");
  const [rollNo, setRollno] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "rollNo":
        setRollno(value);
        break;
      case "course":
        setCourse(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ` + name);
    console.log(`Roll No: ` + rollNo);
    console.log(`Course: ` + course);
    console.log(`Address: ` + address);
    setSuccessMessage("Welcome Student! Registered successfully.");
    setName("");
    setRollno("");
    setCourse("");
    setAddress("");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="studentreg-container">
      <h3 className="studentreg-title">Student Registration</h3>

      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="studentreg-success"
          >
            <div className="studentreg-success-content">
              <CheckCircle2 size={18} />
              <span>{successMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="studentreg-card">
        <div className="studentreg-field">
          <label className="studentreg-label">Student Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="studentreg-input"
            placeholder="Enter name..."
          />
        </div>
        <div className="studentreg-divider" />

        <div className="studentreg-field">
          <label className="studentreg-label">Student Roll No</label>
          <input
            type="text"
            name="rollNo"
            value={rollNo}
            onChange={handleChange}
            className="studentreg-input"
            placeholder="Enter rollNo..."
          />
        </div>
        <div className="studentreg-divider" />

        <div className="studentreg-field">
          <label className="studentreg-label">Student Course</label>
          <input
            type="text"
            name="course"
            value={course}
            onChange={handleChange}
            className="studentreg-input"
            placeholder="Enter course..."
          />
        </div>
        <div className="studentreg-divider" />

        <div className="studentreg-field">
          <label className="studentreg-label">Student Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            className="studentreg-input"
            placeholder="Enter address..."
          />
        </div>
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="studentreg-submit"
      >
        Register
      </motion.button>
    </form>
  );
}

export { StudentRegistration };
