function userForm(req,resp){
        resp.write(`
            <form action="/submit" method="post">
            <input type="text" placeholder="Enter Your Name" name='name'>
            <input type="text" placeholder="Enter Your Email" name='email'>
            <button>Submit</button>
            </form>`);
}
module.exports= userForm;