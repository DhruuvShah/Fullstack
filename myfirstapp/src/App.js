import React, { useState, createContext } from "react";
import NestedComponent from "./components/Nested";
import StyledCard from "./components/Styled-Card";
import Props from "./components/Functional-Props";
import FolderStructure from "./components/Folder-Structure";
import Greet from "./components/Greet";
import Counter from "./components/Counter";
import DigitalClock from "./components/Digital-Clock";
import ReducerDemo from "./components/Reducer";
import ThemeSwitcher from "./components/Theme-Switcher";
import LoginForm from "./components/Login-Form";
import ReplTask from "./components/Repl-Task";            
import CallbackTask from "./components/Callback-Task"; 
import SystemInfoTask from "./components/System-Info-Task"; 
import FileOperationsTask from "./components/File-Operations-Task";  
import HttpServerTask from "./components/Http-Server-Task"; 
import UrlQueryTask from "./components/Url-Query-Task";
import CustomModuleTask from "./components/Custom-Module-Task"; 
import NodemonTask from "./components/Nodemon-Task";                                                
import Navbar from './components/Navbar';

// Create ThemeContext here - OUTSIDE the App component
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [activeUnit, setActiveUnit] = useState("unit1");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "20px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          {/* Add Navbar at the top */}
          <Navbar activeUnit={activeUnit} setActiveUnit={setActiveUnit} />

          {/* Unit 1 Section */}
          {activeUnit === "unit1" && (
            <div>
              <h1 style={{ color: "#333", textAlign: "center" }}>
                Unit - 1 ReactJS Basics
              </h1>
              {/* Task 1: Hello World */}
              <Greet />

              {/* Task 2: Folder Structure */}
              <FolderStructure />

              {/* Task 3: Inline Styling */}
              <StyledCard />

              {/* Task 4: Comments and Nested Elements */}
              <NestedComponent />

              {/* Task 5: Props Display */}
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "#e0f2f1",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <h2 style={{ color: "#00695c", marginTop: 0, textAlign: "center" }}>
                  Task 5: Functional Components with Props
                </h2>
                <Props name="John Doe" role="Frontend Developer" color="#b2dfdb" />
                <Props name="Jane Smith" role="UI/UX Designer" color="#80cbc4" />
                <Props
                  name="Mike Johnson"
                  role="Full Stack Developer"
                  color="#4db6ac"
                />
              </div>
            </div>
          )}

          {/* Unit 2 Section */}
          {activeUnit === "unit2" && (
            <div>
              <h1 style={{ color: "#333", textAlign: "center" }}>
                Unit - 2 ReactJS Advance
              </h1>

              {/* Task 1: Counter App */}
              <Counter />

              {/* Task 2: Digital Clock */}
              <DigitalClock />

              {/* Task 3: Theme Switcher */}
              <ThemeSwitcher />

              {/* Task 4: useReducer Demo */}
              <ReducerDemo />

              {/* Task 5: Login Form */}
              <LoginForm />
            </div>
          )}

          {/* Unit 3 Section */}
          {activeUnit === "unit3" && (
            <div>
              <h1 style={{ color: "#333", textAlign: "center" }}>
                Unit - 3: Node.js Basic
              </h1>
              {/* Task 1: REPL Task */}
              <ReplTask />

              {/* Task 2: Callbacks Task */}
              <CallbackTask />

              {/* Task 3: System Info CLI Task */}
              <SystemInfoTask />

              {/* Task 4: File Operations Task */}
              <FileOperationsTask />

              {/* Task 5: HTTP Server Task */}
              <HttpServerTask />
            </div>
          )}

          {/* Unit 4 Section */}
          {activeUnit === "unit4" && (
            <div>
              <h1 style={{ color: "#333", textAlign: "center" }}>
                Unit - 4: Node.js Intermediate 
              </h1>
              
              {/* Task 1: URL & Querystring Modules */}
              <UrlQueryTask />

              {/* Task 2: Custom Modules (Export & Import) */}
              <CustomModuleTask />

              {/* Task 3: Nodemon for Auto-Reload */}
              <NodemonTask />
            </div>
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;