const http = require('http');
const userForm = require('./userForm');
const userDatasubmit = require('./userDatasubmit');

http.createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "text/html" });

    if (req.url == "/") {
        userForm(req, resp);

    } else if (req.url == "/submit") {
        userDatasubmit(req, resp);

    } else {
        resp.end("<h1>404 Page Not Found</h1>");
    }

}).listen(3200, () => {
    console.log("Server running at http://localhost:3200");
});