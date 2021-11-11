import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDukVzTKgeetFdri8iAtdZkQtx-m0iNaYg",
    authDomain: "signal-clone-599aa.firebaseapp.com",
    projectId: "signal-clone-599aa",
    storageBucket: "signal-clone-599aa.appspot.com",
    messagingSenderId: "661764021294",
    appId: "1:661764021294:web:7af64833dc7029d3b4d3bf",
}

let app

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
