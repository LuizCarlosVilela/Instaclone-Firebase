import * as firebase from 'firebase';
import "firebase/database";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCKuuPC-3f5c4TwnO233ZT5FPcVXaP4X84",
        authDomain: "instaclone-1e1af.firebaseapp.com",
        databaseURL: "https://instaclone-1e1af.firebaseio.com",
        projectId: "instaclone-1e1af",
        storageBucket: "instaclone-1e1af.appspot.com",
        messagingSenderId: "1002986209897",
        appId: "1:1002986209897:web:7d967dcf805951e2a318f8",
        measurementId: "G-B9Y2SKHBX0"
    });
}
const conect = firebase.database();
export default conect;
