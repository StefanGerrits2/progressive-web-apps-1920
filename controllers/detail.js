const Fetcher = require('./modules/fetch.mjs');
const dataHelper = require('./modules/dataHelper.mjs');

// Render home page
async function detail (req, res) {
    const baseApiUrl = 'https://api.punkapi.com/v2/beers';
    const url1 = `${baseApiUrl}?page=1&per_page=36`;
    const url2 = `${baseApiUrl}?page=1&ids=${req.params.id}&per_page=36`;

    // Fetch data
    const clickedBeer = await Fetcher.get(url1);
    const allBeers = await Fetcher.get(url2);
        // .then(data => dataHelper(data)) ;
    const beers = dataHelper(allBeers, clickedBeer);
    
    res.render('detail.hbs', {beers: beers});
}

module.exports = detail;