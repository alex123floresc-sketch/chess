/* Añade las cabeceras de aislamiento (COOP/COEP) que GitHub Pages no envía.
   Con ellas el navegador permite SharedArrayBuffer y Stockfish puede usar varios núcleos. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.cache === 'only-if-cached' && req.mode !== 'same-origin') return;
  /* Solo los archivos de esta página; lo demás (fuentes, Chess.com, Lichess) va directo. */
  if (new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(fetch(req).then(function (res) {
    if (res.status === 0) return res;
    var h = new Headers(res.headers);
    h.set('Cross-Origin-Embedder-Policy', 'require-corp');
    h.set('Cross-Origin-Opener-Policy', 'same-origin');
    h.set('Cross-Origin-Resource-Policy', 'cross-origin');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
  }));
});
