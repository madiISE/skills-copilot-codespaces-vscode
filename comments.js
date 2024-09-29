// Create web server
// Create a web server that's going to send a response of big image, let's say a cat
// image, when you hit the endpoint with your browser.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  fs.createReadStream('./cat.jpg').pipe(res);
}).listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});