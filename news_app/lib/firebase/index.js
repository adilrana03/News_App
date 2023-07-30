// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyB2po9Zy1-JbXFCjP0iefcJ565LK4H0D7o",
      authDomain: "news-app-88cc9.firebaseapp.com",
      projectId: "news-app-88cc9",
      storageBucket: "news-app-88cc9.appspot.com",
      messagingSenderId: "197900835957",
      appId: "1:197900835957:web:d4aad6f33a89bd3997ac3c",
      measurementId: "G-HQP6XVGBFL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const app = getAuth(app);