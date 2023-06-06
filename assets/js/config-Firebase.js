// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFlBUuyf1cOGEEoxRXLNVF7dFfsbJI8YM",
    authDomain: "invitationsucapan.firebaseapp.com",
    databaseURL: "https://invitationsucapan-default-rtdb.firebaseio.com",
    projectId: "invitationsucapan",
    storageBucket: "invitationsucapan.appspot.com",
    messagingSenderId: "625965492866",
    appId: "1:625965492866:web:8a0e5166c3629c3002629b",
    measurementId: "G-GS6WDVCEPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);