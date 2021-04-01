import { createApp } from 'vue'
import App from './App.vue'
import dotenv from "dotenv"
import router from './router'
import firebase from 'firebase/app'

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyA7mqAqpXdcWGZDBDrKx4nKueJvoYrBXmk",
//     authDomain: "gm-ny-wedding.firebaseapp.com",
//     projectId: "gm-ny-wedding",
//     storageBucket: "gm-ny-wedding.appspot.com",
//     messagingSenderId: "1028559128486",
//     appId: "1:1028559128486:web:46c890ec31d659bc5fb167",
//     measurementId: "G-1GPGHPK09T"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>


var firebaseConfig = {
  apiKey: "AIzaSyA7mqAqpXdcWGZDBDrKx4nKueJvoYrBXmk",
  authDomain: "gm-ny-wedding.firebaseapp.com",
  projectId: "gm-ny-wedding",
  storageBucket: "gm-ny-wedding.appspot.com",
  messagingSenderId: "1028559128486",
  appId: "1:1028559128486:web:f2f106e1f44c27d35fb167",
  measurementId: "G-GESMJ9DQ4R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

dotenv.config()

createApp(App)
  .use(router)
  .mount('#app')