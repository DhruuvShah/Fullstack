import React, { useState } from 'react';

export default function StudentFormValidation() {
  // 4) design student registration form and apply basic validation on form submit 
  // print all the details on console.
  const [formData, setFormData] = useState({ name: '', rollno: '', course: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.rollno.trim()) newErrors.rollno = "Roll No is required";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("=== Student Registration Details ===");
      console.log("Name:", formData.name);
      console.log("Roll No:", formData.rollno);
      console.log("Course:", formData.course);
      console.log("Email:", formData.email);
      console.log("====================================");
      alert("Registration successful! Details printed to console.");
      setFormData({ name: '', rollno: '', course: '', email: '' });
    }
  };

  return (
    <div className="card" style={{ width: '450px', margin: '0 auto' }}>
      <div className="card-header">Student Registration (With Validation)</div>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', marginBottom: '6px' }}>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} 
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: `1px solid ${errors.name ? '#FF3B30' : 'var(--border)'}` }} />
          {errors.name && <div style={{ color: '#FF3B30', fontSize: '11px', marginTop: '4px' }}>{errors.name}</div>}
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', marginBottom: '6px' }}>Roll Number</label>
          <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} 
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: `1px solid ${errors.rollno ? '#FF3B30' : 'var(--border)'}` }} />
          {errors.rollno && <div style={{ color: '#FF3B30', fontSize: '11px', marginTop: '4px' }}>{errors.rollno}</div>}
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', marginBottom: '6px' }}>Course</label>
          <input type="text" name="course" value={formData.course} onChange={handleChange} 
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: `1px solid ${errors.course ? '#FF3B30' : 'var(--border)'}` }} />
          {errors.course && <div style={{ color: '#FF3B30', fontSize: '11px', marginTop: '4px' }}>{errors.course}</div>}
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', marginBottom: '6px' }}>Email Address</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} 
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: `1px solid ${errors.email ? '#FF3B30' : 'var(--border)'}` }} />
          {errors.email && <div style={{ color: '#FF3B30', fontSize: '11px', marginTop: '4px' }}>{errors.email}</div>}
        </div>

        <button type="submit" className="btn" style={{ marginTop: '8px', padding: '12px' }}>Register Student</button>
      </form>
    </div>
  );
}
