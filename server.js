const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors')

const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const db = 'mongodb://localhost/nightlife';
mongoose.Promise = bluebird;
mongoose.connect(db);

const users = require('./server/routes/users');
const yelp = require('./server/routes/yelp');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.use(cors())

app.options(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.static(__dirname + '/dist'));

app.use('/api/users', users);
app.use('/api/search', yelp);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});