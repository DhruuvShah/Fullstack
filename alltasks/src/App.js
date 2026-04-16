/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CounterApp from "./components/CounterApp";
import Modern from "./components/Modern";
import UseEffectEx from "./components/UseEffectEx";
import ApiWork from "./components/ApiWork";
import Reducer from "./components/Reducer";

// New Tasks (Unit 1 & 2)
import StudentDetails from "./components/StudentDetails";
import NestedLevels from "./components/NestedLevels";
import WelcomeProps from "./components/WelcomeProps";
import DigitalClock from "./components/DigitalClock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import StudentFormValidation from "./components/StudentFormValidation";

// Missing Tasks from PDF
import HelloWorld from "./components/HelloWorld";
import BasicComponents from "./components/BasicComponents";
import InlineStyle from "./components/InlineStyle";
import FacultyProgram from "./components/FacultyProgram";
import NestedProps from "./components/NestedProps";
import SurnameProgram from "./components/SurnameProgram";
import UniversityProgram from "./components/UniversityProgram";
import AdditionContext from "./components/AdditionContext";

import "./styles/App.css";
import "./styles/NewTasks.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <nav className="sidebar" style={{ overflowY: 'auto' }}>
          <h2>React Showcase</h2>
          
          <div className="tree-folder">PDF Unit 1</div>
          <ul>
            <li><Link to="/hello">Hello World</Link></li>
            <li><Link to="/basic">Basic Components</Link></li>
            <li><Link to="/inline">Inline Styles</Link></li>
            <li><Link to="/nested-levels">Nested Elements</Link></li>
            <li><Link to="/welcome-props">Greet (Props)</Link></li>
            <li><Link to="/faculty">Faculty (Props)</Link></li>
            <li><Link to="/nested-props">Nested Props</Link></li>
            <li><Link to="/student-details">Student Details (JSX)</Link></li>
          </ul>

          <div className="tree-folder">PDF Unit 2</div>
          <ul>
            <li><Link to="/">Counter (useState)</Link></li>
            <li><Link to="/calculator">Calculator (useState)</Link></li>
            <li><Link to="/title">Doc Title (useEffect)</Link></li>
            <li><Link to="/digital-clock">Digital Clock (HH:MM:SS)</Link></li>
            <li><Link to="/api">API Fetch (useEffect)</Link></li>
            <li><Link to="/surname">Surname (useContext)</Link></li>
            <li><Link to="/university">University (useContext)</Link></li>
            <li><Link to="/addition">Addition (useContext)</Link></li>
            <li><Link to="/theme-switcher">Theme Switcher</Link></li>
            <li><Link to="/student-validation">Form Validation</Link></li>
            <li><Link to="/reducer">Age (useReducer)</Link></li>
          </ul>
        </nav>
        <main className="content">
          <Routes>
            {/* Unit 1 Routes */}
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/basic" element={<BasicComponents />} />
            <Route path="/inline" element={<InlineStyle />} />
            <Route path="/faculty" element={<FacultyProgram />} />
            <Route path="/nested-props" element={<NestedProps />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/nested-levels" element={<NestedLevels />} />
            <Route path="/welcome-props" element={<WelcomeProps />} />

            {/* Unit 2 Routes */}
            <Route path="/" element={<CounterApp />} />
            <Route path="/calculator" element={<Modern />} />
            <Route path="/title" element={<UseEffectEx />} />
            <Route path="/api" element={<ApiWork />} />
            <Route path="/surname" element={<SurnameProgram />} />
            <Route path="/university" element={<UniversityProgram />} />
            <Route path="/addition" element={<AdditionContext />} />
            <Route path="/reducer" element={<Reducer />} />
            <Route path="/digital-clock" element={<DigitalClock />} />
            <Route path="/theme-switcher" element={<ThemeSwitcher />} />
            <Route path="/student-validation" element={<StudentFormValidation />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
