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
firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import {
//     initializeApp
// } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import {
//     getFirestore,
//     collection,
//     getDocs,
//     onSnapshot,
//     addDoc,
//     deleteDoc,
//     doc,
//     getDoc,
//     updateDoc,
// } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const analytics = getAnalytics(app);

// // Initialize Firebase

// export const db = getFirestore();

// /**
//  * Save a New Task in Firestore
//  * @param {string} title the title of the Task
//  * @param {string} description the description of the Task
//  */
// export const saveTask = (title, description) =>
//     addDoc(collection(db, NodeFirebaseName), {
//         title,
//         description
//     });

// export const onGetTasks = (callback) =>
//     onSnapshot(collection(db, NodeFirebaseName), callback);

// /**
//  *
//  * @param {string} id Task ID
//  */
// export const deleteTask = (id) => deleteDoc(doc(db, NodeFirebaseName, id));

// export const getTask = (id) => getDoc(doc(db, NodeFirebaseName, id));

// export const updateTask = (id, newFields) =>
//     updateDoc(doc(db, NodeFirebaseName, id), newFields);

// export const getTasks = () => getDocs(collection(db, NodeFirebaseName));