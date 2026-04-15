import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import "../styles/ReactForm.css";

function ReactForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email :` + email, `Password :` + password);
    setSuccessMessage("Welcome user! Logged in successfully.");
    setEmail("");
    setPassword("");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="reactform-container">
      <h3 className="reactform-title">Login Form</h3>

      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="reactform-success"
          >
            <div className="reactform-success-content">
              <CheckCircle2 size={18} />
              <span>{successMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="reactform-card">
        <div className="reactform-field">
          <label className="reactform-label">Email Address</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            className="reactform-input"
            placeholder="name@example.com"
          />
        </div>
        <div className="reactform-divider" />
        <div className="reactform-field-bottom">
          <label className="reactform-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="reactform-input"
            placeholder="••••••••"
          />
        </div>
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="reactform-submit"
      >
        Submit
      </motion.button>
    </form>
  );
}

export { ReactForm };
