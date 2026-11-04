const http = require("http");

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "text/html" });
    resp.write("<h1>Welcome to Nodejs</h1>");
    resp.end();
}).listen(3000)