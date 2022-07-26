const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const methodOverride = require('method-override');
// const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');
const expressEjsLayouts = require('express-ejs-layouts');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./db/connection')
require('./db/passport');

//var indexRouter = require('./routes/index');



app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/coffee', coffeeRoutes)

app.get('/', (req, res) => {
    res.json('Welcome to the shop')
})

app.listen(PORT, ()=> {
    console.log('Im feeling nothin on port', PORT)
})