import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import "../styles/StudentRegistration.css";
function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    course: "",
    address: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ` + formData.name);
    console.log(`Roll No: ` + formData.rollNo);
    console.log(`Course: ` + formData.course);
    console.log(`Address: ` + formData.address);
    setSuccessMessage("Welcome Student! Registered successfully.");
    setFormData({ name: "", rollNo: "", course: "", address: "" });
    setTimeout(() => setSuccessMessage(""), 3e3);
  };
  return <form onSubmit={handleSubmit} className="studentreg-container">
      <h3 className="studentreg-title">Student Registration</h3>

      <AnimatePresence>
        {successMessage && <motion.div
    initial={{ opacity: 0, y: -10, height: 0 }}
    animate={{ opacity: 1, y: 0, height: "auto" }}
    exit={{ opacity: 0, y: -10, height: 0 }}
    className="studentreg-success"
  >
            <div className="studentreg-success-content">
              <CheckCircle2 size={18} />
              <span>{successMessage}</span>
            </div>
          </motion.div>}
      </AnimatePresence>

      <div className="studentreg-card">
        {Object.keys(formData).map((field, i) => <div key={field}>
            <div className="studentreg-field">
              <label className="studentreg-label">Student {field.replace(/([A-Z])/g, " $1").trim()}</label>
              <input
    type="text"
    name={field}
    value={formData[field]}
    onChange={handleChange}
    className="studentreg-input"
    placeholder={`Enter ${field}...`}
  />
            </div>
            {i < 3 && <div className="studentreg-divider" />}
          </div>)}
      </div>
      <motion.button whileTap={{ scale: 0.97 }} type="submit" className="studentreg-submit">Register</motion.button>
    </form>;
}
export {
  StudentRegistration
};
