const ReplTask = () => {
  const codeSnippet = `
// Task 1: Hello from Node using REPL

// Step 1: Install Node.js
// Download from https://nodejs.org/
// Verify installation:
node --version
npm --version

// Step 2: Open REPL
// In terminal, type:
node

// In REPL, type:
console.log("Hello from Node");

// Output: Hello from Node

// To exit REPL:
// Press Ctrl+C twice or type .exit
  `;

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ color: "#2196f3", marginTop: 0 }}>
        Task 1: Hello from Node (REPL)
      </h2>
      <pre
        style={{
          backgroundColor: "#1e293b",
          color: "#10b981",
          padding: "20px",
          borderRadius: "8px",
          overflowX: "auto",
          fontFamily: "monospace",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default ReplTask;
