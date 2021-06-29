importScripts("/precache-manifest.ed49d027e9034c1abaf3a4a469b63082.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
