// ===================================
// Nested.js - List/Grid Component
// ===================================

import React from "react";
import "../styles/Nested.css";

const Nested = () => {
  const locations = [
    { city: "New York", name: "Alice", icon: "🗽" },
    { city: "Los Angeles", name: "Bob", icon: "🌴" },
  ];

  const people = [
    {
      name: "Dr. Smith",
      department: "Computer Science",
      university: "MIT",
      icon: "👨‍🏫",
      specialization: "Artificial Intelligence",
    },
    {
      name: "Dr. Johnson",
      department: "Mathematics",
      university: "Stanford",
      icon: "👩‍🏫",
      specialization: "Applied Mathematics",
    },
  ];

  const cities = [
    { name: "San Francisco", country: "USA", icon: "🌉", population: "873K" },
    { name: "Los Angeles", country: "USA", icon: "🌟", population: "4M" },
    { name: "Chicago", country: "USA", icon: "🏙️", population: "2.7M" },
    { name: "Seattle", country: "USA", icon: "🌲", population: "753K" },
  ];

  const technologies = [
    { name: "React", category: "Frontend", level: "Advanced", icon: "⚛️" },
    { name: "Node.js", category: "Backend", level: "Intermediate", icon: "🟢" },
    { name: "Python", category: "Backend", level: "Advanced", icon: "🐍" },
    {
      name: "TypeScript",
      category: "Language",
      level: "Intermediate",
      icon: "📘",
    },
  ];

  return (
    <div className="list-container">
      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            background:
              "linear-gradient(135deg, var(--accent-blue), var(--accent-sage))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Welcome Messages
        </h2>
        <div className="list">
          {locations.map((location, index) => (
            <div key={index} className={`list-item feature-${(index % 4) + 1}`}>
              <div className="list-item-header">
                <div className="list-item-icon">{location.icon}</div>
                <div className="list-item-title">
                  <h3>Welcome {location.name}</h3>
                  <div className="list-item-subtitle">Location Update</div>
                </div>
              </div>
              <div className="list-item-content">
                <p>
                  Welcome to {location.city}! Explore the amazing opportunities
                  and vibrant culture this city has to offer.
                </p>
              </div>
              <div className="list-item-footer">
                <div className="list-item-meta">
                  <span>📍 {location.city}</span>
                </div>
                <button className="list-item-action">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            background:
              "linear-gradient(135deg, var(--accent-sage), var(--accent-coral))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Faculty Members
        </h2>
        <div className="list">
          {people.map((person, index) => (
            <div key={index} className={`list-item feature-${(index % 4) + 1}`}>
              <div className="list-item-header">
                <div className="list-item-icon">{person.icon}</div>
                <div className="list-item-title">
                  <h3>{person.name}</h3>
                  <div className="list-item-subtitle">{person.university}</div>
                </div>
              </div>
              <div className="list-item-content">
                <p>
                  <strong>Department:</strong> {person.department}
                </p>
                <p>
                  <strong>Specialization:</strong> {person.specialization}
                </p>
              </div>
              <div className="list-item-footer">
                <div className="list-item-meta">
                  <span>🎓 Professor</span>
                </div>
                <button className="list-item-action">Contact</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            background:
              "linear-gradient(135deg, var(--accent-coral), var(--accent-lavender))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Major Cities
        </h2>
        <div className="list">
          {cities.map((city, index) => (
            <div key={index} className={`list-item feature-${(index % 4) + 1}`}>
              <span className="list-item-badge">Popular</span>
              <div className="list-item-header">
                <div className="list-item-icon">{city.icon}</div>
                <div className="list-item-title">
                  <h3>{city.name}</h3>
                  <div className="list-item-subtitle">{city.country}</div>
                </div>
              </div>
              <div className="list-item-content">
                <p>Population: {city.population}</p>
              </div>
              <div className="list-item-footer">
                <div className="list-item-meta">
                  <span>🌎 {city.country}</span>
                </div>
                <button className="list-item-action">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            background:
              "linear-gradient(135deg, var(--accent-lavender), var(--accent-blue))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Tech Stack
        </h2>
        <div className="list">
          {technologies.map((tech, index) => (
            <div key={index} className={`list-item feature-${(index % 4) + 1}`}>
              <span className="list-item-badge">{tech.level}</span>
              <div className="list-item-header">
                <div className="list-item-icon">{tech.icon}</div>
                <div className="list-item-title">
                  <h3>{tech.name}</h3>
                  <div className="list-item-subtitle">{tech.category}</div>
                </div>
              </div>
              <div className="list-item-content">
                <p>Proficiency Level: {tech.level}</p>
              </div>
              <div className="list-item-footer">
                <div className="list-item-meta">
                  <span>💻 {tech.category}</span>
                </div>
                <button className="list-item-action">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Nested;
