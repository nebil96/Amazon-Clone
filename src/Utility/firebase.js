    import firebase from "firebase/compat/app";
    //auth
    import { getAuth }  from "firebase/auth"
    import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


    const firebaseConfig = {
    apiKey: "AIzaSyAAu6POprq7X2PjXATpmS3_ggLsxGz8WU0",
    authDomain: "e-clone-c1f68.firebaseapp.com",
    projectId: "e-clone-c1f68",
    storageBucket: "e-clone-c1f68.firebasestorage.app",
    messagingSenderId: "1099211723151",
    appId: "1:1099211723151:web:22408ef79526e5b216bbfa"
    };


    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app)
    export const db = app.getFirestore