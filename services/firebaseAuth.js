// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAluW2hp654EXW585eSaIzoQffRIC-IVjw",
  authDomain: "userauth-823d5.firebaseapp.com",
  projectId: "userauth-823d5",
  storageBucket: "userauth-823d5.appspot.com",
  messagingSenderId: "936286738747",
  appId: "1:936286738747:web:472eb0b7e09d414596bf1e",
  measurementId: "G-4MGKY6F601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let auth;
if (getApps().length == 0) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    })
}else {
    auth = getAuth();
}


export default auth;
