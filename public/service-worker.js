const CORE_CACHE = 1;
const CORE_CACHE_NAME = `core-cache-v${CORE_CACHE}`; 
const CORE_ASSETS = [
    '/offline',
    '/dist/styles.css', 
    '/img/header-logo.png',
]; 

self.addEventListener('install', event => {   
    console.log('Service worker install event!');  
    event.waitUntil(caches.open(CORE_CACHE_NAME)             
        .then(cache => cache.addAll(CORE_ASSETS))             
        .then(() => self.skipWaiting())     
    ); 
}); 

self.addEventListener('activate', event => {
    console.log('Activating service worker');
    event.waitUntil(clients.claim());
});
  
self.addEventListener('fetch', event => {
    console.log('Fetch event: ', event.request);
    
    // Cache cores
    if (isCoreGetRequest(event.request)) {
        console.log('Core get request: ', event.request.url);
        // cache only strategy
        event.respondWith(
            caches.open(CORE_CACHE_NAME)
                .then(cache => cache.match(event.request.url))
        );
    // Cache HTML
    } else if (isHtmlGetRequest(event.request)) {
        console.log('html get request', event.request.url);
        // generic fallback
        event.respondWith(
            caches.open('html-cache')
                .then(cache => cache.match(event.request.url))
                .then(response => response ? response : fetchAndCache(event.request, 'html-cache'))
                .catch(e => {
                    return caches.open(CORE_CACHE_NAME)
                        .then(cache => cache.match('/offline'));
                })
        );
    // Cache images
    } else if (isImageGetRequest(event.request)) {
        console.log('img get request', event.request.url);
        // generic fallback
        event.respondWith(
            caches.open('img-cache')
                .then(cache => cache.match(event.request.url))
                .then(response => response ? response : fetchAndCache(event.request.url, 'img-cache'))
                .catch(e => {
                    console.log(e);
                })
        );
    }
});

function fetchAndCache(request, cacheName) {
    return fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new TypeError('Bad response status');
            }

            const clone = response.clone();
            caches.open(cacheName).then((cache) => cache.put(request, clone));
            return response;
        });
}

function isImageGetRequest(request) {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.url.indexOf('.png') > -1);
}

function isHtmlGetRequest(request) {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1);
}

function isCoreGetRequest(request) {
    return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url));
}

function getPathName(requestUrl) {
    const url = new URL(requestUrl);
    return url.pathname;
}