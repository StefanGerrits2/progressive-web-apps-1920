const Fetcher = require('./modules/fetch.mjs');
const dataHelper = require('./modules/dataHelper.mjs');

// Render home page
async function home (req, res) {
    const baseApiUrl = 'https://api.punkapi.com/v2/beers';
    const url = `${baseApiUrl}?page=1&per_page=9`;

    // Fetch data
    const beers = await Fetcher.get(url)
        .then(data => dataHelper(data)) ;
    
    res.render('home.hbs', {beers: beers});
}

module.exports = home;