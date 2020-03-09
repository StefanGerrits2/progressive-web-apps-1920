const Fetcher = require('./modules/fetch.mjs');
const dataHelper = require('./modules/dataHelper.mjs');

// Render home page
async function detail (req, res) {
    const baseApiUrl = 'https://api.punkapi.com/v2/beers';
    const url = `${baseApiUrl}?page=1&ids=${req.params.id}&per_page=9`;

    // Fetch data
    const beers = await Fetcher.get(url)
        .then(data => dataHelper(data)) ;
    
    res.render('detail.hbs', {beers: beers});
}

module.exports = detail;