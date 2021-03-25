
const express = require('express');

const router=express.Router();


router.get('/Login', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'Login.html'));
    console.log("Inside Login");
    res.send("Login page");
 }); 

module.exports = router;