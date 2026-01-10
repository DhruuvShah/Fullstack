import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleReset = () => {
    setFormData({ username: "", password: "" });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#bfeec1",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ color: "#4caf50", marginTop: 0, textAlign: "center" }}>
        Task 5: Login Form
      </h2>

      {!submitted ? (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.username
                  ? "2px solid #f44336"
                  : "2px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="Enter username"
            />
            {errors.username && (
              <span
                style={{
                  color: "#f44336",
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                {errors.username}
              </span>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                border: errors.password
                  ? "2px solid #f44336"
                  : "2px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              placeholder="Enter password"
            />
            {errors.password && (
              <span
                style={{
                  color: "#f44336",
                  fontSize: "14px",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                {errors.password}
              </span>
            )}
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              backgroundColor: "#4caf50",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "30px",
            backgroundColor: "#e8f5e9",
            borderRadius: "8px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <h3 style={{ color: "#2e7d32", marginTop: 0 }}>
            ✅ Login Successful!
          </h3>
          <p style={{ color: "#555", margin: "15px 0" }}>
            Welcome, <strong>{formData.username}</strong>!
          </p>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: "#2196f3",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
export default LoginForm;
