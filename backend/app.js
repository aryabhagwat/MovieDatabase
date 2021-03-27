const express = require('express');

const app = express();

const adminRoutes = require('./AdminRoutes/admin');

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use('/admin', adminRoutes);

app.use('/', function (req, res) {
    console.log(req.body);
    res.send("Hello world! You are on main page");
});

app.listen(3000); 



