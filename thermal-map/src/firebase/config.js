import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2uKtnbxVH3N8pZcBCTe_ytbFNhYBh2GU",
  authDomain: "thermalmap-f60cd.firebaseapp.com",
  databaseURL: "https://thermalmap-f60cd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thermalmap-f60cd",
  storageBucket: "thermalmap-f60cd.appspot.com",
  messagingSenderId: "627813353949",
  appId: "1:627813353949:web:0a500cf841b74e527a0e34",
  measurementId: "G-6LRRQGRKL3"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;