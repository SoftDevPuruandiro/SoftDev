// src/app/firebase-init.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD-tQaCqCnQ1eZ5u14PfR_1ECrNmecz_54",
  authDomain: "softdev-42d61.firebaseapp.com",
  projectId: "softdev-42d61",
  storageBucket: "softdev-42d61.appspot.com",
  messagingSenderId: "81759146871",
  appId: "1:81759146871:web:a51b5eba56921a14ac8772",
  measurementId: "G-X79NPK0W47"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
