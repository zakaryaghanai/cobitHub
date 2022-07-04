'use strict'

if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

require('../config/initializer/database');
const express = require('express');
const helmet = require('helmet');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());// CORS Middleware

// API Routes
app.use(require('./routes'));

// Errors Log
app.use(require('./helpers/errorsLog'));

module.exports = app;
