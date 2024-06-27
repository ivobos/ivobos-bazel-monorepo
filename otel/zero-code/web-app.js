const express = require('express');
const process = require('process');

console.log("Starting web-app")
console.log("OTEL_TRACES_EXPORTER=",process.env['OTEL_TRACES_EXPORTER'])

const app = express();

// Define a route handler for the ping endpoint
app.get('/ping', (req, res) => {
  console.log("ping -> pong")
  res.send('pong');
});

// Start the server and listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web-app listening on port ${port}`);
});