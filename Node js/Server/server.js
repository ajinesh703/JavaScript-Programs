const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Basic routing logic
  if (req.url === '/' || req.url === '/home') {
    serveFile('index.html', res);
  } else if (req.url === '/about') {
    serveFile('about.html', res);
  } else {
    serveFile('404.html', res, 404);
  }
});

function serveFile(fileName, res, statusCode = 200) {
  const filePath = path.join(__dirname, 'public', fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Internal Server Error 😓');
    } else {
      res.writeHead(statusCode, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
