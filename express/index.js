const express = require("express");

const app = express();
app.get("",(req,resp)=>{
    resp.send("<h1>Basic Express App</h1>")
});
app.get("",(req,resp)=>{
    resp.send("<h1>This Is about Page</h1>")
});
app.listen(3000)
