const http = require('http');
const userForm = require('./userForm');

http.createServer((req, resp)=>{
    resp.writeHead(200,{"content-type":'text/html'})
    userForm(req,resp);
    resp.end();
}).listen(3200)