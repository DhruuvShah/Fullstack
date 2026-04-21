import React from "react";
import Hello from "./Components/Hello";
import Header from "./Components/Header";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Inline from "./Components/Inline";
import Nested from "./Components/Nested";
import Greet from "./Components/Greet";
import Faculty from "./Components/Faculty";
import Parent from "./Components/Parent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Counter from "./Components/Counter";
import Calculator from "./Components/Simple-Calculator";
import ModernCalculator from "./Components/Modern-Calaculator";
import UseEffect from "./Components/UseEffect";
import Clock from "./Components/Clock";
import Api from "./Components/Api";
import Text1 from "./Components/Text1";
import Text2 from "./Components/Text2";
import AdditionContext from "./Components/AdditionContext";
import ThemeToggle from "./Components/ThemeToggle";
import ReactForm from "./Components/ReactForm";
import StudentRegistration from "./Components/StudentForm";
import Reducer from "./Components/Reducer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route
              path="/Unit-1"
              element={
                <>
                  <Hello />
                  <Header />
                  <Inline />
                  <Nested />
                  <Greet name="Dhruv" city="Indore" />
                  <Faculty
                    name="Dr. Smith"
                    department="Computer Science"
                    university="Harvard"
                  />
                  <Parent />
                  <Footer />
                </>
              }
            />

            <Route
              path="/Unit-2"
              element={
                <>
                  <Counter />
                  <Calculator />
                  <ModernCalculator />
                  <UseEffect />
                  <Clock />
                  <Api />
                  <Text1 />
                  <Text2 />
                  <AdditionContext />
                  <ThemeToggle />
                  <ReactForm />
                  <StudentRegistration />
                  <Reducer />
                </>
              }
            />
            <Route path="/Unit-3" element={<Hello />} />
            <Route path="/Unit-4" element={<Hello />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
