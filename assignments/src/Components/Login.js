import React, { useState } from "react";
import './Login.css'

const Login = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    division: "",
    course: "",
  });

  // State for errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rollNumber: "",
    division: "",
    course: "",
  });

  // State for success message
  const [showSuccess, setShowSuccess] = useState(false);

  // IT Courses list
  const courses = [
    { value: "web-development", label: "Web Development" },
    { value: "data-science", label: "Data Science" },
    { value: "cyber-security", label: "Cyber Security" },
    { value: "cloud-computing", label: "Cloud Computing" },
    { value: "mobile-app-development", label: "Mobile App Development" },
    { value: "artificial-intelligence", label: "Artificial Intelligence" },
    { value: "database-management", label: "Database Management" },
    { value: "network-administration", label: "Network Administration" },
    { value: "software-engineering", label: "Software Engineering" },
    { value: "devops", label: "DevOps" },
  ];

  // Divisions
  const divisions = ["A", "B", "C", "D", "E", "F"];

  // Validation functions
  const validateName = (name) => {
    if (name.trim().length < 2) {
      return "Please enter a valid name (at least 2 characters)";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateRollNumber = (rollNumber) => {
    if (rollNumber === "" || isNaN(rollNumber) || Number(rollNumber) <= 0) {
      return "Please enter a valid roll number (positive number)";
    }
    return "";
  };

  const validateDivision = (division) => {
    if (!division) {
      return "Please select a division";
    }
    return "";
  };

  const validateCourse = (course) => {
    if (!course) {
      return "Please select a course";
    }
    return "";
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle blur events for real-time validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "rollNumber":
        error = validateRollNumber(value);
        break;
      case "division":
        error = validateDivision(value);
        break;
      case "course":
        error = validateCourse(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const rollNumberError = validateRollNumber(formData.rollNumber);
    const divisionError = validateDivision(formData.division);
    const courseError = validateCourse(formData.course);

    setErrors({
      name: nameError,
      email: emailError,
      rollNumber: rollNumberError,
      division: divisionError,
      course: courseError,
    });

    // If all validations pass
    if (
      !nameError &&
      !emailError &&
      !rollNumberError &&
      !divisionError &&
      !courseError
    ) {
      // Log form data
      console.log("Student Registration Data:", formData);

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        rollNumber: "",
        division: "",
        course: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <div>
      <div>
        {showSuccess && (
          <div className="success-message">Registration Successful! 🎉</div>
        )}

        <form onSubmit={handleSubmit}>
           <h2>Student Registration</h2>
          {/* Name Field */}
          <div>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              className={errors.name ? "invalid" : ""}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={errors.email ? "invalid" : ""}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          {/* Roll Number Field */}
          <div>
            <label htmlFor="rollNumber">Roll Number *</label>
            <input
              type="number"
              id="rollNumber"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your roll number"
              className={errors.rollNumber ? "invalid" : ""}
            />
            {errors.rollNumber && (
              <div className="error">{errors.rollNumber}</div>
            )}
          </div>

          {/* Division Radio Buttons */}
          <div>
            <label>Division *</label>
            <div>
              {divisions.map((div) => (
                <div key={div}>
                  <input
                    type="radio"
                    id={`div${div}`}
                    name="division"
                    value={div}
                    checked={formData.division === div}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor={`div${div}`}>{div}</label>
                </div>
              ))}
            </div>
            {errors.division && <div className="error">{errors.division}</div>}
          </div>

          {/* IT Courses Dropdown */}
          <div>
            <label htmlFor="course">IT Course *</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.course ? "invalid" : ""}
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>
            {errors.course && <div className="error">{errors.course}</div>}
          </div>

          {/* Submit Button */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
