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
  /*  console.log("you are in controller postLogin");*/
   res.status(200).json({
       user: [{ "name": "arya", "email": "testemail@test.com" }]
    })
   /* res.send("gettestLogin  page");*/
};

exports.postLogin = (req, res, next) => {
    /*  console.log("you are in controller postLogin");*/
    const email = req.body.email;
    const password = req.body.password;
    
    res.status(201).json({
      message: 'User created successfully!',
      User: { id: new Date().toISOString(), email: email, password: password }
    });
};