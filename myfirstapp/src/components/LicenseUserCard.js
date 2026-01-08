function LicenseUserCard() {
  const cardStyle = {
    maxWidth: "380px",
    margin: "20px auto",
    padding: "16px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    paddingBottom: "12px",
    borderBottom: "2px solid #e5e7eb",
  };

  const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "bold",
    marginRight: "12px",
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "4px",
  };

  const emailStyle = {
    fontSize: "14px",
    color: "#6b7280",
  };

  const badgeStyle = {
    display: "inline-block",
    padding: "4px 10px",
    backgroundColor: "#10b981",
    color: "#ffffff",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "bold",
    marginBottom: "12px",
  };

  const detailRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #f3f4f6",
  };

  const labelStyle = {
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: "500",
  };

  const valueStyle = {
    color: "#1f2937",
    fontSize: "14px",
    fontWeight: "600",
  };

  const footerStyle = {
    marginTop: "12px",
    padding: "12px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
  };

  const featuresListStyle = {
    listStyle: "none",
    padding: "0",
    margin: "8px 0 0 0",
  };

  const featureItemStyle = {
    padding: "4px 0",
    fontSize: "13px",
    color: "#4b5563",
  };

  return (
    // Main card container
    <div style={cardStyle}>
      {/* Header section with user info */}
      <div style={headerStyle}>
        {/* User avatar with initials */}
        <div style={avatarStyle}>
          <span>JD</span>
        </div>

        {/* User details - nested elements */}
        <div>
          <div style={nameStyle}>
            <span>John Doe</span>
          </div>
          <div style={emailStyle}>
            <span>john.doe@example.com</span>
          </div>
        </div>
      </div>

      {/* License type badge */}
      <div style={badgeStyle}>PREMIUM LICENSE</div>

      {/* License details section - multiple nested rows */}
      <div>
        {/* Single detail row with label and value */}
        <div style={detailRowStyle}>
          <span style={labelStyle}>License Type:</span>
          <span style={valueStyle}>Premium</span>
        </div>

        <div style={detailRowStyle}>
          <span style={labelStyle}>License ID:</span>
          <span style={valueStyle}>PRE-2024-8547</span>
        </div>

        <div style={detailRowStyle}>
          <span style={labelStyle}>Issue Date:</span>
          <span style={valueStyle}>Jan 1, 2024</span>
        </div>

        <div style={detailRowStyle}>
          <span style={labelStyle}>Expiry Date:</span>
          <span style={valueStyle}>Dec 31, 2024</span>
        </div>

        {/* Last row without bottom border */}
        <div style={{ ...detailRowStyle, borderBottom: "none" }}>
          <span style={labelStyle}>Status:</span>
          <span style={{ ...valueStyle, color: "#10b981" }}>Active</span>
        </div>
      </div>

      {/* Footer section with nested features list */}
      <div style={footerStyle}>
        <div style={{ fontSize: "14px", fontWeight: "bold", color: "#1f2937" }}>
          Premium Features:
        </div>

        {/* Unordered list with nested list items */}
        <ul style={featuresListStyle}>
          <li style={featureItemStyle}>
            <span>✓ Unlimited Projects</span>
          </li>
          <li style={featureItemStyle}>
            <span>✓ Priority Support</span>
          </li>
          <li style={featureItemStyle}>
            <span>✓ Advanced Analytics</span>
          </li>
          <li style={featureItemStyle}>
            <span>✓ Team Collaboration</span>
          </li>
        </ul>
      </div>

      {/* 
        Multi-line comment:
        This card component demonstrates:
        - JSX comments syntax
        - Nested elements structure
        - Inline styling
      */}
    </div>
  );
}

export default LicenseUserCard;
