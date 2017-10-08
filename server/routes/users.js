const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.js');
const config = require('../config.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200);
    res.end();
})

router.post('/signup', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const newUser = new User ({
        email: email,
        username: username,
        password: password
    });

    User.createUser(newUser, (err, user) => {
        if (err) throw err;

        console.log(user);
    });
    console.log(email)
});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, (err, user) => {
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                console.log('logged in')
                const token = jwt.sign({
                    id: user._id,
                    email: user.email
                }, config.jwtSecret);
                res.json({ token });
            } else {
                console.log('Password does not match record');
            }
        } else {
            console.log('No User');
        }
    });
});

module.exports = router;