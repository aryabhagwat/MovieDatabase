const express = require('express');

const mongoose = require('mongoose');

const app = express();
const adminRoutes = require('./AdminRoutes/admin');

const User=require('./Models/user');

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/admin', adminRoutes);

app.use('/login', function (req, res) {
    
    console.log('In login');
    const email = req.body.email;
    const password = req.body.password;

    res.status(201).json({
        message: 'User logged in successfully!',
        User: { id: new Date().toISOString(), email: email, password: password }
    });
});

app.post('/signup', function (req, res) {

    console.log('In signup');
    const email = req.body.email;
    const password = req.body.password;
    const user=new User({
        email:email,
        password:password
    });
    user.save().then( result=> {
        
    console.log('In signup save');
        console.log(result);
        res.status(201).json({
            message: 'User logged in successfully!',
            User:result
        });
    }).catch(err => {
        console.log(err);
    });    
});

app.use('/', function (req, res) {
    console.log(req.body);
    res.send("Hello world! You are on main page");
});

mongoose.connect("mongodb+srv://aryabhagwat:aryabhagwat@cluster0.cyz82.mongodb.net/myFirstDatabase?retryWrites=true&w=majority?authSource=admin").then(
    result => {
        console.log('mongodb connected!');
        app.listen(3000);
    }
).catch(err => console.log(err));





