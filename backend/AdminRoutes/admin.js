
const express = require('express');

const adminController = require('../Controller/admin');

const router=express.Router();

console.log("you are in admin routes");

router.use('/Login', adminController.getLogin); 

console.log("after login");
module.exports = router;