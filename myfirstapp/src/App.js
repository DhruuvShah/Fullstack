import NestedComponent from "./components/Nested";
import StyledCard from "./components/Styled-Card";
import Props from "./components/Functional-Props";
import FolderStructure from "./components/Folder-Structure";
import Greet from "./components/Greet";

function App() {
  return (
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
          <h2 style={{ color: "#00695c", marginTop: 0 }}>
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
    </div>
  );
}

export default App;
