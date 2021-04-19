
const express = require('express');

const adminController = require('../Controller/admin');

const router=express.Router();

console.log("you are in admin routes");

/*GET /admin/Login*/
router.use('/Login', adminController.getLogin); 

/*Post /admin/login
router.use('/Login', adminController.postLogin); */

/*Post /admin/gettestLogin */
router.get('/getlogin', adminController.gettestLogin); 

router.post('/login', adminController.postLogin); 

router.post('/addMovie', adminController.addMovie); 

router.get('/getMovies', adminController.getMovies); 

router.get('/movies', adminController.getMovieByID); 

console.log("after login");
module.exports = router;