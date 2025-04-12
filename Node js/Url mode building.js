const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true = parse query string

  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (path === '/greet' && query.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${query.name}! 👋`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found 🥲');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
