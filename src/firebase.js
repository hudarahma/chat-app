import firebase from 'firebase/app';


const firebaseConfig = {
    apiKey:  process.env.REACT_APP_APIKEY,
    authDomain: "firestore-demo-c7e9d.firebaseapp.com",
    projectId: "firestore-demo-c7e9d",
    storageBucket: "firestore-demo-c7e9d.appspot.com",
    messagingSenderId: "510373461616",
    appId: "1:510373461616:web:6b6333e9e0c1071c593eb5"
};


firebase.initializeApp(firebaseConfig);
export default firebase;