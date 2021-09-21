
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAUGBaf2GklZo5VTXnqQyGCUW2AFkSmfaQ",
    authDomain: "dodo-pizza-copy.firebaseapp.com",
    projectId: "dodo-pizza-copy",
    storageBucket: "dodo-pizza-copy.appspot.com",
    messagingSenderId: "337631861500",
    appId: "1:337631861500:web:90568b51fd4d8a00165579",
    measurementId: "G-PLF1QTC2JC"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
