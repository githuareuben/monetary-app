// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "firebase/firestore"; /* import the database from firebase*/



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBGnGnxq8jIQ_VuLSwFyU6GwYffe-e_9w",
  authDomain: "old-man-inc.firebaseapp.com",
  projectId: "old-man-inc",
  storageBucket: "old-man-inc.firebasestorage.app",
  messagingSenderId: "231346926392",
  appId: "1:231346926392:web:00faba6fd115604ae987cd",
  measurementId: "G-Z4ENZV28Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize firestore
const db  = getFirestore()

export {db};