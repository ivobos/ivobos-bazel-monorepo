const express = require('express');
const process = require('process');

const app = express();

// Define a route handler for traces
app.post('/v1/traces', (req, res) => {
  console.log("got post to /v1/traces");
  console.log("headers: ", req.headers);
  console.log("body=", req.body);
  res.send('pong');
});

// Start the server and listen on a specific port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Collector listening on port ${port}`);
});