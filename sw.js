self.addEventListener('install', event => {
	event.waitUntil(
		caches.open("doorsIdle").then(cache => {
			return cache.addAll([
				'index.html',
				
				'game.js',
				'gameGui.js',
				'gameEngine.js',
				'gameWorker.js',
				
				'game.css',
			])
		})
	)
})


self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return fetch(event.request) || response;
		})
	)
})