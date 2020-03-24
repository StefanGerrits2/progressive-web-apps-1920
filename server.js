require('dotenv').config();
const compression = require('compression');
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const minifyHTML = require('express-minify-html-2');

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
    
    .use(compression())
    .use('/', express.static(publicPath))

    .use(minifyHTML({
        override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }
    }))

    // Get routes
    .get('/', home)
    .get('/beer/:id', detail)
    .get('/offline', (req, res) => res.render('offline.hbs'))

    // 404 not found
    .use(notFound)

    .listen(port, () => console.log(`Example app listening on port ${port}!`));