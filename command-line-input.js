const http = require('http')

const arg=process.argv;
const port = arg[2];
http.createServer((req, resp)=>{
    resp.write('<h1>Testing Input From CMD</h1>')
    resp.end()
}).listen(port)