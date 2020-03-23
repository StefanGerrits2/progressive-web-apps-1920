const Fetcher = require('./modules/fetch.js');
const dataHelper = require('./modules/dataHelper.js');

// Render home page
async function detail (req, res) {
    // URLS
    const baseApiUrl = 'https://api.punkapi.com/v2/beers';
    const getAllURL = `${baseApiUrl}?page=1&per_page=36`;
    const getIdURL = `${baseApiUrl}?page=1&ids=${req.params.id}&per_page=36`;

    //try

    // Get clicked beer
    const clickedBeer = await Fetcher.get(getAllURL);
    // Get all data
    const allBeers = await Fetcher.get(getIdURL);

    // Save modified data
    const beers = dataHelper(allBeers, clickedBeer);
    
    res.render('detail.hbs', {
        beers: beers
    });

    //catch - error

    // finally - render 404
}

module.exports = detail;