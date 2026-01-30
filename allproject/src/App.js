// ===================================
// App.js - Main Application Component
// ===================================

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Hello from "./Components/Hello";
import Counter from "./Components/Counter";
import Calculator from "./Components/Calculator";
import Nested from "./Components/Nested";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="App-content">
        <Header />
        <Hello />

        <section className="container" style={{ padding: "60px 20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "40px",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <Counter />
            <Calculator />
          </div>
        </section>

        <Nested />
      </main>

      <Footer />
    </div>
  );
}

export default App;
