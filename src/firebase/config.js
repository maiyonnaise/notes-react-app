import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVIStIVfk3TUFfh6bCMrsbRkxUOgYQrHY",
  authDomain: "notes-react-app-afd97.firebaseapp.com",
  projectId: "notes-react-app-afd97",
  storageBucket: "notes-react-app-afd97.appspot.com",
  messagingSenderId: "556558951988",
  appId: "1:556558951988:web:93b822c3ef4973f335cc61"
}

firebase.initializeApp(firebaseConfig)
export const firestoreData = firebase.firestore()


