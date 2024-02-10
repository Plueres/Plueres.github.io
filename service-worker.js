const CACHE_NAME = 'my-cache';
const urlsToCache = [
    '/',
    '/lists',
    '/articles',
    '/assets/main.css',
    '/scripts/global.js',
    '/scripts/script.js',
    '/scripts/protectedpage.js',
    '/scripts/header.js',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});