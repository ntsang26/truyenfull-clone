const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes');
const { connect } = require('./config/db');
const bearer = require('./middleware/bearer');
require('dotenv').config({path: path.resolve(__dirname, "./.env")})

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bearer)

connect()
routes(app)

module.exports = app;
