const express = require('express');

const mongoose = require('mongoose');

const app = express();
const adminRoutes = require('./AdminRoutes/admin');

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
    const email = req.body.email;
    const password = req.body.password;

    res.status(201).json({
        message: 'User created successfully!',
        User: { id: new Date().toISOString(), email: email, password: password }
    });
});

app.use('/', function (req, res) {
    console.log(req.body);
    res.send("Hello world! You are on main page");
});

mongoose.connect("mongodb+srv://aryabhagwat:aryabhagwat@cluster0.cyz82.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(
result => {
    console.log('mongodb connected!');
    app.listen(3000);
}

).catch(err => console.log(err));





