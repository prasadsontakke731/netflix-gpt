// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq4LKIpNYyeuSoxIb9RudTrKC6QXuOaic",
    authDomain: "netflix-gpt-9827e.firebaseapp.com",
    projectId: "netflix-gpt-9827e",
    storageBucket: "netflix-gpt-9827e.appspot.com",
    messagingSenderId: "259453217348",
    appId: "1:259453217348:web:e320d8f35cc8ba930d6a11",
    measurementId: "G-E7ZVDPZRF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()