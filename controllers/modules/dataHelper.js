function dataHelper(data, clickedBeer) {
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
            relatedBeers: clickedBeer.filter(beer => {
                // Check if beer percentage is somewhat the same and if it's not the same beer
                if(beer.abv < item.abv + .5 && beer.abv > item.abv -.5 && beer.id !== item.id) {
                    return beer;
                };
            })
        };
    });
};

module.exports = dataHelper;