'use strict'
require('dotenv').config();
require('../config/initializer/database');
const express = require('express');
const helmet = require('helmet');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'));

app.use(helmet());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("X-HTTP-Method-Override", "PATCH, GET, POST, PATH, DELETE");
    next();
})

// API Routes
app.use('/', require('./routes'));

// Errors Log
app.use(require('./helpers/errorsLog'));

module.exports = app;
