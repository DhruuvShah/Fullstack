import http from 'http';
import { uppercase, lowercase, camelcase, capitalize } from './string.js';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>String Module Demo</h1>');
  res.write('<p>Uppercase : ' + uppercase('hello world') + '</p>');
  res.write('<p>Lowercase : ' + lowercase('HELLO WORLD') + '</p>');
  res.write('<p>Camelcase : ' + camelcase('hello good morning') + '</p>');
  res.write('<p>Capitalize: ' + capitalize('hello good morning') + '</p>');
  res.end();
});

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
