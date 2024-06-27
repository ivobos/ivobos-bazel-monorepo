const http = require('http');

const url = 'http://localhost:3000/ping';

http.get(url, (res) => {
  console.log(`Status: ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk.toString()}`);
  });

  res.on('end', () => {
    console.log('No more data in response');
  });
}).on('error', (error) => {
  console.error(`Error: ${error.message}`);
});
