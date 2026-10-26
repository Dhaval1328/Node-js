const http= require('http');
const fs = require('fs');

http.createServer((req, resp)=>{
    fs.readFile('html/form.html','utf-8',(error, data) =>{
        if(error){
            resp.writeHead(500,{"content-type":'text/plan'})
            resp.end('Internal server error')

            return ;
        }
        if(req.url == '/'){
            resp.writeHead(200,{"content-type":'text/html' })
            resp.write(data);
        }else if(req.url== '/submit'){
            let dataBody = [];
            req.on('data',(chunk)=>{
                dataBody.push(chunk);
            });
            req.on('end',(chunk)=>{
                let rawData = Buffer.concat(dataBody).toString();
                console.log(rawData);
            });
            resp.write('<h1>Data Submited</h1>')
        }
        resp.end()
    })
}).listen(3200)



// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"content-type":'text/html'})
//     console.log(req.url);

//     if(req.url=='/'){
//         resp.write(`<form action="/submit" method="post">
//             <input type= "text" name="name" placeholder="Enter Name" />
//             <input type= "text" name="name" placeholder="Enter Email" />
//             <button>Submit</button>
//             </form>`);
//     }else if(req.url=='/submit'){
//         resp.write('<h1>Data Submited</h1>')
//     }
//         resp.end();
// }).listen(5000)