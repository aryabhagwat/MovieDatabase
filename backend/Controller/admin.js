exports.getLogin = (req, res, next) => {
    console.log("you are in controller getLogin");
    res.send("Log in page");
};

/*exports.postLogin = (req, res, next) => {
    console.log("you are in controller postLogin");
    res.status(200).json({
        user: [{ "name": "arya", "email": "testemail@test.com" }]
    })
};*/

exports.gettestLogin = (req, res, next) => {
    console.log("you are in controller postLogin");
   res.status(200).json({
       /* user: [{ "name": "arya", "email": "testemail@test.com" }]*/
       
    posts: [{ title: 'First Post', content: 'This is the first post!' }]
    })
   /* res.send("gettestLogin  page");*/
};