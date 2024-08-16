'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.storage = exports.db = exports.auth = void 0;
require('dotenv').config();
var app_1 = require('firebase/app');
var auth_1 = require('firebase/auth');
var firestore_1 = require('firebase/firestore');
var storage_1 = require('firebase/storage');
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
exports.db = (0, firestore_1.getFirestore)(app);
exports.storage = (0, storage_1.getStorage)(app);
// console.log(firebaseConfig);
// console.log('Firebase App initialized:', app);
// console.log('Firestore instance:', db);
