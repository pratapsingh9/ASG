const express = require('express');

function calculate(n) {
  if (n <= 1) return 1;
  return 1 + calculate(n-1);
}

const app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/cpu/:n', (req, res) => {
  const result = calculate(parseInt(req.params.n));
  return res.send(`Result: ${result}`);
});

app.get('/ip', (req, res) => {
  res.send(req.ip);
});

app.get('/about', (req, res) => {
  res.send("About Page");
});

app.get('/health', (req, res) => {
  res.send("OK");
});

app.get('/contact', (req, res) => {
  res.send("Contact Page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});