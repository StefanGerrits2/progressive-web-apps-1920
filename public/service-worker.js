// self.addEventListener('install', event => {     
//     // do I even exist? 
// }); 

// self.addEventListener('activate', event => {     
//     // am I even active? 
// }); 

// self.addEventListener('fetch', event => {     
//     // can I even do cool stuff? 
// });

const CORE_CACHE_NAME = 'core-cache'; 
const CORE_ASSETS = ['/dist/styles.css']; 

self.addEventListener('install', event => {     
    event.waitUntil(caches.open(CORE_CACHE_NAME)             
        .then(cache => cache.addAll(CORE_ASSETS))             
        .then(() => self.skipWaiting())     
    ); 
});