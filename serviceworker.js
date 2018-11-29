var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/static/core/css/estilos.css',
    '/static/core/css/bootstrap-theme.css',
    '/static/core/css/bootstrap-theme.css.map',
    '/static/core/css/bootstrap-theme.min.css',
    '/static/core/css/bootstrap-theme.min.css.map',
    '/static/core/css/bootstrap.css',
    '/static/core/css/bootstrap.css.map',
    '/static/core/css/bootstrap.min.css',
    '/static/core/css/bootstrap.min.css.map',
    '/static/core/fonts/glyphicons-halflings-regular.eot',
    '/static/core/fonts/glyphicons-halflings-regular.svg',
    '/static/core/fonts/glyphicons-halflings-regular.ttf',
    '/static/core/fonts/glyphicons-halflings-regular.woff',
    '/static/core/fonts/glyphicons-halflings-regular.woff2',
    '/static/core/imagenes/crowfunding.jpg',
    '/static/core/imagenes/logo.png',
    '/static/core/imagenes/perro.png',
    '/static/core/imagenes/rescate.jpg',
    '/static/core/imagenes/social-inst.png',
    '/static/core/imagenes/social-twitter.png',
    '/static/core/imagenes/socialfacebook.png',
    '/static/core/imagenes/socialplus.png',
    '/static/core/imagenes/rescatados/Bigotes.jpg',
    '/static/core/imagenes/rescatados/Chocolate.jpg',
    '/static/core/imagenes/rescatados/Luna.jpg',
    '/static/core/imagenes/rescatados/Maya.jpg',
    '/static/core/imagenes/rescatados/Oso.jpg',
    '/static/core/imagenes/rescatados/Pexel.jpg',
    '/static/core/imagenes/rescatados/Wifi.jpg',
    '/static/core/imagenes/adoptados/Apolo.jpg',
    '/static/core/imagenes/adoptados/Duque.jpg',
    '/static/core/imagenes/adoptados/Tom.jpg',
    '/static/core/js/bootstrap.js',
    '/static/core/js/bootstrap.min.js',
    '/static/core/js/bootstrap.jQuery.js',
    '/static/core/js/npm.js',
    'https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js',
    'https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js',
    '/static/core/js/inicializacion.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if(response) {
                return response;
            }

            return fetch(event.request);
        })
    );
});

importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyC6MDrWM0JIfqxC6u0Vzv6AhWTm1k1dm3o",
    authDomain: "mis-perris-e3766.firebaseapp.com",
    databaseURL: "https://mis-perris-e3766.firebaseio.com",
    projectId: "mis-perris-e3766",
    storageBucket: "mis-perris-e3766.appspot.com",
    messagingSenderId: "353805550253"
  };
  firebase.initializeApp(config);

//agregamos un metodo que estara escuchando cuando llegue una notificacion
//incluso cuando la ventana este cerrada
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){

    console.log(payload);
    var tituloNotification = "titulo"
    var opciones = {
        body:'cuerpo del mensaje',
        icon:'/static/core/imagenes/logo.png'
    }
    
});

    