
const express = require('express');

const adminController = require('../Controller/admin');

const router=express.Router();

console.log("you are in admin routes");

/*GET /admin/Login*/
router.use('/Login', adminController.getLogin); 

/*Post /admin/login
router.use('/Login', adminController.postLogin); */

/*Post /admin/gettestLogin */
router.use('/getlogin', adminController.gettestLogin); 

console.log("after login");
module.exports = router;