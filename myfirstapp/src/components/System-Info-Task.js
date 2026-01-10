const SystemInfoTask = () => {
  const codeSnippet = `
// Task 3: CLI App to Read System Info using OS Module

// File: systemInfo.js

const os = require('os');

function displaySystemInfo() {
  console.log('\\n========================================');
  console.log('       SYSTEM INFORMATION CLI');
  console.log('========================================\\n');

  // Platform information
  console.log('📌 Platform:', os.platform());
  console.log('🖥️  Architecture:', os.arch());
  console.log('💻 OS Type:', os.type());
  console.log('🔢 OS Release:', os.release());
  
  // Hostname
  console.log('\\n🌐 Hostname:', os.hostname());
  
  // User information
  console.log('👤 Username:', os.userInfo().username);
  console.log('🏠 Home Directory:', os.homedir());
  
  // Memory information
  const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
  const usedMemory = (totalMemory - freeMemory).toFixed(2);
  
  console.log('\\n💾 Memory Information:');
  console.log(\`   Total Memory: \${totalMemory} GB\`);
  console.log(\`   Free Memory: \${freeMemory} GB\`);
  console.log(\`   Used Memory: \${usedMemory} GB\`);
  
  // CPU information
  const cpus = os.cpus();
  console.log('\\n⚡ CPU Information:');
  console.log(\`   Model: \${cpus[0].model}\`);
  console.log(\`   Cores: \${cpus.length}\`);
  console.log(\`   Speed: \${cpus[0].speed} MHz\`);
  
  // Uptime
  const uptimeHours = (os.uptime() / 3600).toFixed(2);
  console.log('\\n⏱️  System Uptime:', uptimeHours, 'hours');
  
  // Network interfaces
  console.log('\\n🌐 Network Interfaces:');
  const networkInterfaces = os.networkInterfaces();
  Object.keys(networkInterfaces).forEach(interfaceName => {
    console.log(\`   \${interfaceName}:\`);
    networkInterfaces[interfaceName].forEach(details => {
      if (details.family === 'IPv4') {
        console.log(\`      IPv4: \${details.address}\`);
      }
    });
  });
  
  console.log('\\n========================================\\n');
}

displaySystemInfo();

// Run: node systemInfo.js
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
      <h2 style={{ color: "#ff5722", marginTop: 0 }}>
        Task 3: System Info CLI (OS Module)
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

export default SystemInfoTask;
