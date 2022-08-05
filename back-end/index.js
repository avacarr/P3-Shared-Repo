const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: path.resolve(__dirname, '../frontend/marvel-wiki/.env.local') });
require('./db/connection')


app.use(cookieParser());
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({secret: 'Max is Awesome!', resave: false, saveUninitialized: true}))
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', require('./routes/index'))


app.listen(3001, ()=> {
    console.log('Im feeling it on port', 3001)
})