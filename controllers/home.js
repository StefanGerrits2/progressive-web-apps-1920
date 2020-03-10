const Fetcher = require('./modules/fetch.mjs');

// Render home page
async function home (req, res) {
    const baseApiUrl = 'https://api.punkapi.com/v2/beers';
    const url = `${baseApiUrl}?page=1&per_page=36`;

    // Fetch data
    const beers = await Fetcher.get(url);
    
    res.render('home.hbs', {
        beers: beers
    });
}

module.exports = home;