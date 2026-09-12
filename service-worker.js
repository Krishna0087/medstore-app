// Minimal service worker — enables "installable app" behavior.
// Deliberately does not cache Firestore data or pages aggressively,
// so the shop's live product list and orders always stay up to date.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass everything straight through to the network — no offline caching,
  // since medicine stock and prices must always be current.
  event.respondWith(fetch(event.request));
});
