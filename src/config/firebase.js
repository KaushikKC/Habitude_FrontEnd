import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoXzj5qBdtWGOOArRpGDAjauCVUJTob6Y",
    authDomain: "habitude-e0b96.firebaseapp.com",
    projectId: "habitude-e0b96",
    storageBucket: "habitude-e0b96.appspot.com",
    messagingSenderId: "863227982554",
    appId: "1:863227982554:web:7a5e084749518148616be3",
    measurementId: "G-84Z92XEQEJ"
  };
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);