(function() {
  'use strict';

  var filesToCache = [
	'.',
	'index.html',
	'404.html',
	'style.css',
	'project1/calc.js',
	'project2/leafletmap.html',
	'project2/css/mystyle.css'
  ];

  var staticCacheName = 'pages-cache-v1';

  self.addEventListener('install', function(event) {
	console.log('Attempting to install service worker and cache static assets');
	event.waitUntil(
	  caches.open(staticCacheName)
	  .then(function(cache) {
		return cache.addAll(filesToCache);
	  })
	);
  });

  self.addEventListener('fetch', function(event) {
	console.log('Fetch event for ', event.request.url);
	event.respondWith(
	  caches.match(event.request).then(function(response) {
		if (response) {
		  console.log('Found ', event.request.url, ' in cache');
		  return response;
		}
		console.log('Network request for ', event.request.url);
		return fetch(event.request).then(function(response) {
		  if (response.status === 404) {
			return caches.match('404.html');
		  }
		  return caches.open(staticCacheName).then(function(cache) {
			if (event.request.url.indexOf('test') < 0) {
			  cache.put(event.request.url, response.clone());
			}
			return response;
		  });
		});
	  }).catch(function(error) {
		console.log('Error, ', error);
		return caches.match('pages/offline.html');
	  })
	);
  });

})();
