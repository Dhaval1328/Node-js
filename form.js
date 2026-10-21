const http = require('http');

http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":'text/html'})
    console.log(req.url);

    if(req.url=='/'){
        resp.write(`<form action="/submit" method="post">
            <input type= "text" name="name" placeholder="Enter Name" />
            <input type= "text" name="name" placeholder="Enter Email" />
            <button>Submit</button>
            </form>`);
    }else if(req.url=='/submit'){
        resp.write('<h1>Data Submited</h1>')
    }
        resp.end();
}).listen(5000)