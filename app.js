const http = require("http");
const server = http.createServer((req, resp)=>{
    resp.write("This Is Server 1")
    resp.end("Byyyy")
})
const PORT = 3000
server.listen(PORT,() =>{
    console.log(`Server Is Running At http://localhost:${PORT}`)
})

const server2 = http.createServer((req, resp)=>{
    resp.write("This Is Server 2")
    resp.end("Byyyy")
})
const PORT2 = 3003
server2.listen(PORT2,() =>{
    console.log(`Server Is Running At http://localhost:${PORT2}`)
})