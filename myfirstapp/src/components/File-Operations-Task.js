const FileOperationsTask = () => {
  const codeSnippet = `
// Task 4: Read and Write Files using fs Module

// File: fileOperations.js

const fs = require('fs');

// 1. Write to a file (Synchronous)
console.log('1. Writing to file...');
const content = \`Hello from Node.js!
This is a sample file created using fs module.
Date: \${new Date().toLocaleString()}
\`;

fs.writeFileSync('sample.txt', content);
console.log('✅ File written successfully: sample.txt\\n');

// 2. Read from a file (Synchronous)
console.log('2. Reading from file...');
const data = fs.readFileSync('sample.txt', 'utf8');
console.log('File contents:');
console.log(data);

// 3. Append to a file (Synchronous)
console.log('\\n3. Appending to file...');
const appendData = '\\nThis line was appended later.';
fs.appendFileSync('sample.txt', appendData);
console.log('✅ Content appended successfully\\n');

// 4. Read the updated file
console.log('4. Reading updated file...');
const updatedData = fs.readFileSync('sample.txt', 'utf8');
console.log('Updated file contents:');
console.log(updatedData);

// 5. Write to file (Asynchronous)
console.log('\\n5. Writing to file asynchronously...');
const asyncContent = 'This is written asynchronously!';
fs.writeFile('async-file.txt', asyncContent, (err) => {
  if (err) {
    console.error('❌ Error writing file:', err);
  } else {
    console.log('✅ Async file written: async-file.txt');
    
    // 6. Read from file (Asynchronous)
    fs.readFile('async-file.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('❌ Error reading file:', err);
      } else {
        console.log('\\n6. Reading async file...');
        console.log('Async file contents:', data);
      }
    });
  }
});

// 7. Check if file exists
console.log('\\n7. Checking file existence...');
if (fs.existsSync('sample.txt')) {
  console.log('✅ sample.txt exists');
}

// 8. Get file information
console.log('\\n8. File information:');
const stats = fs.statSync('sample.txt');
console.log(\`   Size: \${stats.size} bytes\`);
console.log(\`   Created: \${stats.birthtime}\`);
console.log(\`   Modified: \${stats.mtime}\`);
console.log(\`   Is File: \${stats.isFile()}\`);

// Run: node fileOperations.js
  `;

  return (
    <div style={{
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#00bcd4', marginTop: 0 }}>Task 4: File Operations (fs Module)</h2>
      <pre style={{
        backgroundColor: '#1e293b',
        color: '#10b981',
        padding: '20px',
        borderRadius: '8px',
        overflowX: 'auto',
        fontFamily: 'monospace',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default FileOperationsTask;