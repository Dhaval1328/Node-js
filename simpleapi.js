const http = require('http');


const userData=[
    {
    name:'Dhaval',
    age:20,
    email:'demo@gmail.com'
},
{
    name:'Dhaval1',
    age:21,
    email:'demo1@gmail.com'
},
{
    name:'Dhaval2',
    age:22,
    email:'demo2@gmail.com'
}
]
http.createServer((req, resp)=>{
    resp.setHeader("Content-Type",'application/json')
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(4000)