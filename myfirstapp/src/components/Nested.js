const NestedComponent = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff3e0",
        borderRadius: "8px",
        margin: "15px 0",
      }}
    >
      {/* This is a comment inside JSX */}
      <h2 style={{ color: "#e65100", marginTop: 0 }}>
        Task 4: Nested Elements Example
      </h2>

      {/* Nested structure with multiple levels */}
      <div style={{ marginLeft: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            style={{
              padding: "8px",
              backgroundColor: "#ffe0b2",
              margin: "5px 0",
              borderRadius: "4px",
            }}
          >
            {/* First level item */}
            <strong>Level 1:</strong> Parent Item
            <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
              <li
                style={{
                  padding: "5px",
                  backgroundColor: "#ffcc80",
                  margin: "5px 0",
                  borderRadius: "4px",
                }}
              >
                {/* Second level item */}
                <strong>Level 2:</strong> Child Item
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li
                    style={{
                      padding: "5px",
                      backgroundColor: "#ffb74d",
                      margin: "5px 0",
                      borderRadius: "4px",
                    }}
                  >
                    {/* Third level item */}
                    <strong>Level 3:</strong> Nested Item
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NestedComponent;
