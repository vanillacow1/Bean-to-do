// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDwuelTrnNPJzo6ie76fq8wBnuo_6tqvNE",
  authDomain: "bean-to-do-push.firebaseapp.com",
  projectId: "bean-to-do-push",
  storageBucket: "bean-to-do-push.firebasestorage.app",
  messagingSenderId: "499713658484",
  appId: "1:499713658484:web:3d9b84b812315c92644b21",
  measurementId: "G-DGDZD13KX3",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle =
    payload.notification.title || "Background Message Title";
  const notificationOptions = {
    body: payload.notification.body || "Background Message body.",
    icon: "/icon-180x180.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
