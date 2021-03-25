const express = require('express');

const bodyparser = require('body-parser');

const app = express();

const adminRoutes = require('./AdminRoutes/admin');

app.use('/', function (req, res) {
    res.send("Hello world! You are on main page");
});

app.use('/', function (req, res) {
    res.send("Hello world! You are on main page");
});

app.listen(3000);



