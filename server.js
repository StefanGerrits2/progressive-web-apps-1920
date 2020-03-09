const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const port = 3000;
const publicPath = path.join(__dirname, './docs/');

// Controllers
const home = require('./controllers/home.js');
const detail = require('./controllers/detail.js');

app
    .set('view engine', 'hbs')
    .engine( 'hbs', hbs( {
        extname: 'hbs',
        defaultLayout: 'main',
        partialsDir: __dirname + '/views/partials/',
    }))
    .use('/', express.static(publicPath))
    .get('/', home)
    .get('/:id', detail)

    .listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/:id', (req, res) => {
//     res.send(req.params.id);
// })