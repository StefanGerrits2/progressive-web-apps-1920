# Progressive web apps

## Concept

#### Overview page
![image](https://user-images.githubusercontent.com/45566396/77431184-a2d01500-6ddc-11ea-837e-c1c7e1db337f.png)

#### Detail page: general
![image](https://user-images.githubusercontent.com/45566396/77431272-bed3b680-6ddc-11ea-92a7-70f4dd256918.png)

#### Detail page: Related beers around the same alcohol percentage
![image](https://user-images.githubusercontent.com/45566396/77431414-f6426300-6ddc-11ea-917d-5b131615f83c.png)

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

### Visual stability

Images will always have reserved space. This way content won't 'jump' elsewhere when the image is rendered:

![image](https://user-images.githubusercontent.com/45566396/77431853-94362d80-6ddd-11ea-9446-e9614bded55b.png)

![image](https://user-images.githubusercontent.com/45566396/77431916-ab751b00-6ddd-11ea-8bde-0dcb073e9a53.png)

### Tests before optimizing my performance

#### Audit
![image](https://user-images.githubusercontent.com/45566396/77432363-40781400-6dde-11ea-8834-e7bb40e346b4.png)

#### Network - Good internet
![image](https://user-images.githubusercontent.com/45566396/77434136-b54c4d80-6de0-11ea-8567-65bba11e2acc.png)

#### Network - Slow 3G
<details>
    <summary >Click to open stats for slow 3G</summary>
    <img src="https://user-images.githubusercontent.com/45566396/77434280-e7f64600-6de0-11ea-8339-079d0af5c31e.png">
</details>

## Increasing performance
The performance could be better right? So let's increase our performance! I used multiple things to increase it. I'm also gonna test the Network tab to see how fast (or slow) my pages load. I will test this with good internet speed, and slow 3G internet speed to show the difference.


### 1. Minifying CSS
I used gulp to minify my CSS. This way CSS is a smaller sized file, which makes it faster to send over the network and thus it downloads faster.

#### Audit
![image](https://user-images.githubusercontent.com/45566396/77435157-3bb55f00-6de2-11ea-8cf5-9e28f074f373.png)

#### Network - Good internet
![image](https://user-images.githubusercontent.com/45566396/77434819-bb8ef980-6de1-11ea-8db4-3d49b6fb34c2.png)

### Network - Slow 3G
<details>
    <summary >Click to open stats for slow 3G</summary>
    <img src="https://user-images.githubusercontent.com/45566396/77435024-06107600-6de2-11ea-90c1-4e5a9087c595.png">
</details>

### 2. Minifying HTML
#### Audit
![image](https://user-images.githubusercontent.com/45566396/77436095-59cf8f00-6de3-11ea-94cd-54f6cbbd9fee.png)

### Network - Good internet
![image](https://user-images.githubusercontent.com/45566396/77435690-e7f74580-6de2-11ea-9eb3-a10e414179d9.png)

### Network - Slow 3G 
<details>
    <summary >Click to open stats for slow 3G</summary>
    <img src="https://user-images.githubusercontent.com/45566396/77435910-24c33c80-6de3-11ea-8809-086d9ed3c22d.png">
</details>

### 3. Gzip compression
#### Audit
![image](https://user-images.githubusercontent.com/45566396/77436350-aca94680-6de3-11ea-8c3f-057151ed5d20.png)

### Network - Good internet
![image](https://user-images.githubusercontent.com/45566396/77436463-d498aa00-6de3-11ea-8974-0b8d53dab3e9.png)

### Network - Slow 3G 
<details>
    <summary >Click to open stats for slow 3G</summary>
    <img src="https://user-images.githubusercontent.com/45566396/77436731-204b5380-6de4-11ea-8de5-d86df85d0891.png">
</details>

### 4. Font display swap
#### Audits
![image](https://user-images.githubusercontent.com/45566396/77437152-9b146e80-6de4-11ea-90f9-5b08ce54952c.png)

### Network - Good internet
![image](https://user-images.githubusercontent.com/45566396/77437329-d2831b00-6de4-11ea-9b5e-0a3326583365.png)

### Network - Slow 3G
<details>
    <summary >Click to open stats for slow 3G</summary>
    <img src="https://user-images.githubusercontent.com/45566396/77437504-065e4080-6de5-11ea-99b9-93d2692040af.png">
</details>

### 5. Service Worker
### Audits
![image](https://user-images.githubusercontent.com/45566396/77443920-b0d96200-6deb-11ea-8613-d85581f17dda.png)

Now it shows it's a progressive web app! (check the icon)

Stats change since audits test with the first view. My service worker only has huge impact on the speed of the page if you visited a page before. See below.

### Network - Any internet speed, because it uses files saved in cache
![image](https://user-images.githubusercontent.com/45566396/77437855-6d7bf500-6de5-11ea-8090-81bb79e1dd66.png)

### Conclusion performance tests

One thing I noticed when you test the Network tab, the speed of the page loading in is always different, this is pretty logical because your internet speed is always different. For this case, it's important to increase your performance for these kinds of scenarios where your internet is slow.

A huge boost in performance was the compressing of my Express app, it decreases the size of the response body and it increases the speed of my web app. The performance test went from 87 to 95!

The final touch to get the 100 in performance was the font display swap. This means the page still loads even if the fonts aren't there yet. At this time the fallback font is used. When the page is able to load in the custom font, the font changes. This way my page loading won't be blocked by any custom fonts.

The service worker is a huge boost in page loading if you visited a page before. When I implemented the service worker the load time went from 516ms to 104ms!

### Conclusion Rubric

#### Goal 1: Server and client side rendering
I render my data server side with the PUNK API. If Javascript is turned off, the overview en detail page can still be visited. I haven't created any features for my client side Javascript. Because of this, I think I will get a "Voldoende" for this part of the [Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vSc48v1nrjcwH0llcTd68xyK7f2fDC2UL4d6h4ZNW3DU8ucez6ZOHiId1XSX0RP5ByvLC8p5pVUGZT4/pubhtml)
.

#### Goal 2: Service worker
I'm using a Service Worker to cache static files and every page that is visited. This corresponds to my `Job story`. When you visit a page, it will be cached. When the user is offline, it will show either a page he has visited before, or when he visits a new page, it will tell the user he's offline and that he has no internet connection at the moment. I think I deserve between a "Voldoende" and a "Goed" for this part of the [Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vSc48v1nrjcwH0llcTd68xyK7f2fDC2UL4d6h4ZNW3DU8ucez6ZOHiId1XSX0RP5ByvLC8p5pVUGZT4/pubhtml).

#### Goal 3: Optimizing critical rendering path
I've implemented serveral things to improve the performance of my application:
* Minifying CSS
* Minifying HTML
* Gzip compression
* Font display swap
* Service worker

In my opinion these are some basic optimizations, but they to the job. Before these optimizations the Performance in the audit tools was 84. With these optimizations it bumped up to a perfect 100. These scores are measured as the First view. The repeated view means if you visit a page you've visited before. This will give the user an instant feeling because they're cached by my service worker. I'm pretty satisfied with the overal score in my audits, especially the Time to interaction (0.8s). This means the user can interact with a web page element once the page has been rendered.

I think I deserve a "Voldoende" for this part of the [Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vSc48v1nrjcwH0llcTd68xyK7f2fDC2UL4d6h4ZNW3DU8ucez6ZOHiId1XSX0RP5ByvLC8p5pVUGZT4/pubhtml).

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

<details>
    <summary >This is how a raw object looks when I fetch it from the API</summary>
    <img src="https://user-images.githubusercontent.com/45566396/75431949-eb1b2500-594d-11ea-92a6-378961052144.png">
</details>

<details>
    <summary >I transformed my data objects to this:</summary>
    <img src="https://user-images.githubusercontent.com/45566396/75431824-b909c300-594d-11ea-8a44-edd36499667d.png">
</details>

## Sources

* [MDN](https://developer.mozilla.org/nl/) - Main source for javascript code, for example `.filter`, `.reduce`, `.map` and the `spread operator`
* [Fetch](https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939) - To understand how you can implement good error handling in a fetch
* [Gzip compression](https://expressjs.com/en/advanced/best-practice-performance.html)
* [Font display swap](https://web.dev/avoid-invisible-text/)
* [Service worker - Declan Rek](https://github.com/decrek/progressive-web-apps-1920/blob/master/examples/movies-example/src/service-worker.js)

## Credits

* [Guido Bouman](https://github.com/guidobouman) - He helped me transform some data
* [Declan Rek](https://github.com/decrek) - For explaining how the service worker works.

## Check it out!

* [Click here to open the live link](https://stefangerrits2.github.io/web-app-from-scratch-1920/)

## License

[MIT](https://github.com/StefanGerrits2/web-app-from-scratch-1920/blob/master/LICENSE.txt) © Stefan Gerrits