require('dotenv').config();
const favicon = require('serve-favicon');
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public/');

// Controllers
const home = require('./controllers/home.js');
const detail = require('./controllers/detail.js');

app
    .set('view engine', 'hbs')
    .engine( 'hbs', hbs( {
        extname: 'hbs',
        defaultLayout: 'main',
        partialsDir: __dirname + '/views/partials/'
    }))
    .use('/', express.static(publicPath))
    .use(favicon(path.join(__dirname, 'public', 'img', 'favicon.png')))

    // Get routes
    .get('/', home)
    .get('/:id', detail)

    .listen(port, () => console.log(`Example app listening on port ${port}!`));