const fetch = require('node-fetch');

// Source used https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
const checkStatus = response => {
    if (response.ok) {
        return response;
    } 
    else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

const Fetcher = {
    get: (url) =>
        fetch(url)
            .then(checkStatus)
            .then(res => res.json())
};

function dataHelper(data) {
    return data.map(item => {
        return { 
            ...item,
            readableVolume: item.volume.value + ' ' + item.volume.unit,
            readableBoilVolume: item.boil_volume = item.boil_volume.value + ' ' + item.boil_volume.unit,
            // Guido Bouman helped me writed some parts of the following code:
            // Move all objects of multiple arrays higher up so I can render them all easier
            ingredients: Object.entries(item.ingredients).reduce((accumulator, ingredientsCategory) => {
                const key = ingredientsCategory[0];
                const ingredients = ingredientsCategory[1];

                if (Array.isArray(ingredients)) {
                    return [
                        ...accumulator,
                        // Map over the two arrays
                        ...ingredients.map((ingredient) => {
                            return {
                                ...ingredient,
                                type: key.charAt(0).toUpperCase() + key.slice(1),
                            };
                        })
                    ];
                }
                else {
                    return [
                        ...accumulator,
                        // No map because this is a single string
                        {
                            name: ingredients,
                            type: key.charAt(0).toUpperCase() + key.slice(1),
                        },
                    ];
                }
            }, []),
            //
            relatedBeers: data.filter(beer => {
                // Check if beer percentage is somewhat the same and if it's not the same beer
                if(beer.abv < item.abv + .5 && beer.abv > item.abv -.5 && beer.id !== item.id) {
                    return beer;
                };
            })
        };
    });
};

// Render home page
async function home (req, res) {
    const baseApiUrl = 'https://api.punkapi.com/v2/beers';
    const url = `${baseApiUrl}?page=1&per_page=9`;

    // Fetch data
    const beers = await Fetcher.get(url)
        .then(data => dataHelper(data)) ;
        
    console.log(beers)

    res.render('home.hbs', {beers: beers});
}

module.exports = home;