function userDatasubmit(req,resp){
    let dataBody = [];
            req.on('data',(chunk)=>{
                dataBody.push(chunk);
            });


    req.on('end',() => {
        let rawData = Buffer.concat(dataBody).toString
    })
        resp.write(`<h1>You Data Get</h1>`);
}
module.exports= userDatasubmit;