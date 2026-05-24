self.addEventListener("install", function(event) {
    console.log("Vindcorp app installert");
});

self.addEventListener("fetch", function(event) {
    event.respondWith(fetch(event.request));
});