//importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
//importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");
//
//firebase.initializeApp({
//    apiKey: "AIzaSyCmZL0C_o9RRTgyDaZO0DY78yr9fGuAdTQ",
//    authDomain: "kisanchat-hinjawadi-dev.firebaseapp.com",
//    databaseURL: "https://kisanchat-hinjawadi-dev.firebaseio.com",
//    projectId: "kisanchat-hinjawadi-dev",
//    storageBucket: "kisanchat-hinjawadi-dev.appspot.com",
//    messagingSenderId: "379951119240",
//    appId: "1:379951119240:web:f420f059597994a716983d",
//});
//// Necessary to receive background messages:
//const messaging = firebase.messaging();
//
//// Optional:
//messaging.onBackgroundMessage((m) => {
//  console.log("onBackgroundMessage", m);
//});

importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
     apiKey: "AIzaSyAtAwiO1IKnunCwvqGA8uNDPAcdspkemqg",
      authDomain: "kisanchat-prod.firebaseapp.com",
      databaseURL: "https://kisanchat-prod.firebaseio.com",
      projectId: "kisanchat-prod",
      storageBucket: "kisanchat-prod.appspot.com",
      messagingSenderId: "143325684355",
      appId: "1:143325684355:web:a098aa55c0b4bc472531b6"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});