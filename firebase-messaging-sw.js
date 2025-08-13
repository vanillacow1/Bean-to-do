// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging-compat.js");

// Initialize Firebase app in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyDwuelTrnNPJzo6ie76fq8wBnuo_6tqvNE",
  authDomain: "bean-to-do-push.firebaseapp.com",
  projectId: "bean-to-do-push",
  storageBucket: "bean-to-do-push.firebasestorage.app",
  messagingSenderId: "499713658484",
  appId: "1:499713658484:web:3d9b84b812315c92644b21",
  measurementId: "G-DGDZD13KX3",
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle =
    (payload.notification && payload.notification.title) ||
    "Background Message Title";

  const notificationOptions = {
    body:
      (payload.notification && payload.notification.body) ||
      "Background Message body.",
    icon: "/icon-180x180.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
