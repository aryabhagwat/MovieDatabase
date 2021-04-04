const express = require('express');

const mongoose = require('mongoose');
const { body } = require('express-validator/check');
const { validationResult } = require('express-validator/check');

const app = express();
const adminRoutes = require('./AdminRoutes/admin');

const User = require('./Models/user');

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

app.post('/login', function (req, res) {

    console.log('In login ');
    const email = req.body.user.email;
    const password = req.body.user.password;


    res.status(201).json({
        message: 'User logged in successfully!',
        User: { id: new Date().toISOString(), email: email, password: password }
    });
});


app.post('/admin/signup', [
    body('email').isEmail().withMessage('Please enter valid email')
        .custom((value, { req }) => {
            return User.findOne({email:value}).then(userDoc =>{
                if(userDoc){
                    return Promise.reject('User already exists');
                }
            });
        })
        ,body('password').trim().isLength({min:7})
], function (req, res) {
    
    const errors=validationResult(req);
    if(!errors.isEmpty){
        const error=new Error('Validation Failed');
        error.statusCode=422;
        error.data=errors.array();
        throw error;
    }

    const email = req.body.user.email;
    const password = req.body.user.password;
    const user = new User({
        email: email,
        password: password
    });

    user.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'User signed in successfully!',
            User: result
        });
    }).catch(err => {
        console.log(err);
    });

});

app.use('/', function (req, res) {
    console.log(req.body);
    res.send("Hello world! You are on main page");
});

mongoose.connect("mongodb+srv://aryabhagwat:aryabhagwat@cluster0.cyz82.mongodb.net/moviedatabase?retryWrites=true&w=majority").then(
    result => {
        console.log('mongodb connected!');
        app.listen(3000);
    }
).catch(err => console.log(err));





