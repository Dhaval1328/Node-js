const http = require("http");
https.createServer((req, resp)=>{
    resp.write("This Is Server 1")
    resp.end("Byyyy")
}).listen(3000)