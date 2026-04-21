import { useState } from "react";

function ReactForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(`Email:` + email, `Password:` + password);
    alert("Welcome User");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form">
      <form onSubmit={handlesubmit}>
        <label>Email Address</label>
        <input
          type="text"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">🔐 Sign In</button>
      </form>
    </div>
  );
}
export default ReactForm;
