const CACHE_NAME = "vindcorp-v1";

const urlsToCache = [
    "/",
    "/index.html",
    "/tjenester.html",
    "/prosjekter.html",
    "/kontakt.html",
    "/Bilder/app-icon.png",
    "/Bilder/logo1.png",
    "/Bilder/logo2.png",
    "/Bilder/vorszone.png",
    "/Bilder/holth1.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});