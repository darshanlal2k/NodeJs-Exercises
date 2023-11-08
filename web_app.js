const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode=200;
    res.setHeader("content-type","text/html");
    res.end(`<p>Hello browser</p>`);
});

server.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
