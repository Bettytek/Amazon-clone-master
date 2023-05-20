// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_ID,
  storageBucket:process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDERID,
  appId: REACT_APP_APPID
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
