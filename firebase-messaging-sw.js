importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
importScripts('firebase-config.js');

firebase.initializeApp(FIREBASE_CONFIG);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
  const title = (payload.notification && payload.notification.title) || 'Fitness Park';
  const body = (payload.notification && payload.notification.body) || '';
  self.registration.showNotification(title, { body: body, icon: 'https://marcuap00-hub.github.io/fitness-park/favicon.png' });
});
