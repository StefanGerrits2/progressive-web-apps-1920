require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public/');

// Controllers
const home = require('./controllers/home.js');
const detail = require('./controllers/detail.js');
const notFound = require('./controllers/notFound.js');

app
    .set('view engine', 'hbs')
    .engine( 'hbs', hbs( {
        extname: 'hbs',
        defaultLayout: 'main',
        partialsDir: __dirname + '/views/partials/'
    }))
    .use('/', express.static(publicPath))

    // Get routes
    .get('/', home)
    .get('/beer/:id', detail)

    // 404 not found
    .use(notFound)

    .listen(port, () => console.log(`Example app listening on port ${port}!`));