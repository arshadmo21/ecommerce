
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDE3J-XjST50CE2N9EkfvtL3dxbEbu_YNs2",
    authDomain: "ecommerce-505e3.firebaseapp.com",
    projectId: "ecommerce-505e3",
    storageBucket: "ecommerce-505e3.appspot.com",
    messagingSenderId: "3652218711051",
    appId: "1:365221871105:web:79aeefd2047d898b884a000",
    measurementId: "G-34SD4FJ9343"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
