// Instalação do Service Worker e Cache de recursos
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('galaga').then((cache) => {
            return cache.addAll([
                'index.html',
                'style.css',
                'app.js',
                'galaga_imgs/logo1.png',
                'galaga_imgs/logo2.png',
                'galaga_imgs/logo3.png'
            ]);
        })
    );
});

// Intercepta solicitações de rede e serve os recursos do cache, se disponí­veis
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});