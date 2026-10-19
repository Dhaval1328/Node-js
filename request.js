const http = require('http');

http.createServer((req, resp) =>{
    resp.write("<h1>This Is Home Page</h1></br>")
    resp.end("Hello");
}).listen(5000)