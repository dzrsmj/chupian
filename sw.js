const CACHE = 'chupian-v1';
const BASE = self.location.pathname.replace(/\/[^/]*$/, '');
const FILES = [BASE + '/', BASE + '/index.html', BASE + '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
