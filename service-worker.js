importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([{"revision":"ceec402e70a004bdcee63e986596c4bd","url":"css/app.fec3962c.css"},{"revision":"3c82d6220bb62a37fc7f4cd1aba15db9","url":"css/chunk-vendors.d8fa72c8.css"},{"revision":"aa5ef0905d25e6bf1aa5ce88073d21f8","url":"dist/service-worker.js"},{"revision":"2d3e8ab68625f24822a4cf2ffa52fdc9","url":"js/app.fc708c75.js"},{"revision":"ed49d027e9034c1abaf3a4a469b63082","url":"precache-manifest.ed49d027e9034c1abaf3a4a469b63082.js"}]);

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}