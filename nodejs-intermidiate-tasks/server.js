const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Nodemon with Express</h1>
    <p>Edit this file and see instant changes!</p>
    <p>Current time: ${new Date().toLocaleString()}</p>
  `);
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'API endpoint',
    timestamp: new Date(),
    data: [1, 2, 3, 4, 5]
  });
});

app.listen(port, () => {
  console.log(`Express app running on http://localhost:${port}`);
  console.log('Nodemon is watching for changes...');
});
