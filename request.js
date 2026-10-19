const http = require('http');

http.createServer((req, resp) =>{
    console.log(req.method);
    if(req.url=="/"){
        resp.write("<h1>This Is Home Page</h1></br>")
    }
    else if(req.url=="/Login"){
        resp.write("<h1>This Is Login Page</h1></br>")
    }else{
        resp.write("<h1>Other Page</h1></br>")
    }
    resp.end("Hello");
}).listen(5000)