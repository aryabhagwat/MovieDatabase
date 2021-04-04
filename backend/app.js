const express = require('express');

const mongoose = require('mongoose');
const { body } = require('express-validator/check');
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    let loadedUser;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error('User not found');
                error.statusCode = 401;
                throw error;
            }
            loadeduser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Password Incorrect');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign(
                { 
                    email: loadeduser.email, userID: loadeduser._id.toString() 
                },
                'moviedatabaseSecretKey',
                {expiresIn: '2hr'}

            );
            console.log('User logged in');
            res.status(200).json({token:token,userID:loadeduser._id.tostring()});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
});


app.post('/admin/signup', [
    body('user.email').isEmail().withMessage('Please enter valid email')
        .custom((value, { req }) => {
            return User.findOne({ email: value }).then(userDoc => {
                if (userDoc) {
                    console.log('User already exists');
                    return Promise.reject('User already exists');
                }
            });
        })
    , body('user.password').trim().isLength({ min: 6 })
], function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation Failed');
        error.statusCode = 422;
        error.data = errors.array();
        console.log(error);
        throw error;
    }

    const email = req.body.user.email;
    const password = req.body.user.password;
    bcrypt.hash(password, 12).
        then(hashedpwd => {
            const user = new User({
                email: email,
                password: hashedpwd
            });
            return user.save();
        })
        .then(result => {
            res.status(201).json({ message: 'User created', userID: result._id });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

    /*
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
    */
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





