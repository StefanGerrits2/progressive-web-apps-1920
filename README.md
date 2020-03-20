# Progressive web apps

## Concept

#### Overview page
![image](https://user-images.githubusercontent.com/45566396/75431221-d4280300-594c-11ea-83a8-6c5cce3facc8.png)

#### Detail page: general
![image](https://user-images.githubusercontent.com/45566396/75431288-ef930e00-594c-11ea-850b-c3ed91827fc2.png)

#### Detail page: Related beers around the same alcohol percentage
![image](https://user-images.githubusercontent.com/45566396/75431532-40a30200-594d-11ea-9c22-543ce1450fa0.png)

### Description

This is a single page web app that uses the PUNK API to receive beers. The beers are shown in the overview page. I fetch 36 beers each time because you cannot fetch all beers in one go. For this sake, I implemented a loadmore button to load in more data. 

You can click on a beer to checkout the detail page for further information; including ingredients and recipes. There are also related beers shown around the same alcohol percentage. When you click on a related beer you will see the detail page of that beer.

## Features

* Loading in data from the PUNK API
* Loading in more data when you click on a button
* Being able to view a detail page
* Being able to view related beers around the same alcohol by volume on the detail page
* Being able to click a related beer to render the new detail page
* Being able to view pages you visited before if you have no internet connection
* Fallback if you want to visit a page you have never visited before without an internet connection
* Loading...

## 3 things I want feedback on / I'm proud of!

* I'm proud of my service worker! It fully works. I'm planning on making the code more DRY if I have time. Maybe you have some feedback to make my service worker code more DRY?

* I now minify and watch my CSS with gulp. If I want to minify my JS, does this work exactly the same? And is it a requirement to minify my JS? Or is the CSS enough?

* Is my folder structure and naming logical? Or is it better to rename some or change the folder structure?

## Service worker

`Job story:` I want to visit detail pages I visited earlier, even if I have no internet connection.

I implemented a service worker in my project where I save every page you visited in the cache. When there is no internet conncection, these pages still work! I also cached my fonts, manifest and css. If you visit a detail page which you haven't visited before, and you have no internet connection, then a page is rendered saying "It looks like you're offline".

On this offline page, I want to add the routes which you can still visit so the user will have a good experience even without an internet connection. I think can get these routes out of my cache and display them on the offline page so the user can still route to other pages they visited before and thus these pages are saved in the cache.

## Manifest

My manifest is fully working. It has an icon, theme name etc. 

## Installation

### 1. Clone this repository to your computer
Run this command in your terminal:

`git clone https://github.com/StefanGerrits2/progressive-web-apps-1920`
### 2. Navigate into the root of the folder
Run this command in your terminal:

`cd progressive-web-apps-1920`

### 3 Installing packages
Run this command in your terminal:

`npm install`

### 4. Viewing the website
Run this command in your terminal:

`npm run start`

Now go to your `localhost:3000` in your browser.

If you want to view in dev mode, run:

`npm run dev`

and

`npm run watch:css` in another terminal

## API

#### PUNK API

Returns different kinds of beers with a lot of information, some details are:

<details>
    <summary>Click here for the data properties</summary>
        <ul>
            <li>Name</li>
            <li>Tagline</li>
            <li>First brewed</li>
            <li>Description</li>
            <li>Image</li>
            <li>Volume</li>
            <li>Boil volume</li>
            <li>Method</li>
            <li>Ingredients</li>
            <li>Food pairing</li>
            <li>Brewers tips</li>
            <li>Contributed  by</li>
        </ul>
</details>
<br>

* Each IP that makes a request has a rate limit of 3600 requests per hour (1 req/sec)
* No key and authentication needed
* HTTPS

#### Root endpoint

`https://api.punkapi.com/v2/`

There are loads of paramaters which you can add to it, I use:
`per_page`. 

* I use `per_page` to get more items back, because if I don't use this, the amount of items that get returned is limited by 25. 

#### This is how a raw object looks when I fetch it from the API
![image](https://user-images.githubusercontent.com/45566396/75431949-eb1b2500-594d-11ea-92a6-378961052144.png)

#### I transformed my data objects to this:
![image](https://user-images.githubusercontent.com/45566396/75431824-b909c300-594d-11ea-8a44-edd36499667d.png)

## Sources

* [MDN](https://developer.mozilla.org/nl/) - Main source for javascript code, for example `.filter`, `.reduce`, `.map` and the `spread operator`
* [Fetch](https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939) - To understand how you can implement good error handling in a fetch

## Credits

* [Guido Bouman](https://github.com/guidobouman) - He helped me transform some data

## Check it out!

* [Click here to open the live link](https://stefangerrits2.github.io/web-app-from-scratch-1920/)

## License

[MIT](https://github.com/StefanGerrits2/web-app-from-scratch-1920/blob/master/LICENSE.txt) © Stefan Gerrits