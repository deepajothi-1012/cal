const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Serve calculator.html for root path
  if(req.url === '/' || req.url === '/calculator.html') {
    const filePath = path.join(__dirname, 'calculator.html');
    fs.readFile(filePath, (err, data) => {
      if(err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error loading file');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});